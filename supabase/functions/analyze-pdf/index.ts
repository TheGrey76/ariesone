
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      throw new Error('No file uploaded');
    }

    // Convert PDF to text
    const pdfText = await file.text();

    // Analyze with OpenAI
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const prompt = `
      Analizza il seguente documento di investimento e fornisci:
      - KPI chiave: AUM, IRR, TVPI, strategia GP
      - Analisi dei rischi
      - Potenziale crescita e criticità
      
      Documento:
      ${pdfText.slice(0, 4000)}  // Limitiamo il testo per non superare i token massimi
    `;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'Sei un esperto di analisi finanziaria specializzato nella valutazione di fondi di investimento.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
      }),
    });

    const analysis = await response.json();
    console.log('Analysis completed:', analysis);

    return new Response(
      JSON.stringify({ analysis: analysis.choices[0].message.content }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
