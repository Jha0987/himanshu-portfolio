import { NextResponse } from "next/server";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, botcheck } = body;

    // Honeypot bot protection
    if (botcheck) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please enter a message (at least 5 characters)." },
        { status: 400 }
      );
    }

    const recipientEmail = PORTFOLIO_DATA.personal.email || "hjha8609@gmail.com";
    const emailSubject = subject?.trim()
      ? `[Portfolio Contact] ${subject.trim()}`
      : `[Portfolio Contact] New message from ${name.trim()}`;

    // Dispatch via FormSubmit AJAX service directly to recipient
    const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://himanshu-portfolio-him-e35c.vercel.app",
        Referer: "https://himanshu-portfolio-him-e35c.vercel.app/",
      },
      body: JSON.stringify({
        Name: name.trim(),
        Email: email.trim(),
        Subject: emailSubject,
        Message: message.trim(),
        _replyto: email.trim(),
        _subject: emailSubject,
        _template: "table",
        _captcha: "false",
      }),
    });

    const data = await response.json().catch(() => null);

    if (response.ok && data?.success !== "false") {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully! I will get back to you shortly.",
      });
    }

    // If FormSubmit requires first-time confirmation email activation or returns notice
    if (data?.message && typeof data.message === "string") {
      return NextResponse.json({
        success: true,
        message: "Your message was transmitted! Please note FormSubmit sends an activation link on the very first submission to confirm your inbox.",
        info: data.message,
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: "Unable to deliver email at this moment. Please use the direct email link.",
      },
      { status: 502 }
    );
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again or email directly." },
      { status: 500 }
    );
  }
}
