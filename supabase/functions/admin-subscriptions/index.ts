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
    // Create admin client for full access
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get all subscriptions with aggregations
    const { data: subscriptions, error: subError } = await supabase
      .from('subscriptions')
      .select('*')
      .order('created_at', { ascending: false });

    if (subError) {
      console.error('Error fetching subscriptions:', subError);
      throw new Error('Failed to fetch subscriptions');
    }

    // Get payment history
    const { data: payments, error: payError } = await supabase
      .from('payment_history')
      .select('*')
      .order('created_at', { ascending: false });

    if (payError) {
      console.error('Error fetching payments:', payError);
    }

    // Aggregate stats
    const stats = {
      totalSubscribers: subscriptions?.filter(s => s.status === 'active').length || 0,
      totalRevenue: subscriptions?.reduce((sum, s) => sum + (s.plan_price || 0), 0) || 0,
      planDistribution: {
        Metal: subscriptions?.filter(s => s.plan_name === 'Metal').length || 0,
        Silver: subscriptions?.filter(s => s.plan_name === 'Silver').length || 0,
        Gold: subscriptions?.filter(s => s.plan_name === 'Gold').length || 0,
        Platinum: subscriptions?.filter(s => s.plan_name === 'Platinum').length || 0,
      },
    };

    console.log('Admin stats:', stats);

    return new Response(
      JSON.stringify({ 
        success: true, 
        subscriptions,
        payments,
        stats
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (err) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    console.error('Error:', error);
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
