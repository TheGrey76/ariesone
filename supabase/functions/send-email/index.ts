import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const emailRequest: EmailRequest = await req.json();
    
    // Input validation
    if (!emailRequest.name?.trim() || emailRequest.name.length > 100) {
      return new Response(
        JSON.stringify({ error: "Invalid name" }), 
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    if (!emailRequest.email?.trim() || emailRequest.email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRequest.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email" }), 
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    if (!emailRequest.message?.trim() || emailRequest.message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Invalid message" }), 
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    // Sanitize inputs
    const sanitizedName = emailRequest.name.trim().replace(/[<>]/g, '');
    const sanitizedEmail = emailRequest.email.trim();
    const sanitizedCompany = emailRequest.company?.trim().replace(/[<>]/g, '') || 'Not provided';
    const sanitizedMessage = emailRequest.message.trim().replace(/[<>]/g, '');
    
    console.log("Processing email request from:", sanitizedEmail);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Aires Data <quinley.martini@aries76.com>",
        to: ["edoardo.grigione@aries76.com"],
        subject: `New Contact Form Submission from ${sanitizedName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Company/Fund:</strong> ${sanitizedCompany}</p>
          <p><strong>Message:</strong></p>
          <p>${sanitizedMessage}</p>
        `,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log("Email sent successfully:", data);

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } else {
      const error = await res.text();
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);