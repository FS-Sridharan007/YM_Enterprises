const nodemailer = require("nodemailer");

// Zoho Mail SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",       // Use smtp.zoho.com if your account is not India-based
  port: 465,
  secure: true,               // true for port 465 (SSL)
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_APP_PASSWORD,
  },
});

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error("❌ Zoho SMTP connection failed:", error.message);
  } else {
    console.log("✅ Zoho SMTP connected — ready to send emails");
  }
});

/**
 * Send an enquiry email to the business owner
 * @param {Object} data - { name, phone, email, city, message, productName }
 */
const sendEnquiryEmail = async (data) => {
  const { name, phone, email, city, message, productName } = data;

  const mailOptions = {
    from: `"YM Enterprises Website" <${process.env.ZOHO_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: email || process.env.ZOHO_USER,
    subject: `🔔 New Enquiry — ${productName || "Product Enquiry"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 10px; overflow: hidden;">
        
        <!-- Header -->
        <div style="background: #1a535c; padding: 24px 32px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">🔔 New Product Enquiry</h2>
          <p style="color: #c4a265; margin: 6px 0 0; font-size: 14px;">Received from YM Enterprises Website</p>
        </div>

        <!-- Product Info -->
        <div style="background: #ffffff; padding: 24px 32px; border-bottom: 2px solid #f0f0f0;">
          <p style="margin: 0; font-size: 12px; color: #c4a265; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Enquired Product</p>
          <h3 style="margin: 6px 0 0; color: #1a535c; font-size: 18px;">${productName || "General Enquiry"}</h3>
        </div>

        <!-- Customer Details -->
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

          <!-- Message -->
          <div style="margin-top: 20px; background: #f0f7f8; border-left: 4px solid #1a535c; padding: 14px 16px; border-radius: 4px;">
            <p style="margin: 0 0 6px; font-size: 12px; color: #888; font-weight: bold; text-transform: uppercase;">Message</p>
            <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">${message}</p>
          </div>
        </div>

        <!-- Footer -->
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

/**
 * Send an enquiry email from the Contact section (general — no product)
 * @param {Object} data - { name, email, service, message }
 */
const sendContactEmail = async (data) => {
  const { name, email, service, message } = data;

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

        <div style="background: #f0f0f0; padding: 16px 32px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #999;">
            Sent automatically from <strong>yazhmaruthaenterprises.com</strong> contact form
          </p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEnquiryEmail, sendContactEmail };
