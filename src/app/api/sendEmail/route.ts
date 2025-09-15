import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website?: string;
  service: string;
  budget: string;
  message: string;
  recaptchaToken?: string;
}

export async function POST(req: NextRequest) {
  try {
    const formData: ContactFormData = await req.json();
    const {
      name,
      email,
      phone,
      company,
      website,
      service,
      budget,
      message,
      recaptchaToken,
    } = formData;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // reCAPTCHA verification (only in production)
    const isProduction = process.env.NODE_ENV === "production";

    if (isProduction && recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      try {
        // console.log("🛡️ Production: Verifying reCAPTCHA token...");
        const recaptchaResponse = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
          { method: "POST" }
        );
        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success || recaptchaData.score < 0.5) {
          console.warn("reCAPTCHA verification failed:", recaptchaData);
          return NextResponse.json(
            { message: "Security verification failed. Please try again." },
            { status: 400 }
          );
        }
        // console.log(
        //   `✅ reCAPTCHA verified successfully (score: ${recaptchaData.score})`
        // );
      } catch (error) {
        console.warn("reCAPTCHA verification error:", error);
        // Continue without failing if reCAPTCHA service is down
      }
    } else if (!isProduction) {
      console.log("🔧 Development mode: Skipping reCAPTCHA verification");
    } else if (isProduction && !process.env.RECAPTCHA_SECRET_KEY) {
      console.warn("⚠️ Production mode: RECAPTCHA_SECRET_KEY not configured");
    }

    // Log SMTP configuration (without password)
    console.log("🔧 SMTP Configuration:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASS,
      passwordLength: process.env.SMTP_PASS?.length,
    });

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      debug: !isProduction, // Enable debug in development
      logger: !isProduction, // Enable logging in development
    });

    // Test SMTP connection
    try {
      await transporter.verify();
    } catch (error) {
      return NextResponse.json(
        {
          message: "Email service configuration error. Please contact support.",
        },
        { status: 500 }
      );
    }

    // Create professional email template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission - Anfinity</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #E51D28; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p>You have received a new quote request from your website.</p>
              
              <div class="field">
                <div class="label">Full Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email Address:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Phone Number:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${company}</div>
              </div>
              
              ${
                website
                  ? `
              <div class="field">
                <div class="label">Website:</div>
                <div class="value"><a href="${website}" target="_blank">${website}</a></div>
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <div class="label">Service Requested:</div>
                <div class="value">${service}</div>
              </div>
              
              <div class="field">
                <div class="label">Budget Range (EUR):</div>
                <div class="value">${budget}</div>
              </div>
              
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Anfinity website contact form.</p>
              <p>Submitted on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Contact Form Submission - Anfinity

Full Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
${website ? `Website: ${website}` : ""}
Service: ${service}
Budget: ${budget}

Message:
${message}

Submitted on: ${new Date().toLocaleString()}
    `;
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      replyTo: email,
      subject: `New Quote Request from ${name} - ${service}`,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json(
      {
        message:
          "Your message has been sent successfully. We'll get back to you!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Email API Error:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        message:
          "Sorry, there was an error sending your message. Please try again or contact us directly.",
        success: false,
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Internal server error",
      },
      { status: 500 }
    );
  }
}
