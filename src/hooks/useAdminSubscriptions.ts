import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SubscriptionData {
  id: string;
  user_id: string;
  plan_name: string;
  plan_price: number;
  billing_cycle: string;
  status: string;
  start_date: string;
  end_date: string;
  created_at: string;
}

interface PaymentData {
  id: string;
  user_id: string;
  subscription_id: string;
  amount: number;
  status: string;
  created_at: string;
}

interface SubscriptionStats {
  totalSubscribers: number;
  totalRevenue: number;
  planDistribution: {
    Metal: number;
    Silver: number;
    Gold: number;
    Platinum: number;
  };
}

export const useAdminSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<SubscriptionData[]>([]);
  const [payments, setPayments] = useState<PaymentData[]>([]);
  const [stats, setStats] = useState<SubscriptionStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('admin-subscriptions');

        if (error) {
          console.error('Error fetching admin data:', error);
          setError(error.message);
          return;
        }

        if (data?.success) {
          setSubscriptions(data.subscriptions || []);
          setPayments(data.payments || []);
          setStats(data.stats || null);
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to fetch subscription data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { subscriptions, payments, stats, isLoading, error };
};
