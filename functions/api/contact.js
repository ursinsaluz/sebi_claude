export async function onRequestPost({ request, env }) {
  try {
    // Parse form data
    const formData = await request.formData();
    
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const token = formData.get("cf-turnstile-response");
    const ip = request.headers.get("CF-Connecting-IP");

    // 1. Verify Turnstile Captcha
    const secretKey = env.TURNSTILE_SECRET_KEY || "0x4AAAAAADB_4BrRvxvYJ5UuHxfXWtBkeIk";
    
    const turnstileFormData = new URLSearchParams();
    turnstileFormData.append("secret", secretKey);
    turnstileFormData.append("response", token);
    turnstileFormData.append("remoteip", ip);

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: turnstileFormData,
      }
    );

    const turnstileOutcome = await turnstileResponse.json();

    if (!turnstileOutcome.success) {
      return new Response(JSON.stringify({ success: false, error: "Captcha fehlgeschlagen." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 2. Send Email using Resend
    const resendApiKey = env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not configured.");
      return new Response(JSON.stringify({ success: false, error: "Server-Konfigurationsfehler: E-Mail Dienst nicht eingerichtet." }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Kontaktformular <onboarding@resend.dev>", // Resend default test sender
        to: "info@titz.cooking", // Receiver
        subject: `Neue Kontaktanfrage von ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
               <p><strong>Nachricht:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
      })
    });

    if (!emailResponse.ok) {
      const emailError = await emailResponse.text();
      console.error("Resend Error:", emailError);
      return new Response(JSON.stringify({ success: false, error: "E-Mail konnte nicht gesendet werden." }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ success: true, message: "Nachricht erfolgreich gesendet!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
