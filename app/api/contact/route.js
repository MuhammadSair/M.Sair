import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, message } = body;

    if (!fullName || !email || !message) {
      return Response.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // e.g., contact@eishaanwar.me
      to: process.env.RESEND_TO_EMAIL, // your personal or support email
      subject: `New message from ${fullName} via Portfolio`,
      reply_to: email,
      html: `
        <strong>Full Name:</strong> ${fullName}<br/>
        <strong>Email:</strong> ${email}<br/><br/>
        <strong>Message:</strong><br/>${message}
      `,
    });

    return Response.json({ success: true, data: response });
  } catch (error) {
    console.error("[Resend Error]", error);
    return Response.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
