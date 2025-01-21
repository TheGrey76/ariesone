import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

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
    const tickers = ['JAAA', 'CLOA', 'CLOI', 'HYG', 'EMB'];
    console.log('Fetching data for tickers:', tickers);

    const promises = tickers.map(async (ticker) => {
      try {
        const response = await fetch(
          `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&range=1d`
        );
        const data = await response.json();
        return {
          ticker,
          price: data?.chart?.result?.[0]?.meta?.regularMarketPrice || 0,
          volume: data?.chart?.result?.[0]?.meta?.regularMarketVolume || 0,
          timestamp: new Date().toISOString(),
        };
      } catch (error) {
        console.error(`Error fetching data for ticker ${ticker}:`, error);
        return {
          ticker,
          price: 0,
          volume: 0,
          timestamp: new Date().toISOString(),
        };
      }
    });

    const results = await Promise.all(promises);
    console.log('Fetched stock data:', results);

    // Initialize Supabase client with service role key
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables');
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseKey);
    
    // Update the database with new prices
    const { data, error } = await supabaseAdmin
      .from('stocks')
      .upsert(
        results.map(result => ({
          ticker: result.ticker,
          price: result.price,
          volume: result.volume,
          updated_at: result.timestamp,
        })),
        { onConflict: 'ticker' }
      );

    if (error) {
      console.error('Error updating stock data:', error);
      throw error;
    }

    console.log('Successfully updated stock data:', results);

    return new Response(
      JSON.stringify({ success: true, data: results }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in fetch-stock-data function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'An error occurred while fetching stock data' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
        status: 500 
      }
    );
  }
});