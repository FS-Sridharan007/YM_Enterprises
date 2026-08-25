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

const sendContactEmail = async (data) => {
  const { name, email, service, message } = data;
  const transporter = getTransporter();

  const mailOptions = {
    from: `"YM Enterprises Website" <${process.env.ZOHO_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: email || process.env.ZOHO_USER,
    subject: `📩 New Contact Form — ${service || "General Enquiry"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 10px; overflow: hidden;">
        <div style="background: #1a535c; padding: 24px 32px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">📩 New Contact Message</h2>
          <p style="color: #c4a265; margin: 6px 0 0; font-size: 14px;">From the homepage contact form</p>
        </div>
        <div style="background: #ffffff; padding: 24px 32px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 140px; font-weight: bold;">👤 Name</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 4px; color: #888; font-weight: bold;">📧 Email</td>
              <td style="padding: 8px 4px; color: #333;">${email || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; font-weight: bold;">🔧 Service</td>
              <td style="padding: 8px 0; color: #333;">${service || "Not specified"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; background: #f0f7f8; border-left: 4px solid #1a535c; padding: 14px 16px; border-radius: 4px;">
            <p style="margin: 0 0 6px; font-size: 12px; color: #888; font-weight: bold; text-transform: uppercase;">Message</p>
            <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">${message}</p>
          </div>
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
    const { name, email, service, message } = data;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ success: false, message: "Name, email, and message are required." }),
      };
    }

    // Send emails concurrently to cut the wait time in half
    const emailTasks = [
      sendContactEmail({ name, email, service, message })
    ];

    if (email) {
      emailTasks.push(sendCustomerConfirmationEmail({ name, email, service }));
    }

    await Promise.all(emailTasks);

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
