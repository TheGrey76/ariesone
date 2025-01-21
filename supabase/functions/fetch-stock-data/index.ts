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

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables');
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseKey);

    const results = await Promise.all(tickers.map(async (ticker) => {
      try {
        // First fetch basic stock data
        console.log(`Fetching basic data for ${ticker}`);
        const response = await fetch(
          `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&range=1d`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch basic data for ${ticker}: ${response.statusText}`);
        }
        const data = await response.json();
        
        // Then fetch detailed quote data
        console.log(`Fetching quote data for ${ticker}`);
        const quoteResponse = await fetch(
          `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${ticker}?modules=defaultKeyStatistics,summaryDetail,price`
        );
        if (!quoteResponse.ok) {
          throw new Error(`Failed to fetch quote data for ${ticker}: ${quoteResponse.statusText}`);
        }
        const quoteData = await quoteResponse.json();
        
        const summaryDetail = quoteData?.quoteSummary?.result?.[0]?.summaryDetail || {};
        const priceData = quoteData?.quoteSummary?.result?.[0]?.price || {};
        
        // Ensure we have a valid name
        const name = priceData?.longName || priceData?.shortName || ticker;
        console.log(`Processing ${ticker} with name: ${name}`);
        
        return {
          ticker,
          name,
          sector: priceData?.sector || 'Unknown',
          market_cap: summaryDetail?.marketCap?.raw || 0,
          price: data?.chart?.result?.[0]?.meta?.regularMarketPrice || 0,
          pe_ratio: summaryDetail?.trailingPE?.raw || 0,
          dividend_yield: (summaryDetail?.dividendYield?.raw || 0),
          beta: summaryDetail?.beta?.raw || 0,
          volume: data?.chart?.result?.[0]?.meta?.regularMarketVolume || 0,
          timestamp: new Date().toISOString(),
        };
      } catch (error) {
        console.error(`Error fetching data for ticker ${ticker}:`, error);
        // Return a default object with the ticker as name to prevent null values
        return {
          ticker,
          name: ticker, // Use ticker as name to prevent null constraint violation
          sector: 'Unknown',
          market_cap: 0,
          price: 0,
          pe_ratio: 0,
          dividend_yield: 0,
          beta: 0,
          volume: 0,
          timestamp: new Date().toISOString(),
        };
      }
    }));

    console.log('Fetched stock data:', results);

    // Validate data before upserting
    const validResults = results.filter(result => {
      if (!result.name || !result.ticker) {
        console.error(`Invalid data for ticker ${result.ticker}:`, result);
        return false;
      }
      return true;
    });

    if (validResults.length === 0) {
      throw new Error('No valid stock data to update');
    }

    // Update the database with new prices
    const { data, error } = await supabaseAdmin
      .from('stocks')
      .upsert(
        validResults.map(result => ({
          ticker: result.ticker,
          name: result.name,
          sector: result.sector,
          market_cap: result.market_cap,
          price: result.price,
          pe_ratio: result.pe_ratio,
          dividend_yield: result.dividend_yield,
          beta: result.beta,
          volume: result.volume,
          updated_at: result.timestamp,
        })),
        { onConflict: 'ticker' }
      );

    if (error) {
      console.error('Error updating stock data:', error);
      throw error;
    }

    console.log('Successfully updated stock data');

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