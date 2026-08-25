import nodemailer from "nodemailer";

const getTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_APP_PASSWORD,
    },
  });
};

const sendEnquiryEmail = async (data) => {
  const { name, phone, email, city, message, productName, productUrl } = data;
  const transporter = getTransporter();

  const productDisplay = productUrl 
    ? `<a href="${productUrl}" style="color: #1a535c; text-decoration: none; border-bottom: 1px dashed #1a535c;">${productName || "General Enquiry"}</a>`
    : (productName || "General Enquiry");

  const mailOptions = {
    from: `"YM Enterprises Website" <${process.env.ZOHO_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: email || process.env.ZOHO_USER,
    subject: `🔔 New Enquiry — ${productName || "Product Enquiry"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 10px; overflow: hidden;">
        <div style="background: #1a535c; padding: 24px 32px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">🔔 New Product Enquiry</h2>
          <p style="color: #c4a265; margin: 6px 0 0; font-size: 14px;">Received from YM Enterprises Website</p>
        </div>
        <div style="background: #ffffff; padding: 24px 32px; border-bottom: 2px solid #f0f0f0;">
          <p style="margin: 0; font-size: 12px; color: #c4a265; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Enquired Product</p>
          <h3 style="margin: 6px 0 0; color: #1a535c; font-size: 18px;">${productDisplay}</h3>
        </div>
        <div style="background: #ffffff; padding: 24px 32px;">
          <h4 style="margin: 0 0 16px; color: #333333; font-size: 15px;">Customer Details</h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 140px; font-weight: bold;">👤 Name</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 4px; color: #888; font-weight: bold;">📞 Phone</td>
              <td style="padding: 8px 4px; color: #333;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; font-weight: bold;">📧 Email</td>
              <td style="padding: 8px 0; color: #333;">${email || "Not provided"}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 4px; color: #888; font-weight: bold;">📍 City</td>
              <td style="padding: 8px 4px; color: #333;">${city || "Not provided"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; background: #f0f7f8; border-left: 4px solid #1a535c; padding: 14px 16px; border-radius: 4px;">
            <p style="margin: 0 0 6px; font-size: 12px; color: #888; font-weight: bold; text-transform: uppercase;">Message</p>
            <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">${message || "No message provided."}</p>
          </div>
        </div>
        <div style="background: #f0f0f0; padding: 16px 32px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #999;">
            Sent automatically from <strong>yazhmaruthaenterprises.com</strong> enquiry form
          </p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

const sendCustomerConfirmationEmail = async (data) => {
  const { name, email, productName, service } = data;
  if (!email) return;

  const transporter = getTransporter();
  const subject = productName 
    ? `Thank you for your enquiry — ${productName}` 
    : `We have received your message!`;
  const itemOfInterest = productName || service || "our services";

  const mailOptions = {
    from: `"Yazh Marutha Enterprises" <${process.env.ZOHO_USER}>`,
    to: email,
    subject: subject,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background: #1a535c; padding: 30px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 24px;">Thank You, ${name}!</h2>
          <p style="color: #c4a265; margin: 8px 0 0; font-size: 15px;">Your request has been successfully received.</p>
        </div>
        <div style="padding: 32px; color: #333333; line-height: 1.6;">
          <p>Hi <strong>${name}</strong>,</p>
          <p>Thank you for getting in touch with Yazh Marutha Enterprises.</p>
          <p>We have successfully received your enquiry regarding <strong>${itemOfInterest}</strong>. Our expert team is currently reviewing your request and will get back to you shortly with the details you need.</p>
          <div style="background: #f9f9f9; padding: 16px; border-radius: 6px; margin: 24px 0; border-left: 4px solid #c4a265;">
            <p style="margin: 0; font-size: 14px;"><strong>Note:</strong> This is an automated confirmation email. You don't need to reply to this message.</p>
          </div>
          <p>If you need immediate assistance, please don't hesitate to call us directly.</p>
          <p style="margin-top: 32px; margin-bottom: 0;">Best Regards,</p>
          <p style="margin-top: 4px; font-weight: bold; color: #1a535c;">Team Yazh Marutha Enterprises</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

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
