import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const tickers = ['JAAA', 'CLOA', 'CLOI', 'HYG', 'EMB'];
    const promises = tickers.map(async (ticker) => {
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
    });

    const results = await Promise.all(promises);
    
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

    if (error) throw error;

    return new Response(
      JSON.stringify({ success: true, data: results }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});