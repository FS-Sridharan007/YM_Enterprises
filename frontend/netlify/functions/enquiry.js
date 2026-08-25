import { sendEnquiryEmail, sendCustomerConfirmationEmail } from "./mailer.js";

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
    const { name, phone, email, city, message, productName, productUrl } = data;

    if (!name || !phone) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ success: false, message: "Name and phone are required." }),
      };
    }

    // Send emails
    await sendEnquiryEmail({ name, phone, email, city, message, productName, productUrl });
    
    if (email) {
      await sendCustomerConfirmationEmail({ name, email, productName });
    }

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        success: true,
        message: "Enquiry submitted successfully! Our team will contact you shortly.",
      }),
    };
  } catch (error) {
    console.error("Enquiry Error:", error);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        success: false,
        message: "Server Error: " + error.message,
        error: error.message,
      }),
    };
  }
};
