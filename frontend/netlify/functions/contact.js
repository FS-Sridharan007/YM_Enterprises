import { sendContactEmail, sendCustomerConfirmationEmail } from "./mailer.js";

export const handler = async (event, context) => {
  // CORS Preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "OK",
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, service, message } = data;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ success: false, message: "Name, email, and message are required." }),
      };
    }

    // Send emails
    await sendContactEmail({ name, email, service, message });
    await sendCustomerConfirmationEmail({ name, email, service });

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      }),
    };
  } catch (error) {
    console.error("Contact Error:", error);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        success: false,
        message: "Failed to send message. Please try again or email us directly.",
        error: error.message,
      }),
    };
  }
};
