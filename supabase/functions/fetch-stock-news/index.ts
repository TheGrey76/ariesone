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

    const apiKey = Deno.env.get('FINNHUB_API_KEY')
    if (!apiKey) {
      throw new Error('API key not configured')
    }

    console.log(`Fetching news for ticker: ${ticker}`)
    
    // Calculate date from 7 days ago
    const toDate = new Date()
    const fromDate = new Date()
    fromDate.setDate(fromDate.getDate() - 7)
    
    // Format dates as YYYY-MM-DD
    const from = fromDate.toISOString().split('T')[0]
    const to = toDate.toISOString().split('T')[0]
    
    console.log(`Fetching news from: ${from} to: ${to}`)
    
    const response = await fetch(
      `https://finnhub.io/api/v1/company-news?symbol=${ticker}&from=${from}&to=${to}&token=${apiKey}`
    )
    
    if (!response.ok) {
      throw new Error(`Finnhub API error: ${response.statusText}`)
    }
    
    const newsItems = await response.json()
    console.log(`Received ${newsItems.length} news items`)

    // Process and format the news data to match our existing structure
    const processedNews = newsItems
      .filter(item => item.headline && item.url && item.summary) // Filter out items missing required fields
      .map(item => ({
        title: item.headline,
        url: item.url,
        time_published: new Date(item.datetime * 1000).toISOString(),
        summary: item.summary,
        source: item.source,
        sentiment_score: item.sentiment || 0,
        relevance_score: 1,
      }))
      .slice(0, 20) // Limit to 20 items

    // Group by source and limit items per source
    const sourceCount = new Map()
    const diverseNews = processedNews.filter(item => {
      const count = sourceCount.get(item.source) || 0
      if (count < 3) { // Limit to 3 articles per source
        sourceCount.set(item.source, count + 1)
        return true
      }
      return false
    })

    return new Response(
      JSON.stringify({ feed: diverseNews }),
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