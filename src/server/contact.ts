import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  error?: string;
  data?: { id?: string };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: ContactFormData): ContactFormData => {
    const name = data?.name?.trim();
    const email = data?.email?.trim();
    const message = data?.message?.trim();
    const subject = data?.subject?.trim() || "";

    if (!name) {
      throw new Error("Name is required.");
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("A valid email is required.");
    }
    if (!message) {
      throw new Error("Message is required.");
    }

    return { name, email, subject, message };
  })
  .handler(async ({ data }): Promise<ContactResponse> => {
    const { name, email, subject, message } = data;

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.TO_EMAIL || "nasywan044@gmail.com";
    const senderEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is missing.");
      return {
        success: false,
        error:
          "Email delivery service is currently not configured. Please contact directly via email.",
      };
    }

    try {
      const resend = new Resend(apiKey);
      const emailSubject = subject ? `[Portfolio Contact] ${subject}` : `New Message from ${name}`;

      const textBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(No Subject)"}\n\nMessage:\n${message}`;

      const htmlBody = `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #172033; border-bottom: 2px solid #8CC0EB; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
          <p style="margin: 12px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 12px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #0284c7; text-decoration: none;">${escapeHtml(email)}</a></p>
          <p style="margin: 12px 0;"><strong>Subject:</strong> ${escapeHtml(subject || "(No Subject)")}</p>
          <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <h3 style="color: #172033; margin-bottom: 8px;">Message:</h3>
          <div style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 8px; color: #334155; line-height: 1.6; border: 1px solid #f1f5f9;">${escapeHtml(message)}</div>
        </div>
      `;

      const response = await resend.emails.send({
        from: senderEmail,
        to: [recipientEmail],
        replyTo: email,
        subject: emailSubject,
        text: textBody,
        html: htmlBody,
      });

      if (response.error) {
        console.error("Resend API error:", response.error);
        return {
          success: false,
          error: response.error.message || "Failed to deliver email.",
        };
      }

      return {
        success: true,
        data: response.data ? { id: response.data.id } : undefined,
      };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
      console.error("Error sending contact email:", err);
      return {
        success: false,
        error: errorMessage,
      };
    }
  });
