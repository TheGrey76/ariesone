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
        console.log(`Starting to fetch data for ${ticker}`);
        
        // First try to get the quote data which contains the name
        const quoteResponse = await fetch(
          `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${ticker}?modules=price,summaryDetail`
        );
        
        if (!quoteResponse.ok) {
          console.error(`Failed to fetch quote data for ${ticker}: ${quoteResponse.statusText}`);
          throw new Error(`Failed to fetch quote data for ${ticker}`);
        }
        
        const quoteData = await quoteResponse.json();
        console.log(`Quote data received for ${ticker}:`, JSON.stringify(quoteData));
        
        // Get the price data which contains the name
        const priceData = quoteData?.quoteSummary?.result?.[0]?.price;
        const summaryDetail = quoteData?.quoteSummary?.result?.[0]?.summaryDetail;
        
        // Ensure we have a valid name, with multiple fallbacks
        const name = priceData?.longName || priceData?.shortName || ticker;
        console.log(`Name resolved for ${ticker}: ${name}`);
        
        if (!name) {
          throw new Error(`Could not determine name for ticker ${ticker}`);
        }

        // Then get the chart data for price and volume
        const chartResponse = await fetch(
          `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&range=1d`
        );
        
        if (!chartResponse.ok) {
          console.error(`Failed to fetch chart data for ${ticker}: ${chartResponse.statusText}`);
          throw new Error(`Failed to fetch chart data for ${ticker}`);
        }
        
        const chartData = await chartResponse.json();
        console.log(`Chart data received for ${ticker}`);
        
        const stockData = {
          ticker,
          name, // This should never be null now
          sector: priceData?.sector || 'Unknown',
          market_cap: summaryDetail?.marketCap?.raw || 0,
          price: chartData?.chart?.result?.[0]?.meta?.regularMarketPrice || 0,
          pe_ratio: summaryDetail?.trailingPE?.raw || 0,
          dividend_yield: summaryDetail?.dividendYield?.raw || 0,
          beta: summaryDetail?.beta?.raw || 0,
          volume: chartData?.chart?.result?.[0]?.meta?.regularMarketVolume || 0,
          updated_at: new Date().toISOString(),
        };
        
        console.log(`Processed data for ${ticker}:`, stockData);
        return stockData;
        
      } catch (error) {
        console.error(`Error processing ${ticker}:`, error);
        // Return a valid object with the ticker as the name to prevent null constraint violation
        return {
          ticker,
          name: ticker, // Using ticker as name ensures we never have a null name
          sector: 'Unknown',
          market_cap: 0,
          price: 0,
          pe_ratio: 0,
          dividend_yield: 0,
          beta: 0,
          volume: 0,
          updated_at: new Date().toISOString(),
        };
      }
    }));

    // Validate the results before attempting to upsert
    const validResults = results.filter(result => {
      const isValid = result && result.name && result.ticker;
      if (!isValid) {
        console.error(`Invalid data found:`, result);
      }
      return isValid;
    });

    if (validResults.length === 0) {
      throw new Error('No valid stock data to update');
    }

    console.log(`Attempting to upsert ${validResults.length} valid records`);

    // Update the database with new prices
    const { data, error } = await supabaseAdmin
      .from('stocks')
      .upsert(validResults, { onConflict: 'ticker' });

    if (error) {
      console.error('Error upserting stock data:', error);
      throw error;
    }

    console.log('Successfully updated stock data');

    return new Response(
      JSON.stringify({ success: true, data: validResults }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        } 
      }
    );
  } catch (error) {
    console.error('Error in fetch-stock-data function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'An error occurred while fetching stock data' 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        },
        status: 500 
      }
    );
  }
});