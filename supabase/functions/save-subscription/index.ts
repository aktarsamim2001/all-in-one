import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('No authorization header');
    }

    // Create Supabase client with user's auth
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: authHeader },
        },
      }
    );

    // Get user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      console.error('Auth error:', userError);
      throw new Error('Unauthorized');
    }

    const { 
      plan_name, 
      plan_price, 
      billing_cycle,
      razorpay_order_id, 
      razorpay_payment_id 
    } = await req.json();

    console.log('Saving subscription for user:', user.id, { plan_name, plan_price, billing_cycle });

    // Calculate end date based on billing cycle
    const startDate = new Date();
    const endDate = new Date();
    if (billing_cycle === 'yearly') {
      endDate.setFullYear(endDate.getFullYear() + 1);
    } else {
      endDate.setMonth(endDate.getMonth() + 1);
    }

    // Insert subscription
    const { data: subscription, error: subError } = await supabase
      .from('subscriptions')
      .insert({
        user_id: user.id,
        plan_name,
        plan_price,
        billing_cycle,
        razorpay_order_id,
        razorpay_payment_id,
        status: 'active',
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
      })
      .select()
      .single();

    if (subError) {
      console.error('Subscription insert error:', subError);
      throw new Error('Failed to save subscription');
    }

    // Insert payment history
    const { error: paymentError } = await supabase
      .from('payment_history')
      .insert({
        user_id: user.id,
        subscription_id: subscription.id,
        amount: plan_price,
        currency: 'INR',
        razorpay_order_id,
        razorpay_payment_id,
        status: 'completed',
        payment_method: 'razorpay',
      });

    if (paymentError) {
      console.error('Payment history insert error:', paymentError);
    }

    console.log('Subscription saved successfully:', subscription.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        subscription 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (err) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    console.error('Error saving subscription:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    );
  }
});
