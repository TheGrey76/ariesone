import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { ticker } = await req.json()
    if (!ticker) {
      throw new Error('No ticker provided')
    }

    const apiKey = Deno.env.get('ALPHA_VANTAGE_API_KEY')
    if (!apiKey) {
      throw new Error('API key not configured')
    }

    console.log(`Fetching news for ticker: ${ticker}`)
    const response = await fetch(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&sort=RELEVANCE&limit=10&apikey=${apiKey}`
    )
    
    if (!response.ok) {
      throw new Error(`Alpha Vantage API error: ${response.statusText}`)
    }
    
    const data = await response.json()
    console.log('News data received:', data)

    // Check if we have actual news items
    if (!data.feed || data.feed.length === 0) {
      console.log('No news items found in response')
      if (data.Information) {
        console.log('API Information:', data.Information)
      }
    }

    return new Response(
      JSON.stringify(data),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    )
  }
})