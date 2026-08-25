require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const { sendEnquiryEmail, sendContactEmail } = require("./mailer");

const app = express();
const PORT = process.env.PORT || 5000;

// ─────────────────────────────────────────────
// Security Middleware
// ─────────────────────────────────────────────

// Sets secure HTTP headers
app.use(helmet());

// Only allow requests from your frontend
app.use(
  cors({
    origin: [
      "http://localhost:5173",                        // local dev
      "http://localhost:5174",
      process.env.FRONTEND_URL,                       // production Netlify URL
    ].filter(Boolean),
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Parse JSON request bodies
app.use(express.json({ limit: "10kb" })); // limit body size to prevent abuse

// Rate limiter — max 10 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: "Too many requests. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api/", limiter);

// ─────────────────────────────────────────────
// Health Check Route
// ─────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ status: "YM Enterprises API is running ✅" });
});

// ─────────────────────────────────────────────
// POST /api/enquiry — Product Enquiry Modal
// ─────────────────────────────────────────────
app.post(
  "/api/enquiry",
  [
    body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
    body("phone").trim().notEmpty().withMessage("Phone is required").isLength({ max: 20 }),
    body("email").optional().trim().isEmail().withMessage("Invalid email address"),
    body("city").optional().trim().isLength({ max: 100 }),
    body("message").optional().trim().isLength({ max: 1000 }),
    body("productName").optional().trim().isLength({ max: 200 }),
  ],
  async (req, res) => {
    // Validate inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, phone, email, city, message, productName } = req.body;

    try {
      await sendEnquiryEmail({ name, phone, email, city, message, productName });

      console.log(`✅ Enquiry email sent for "${productName}" from ${name} (${phone})`);

      return res.status(200).json({
        success: true,
        message: "Enquiry submitted successfully! Our team will contact you shortly.",
      });
    } catch (error) {
      console.error("❌ Failed to send enquiry email:", error.message);
      return res.status(500).json({
        success: false,
        message: "Failed to send enquiry. Please try again or contact us directly.",
      });
    }
  }
);

// ─────────────────────────────────────────────
// POST /api/contact — Homepage Contact Form
// ─────────────────────────────────────────────
app.post(
  "/api/contact",
  [
    body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
    body("email").trim().notEmpty().isEmail().withMessage("Valid email is required"),
    body("service").optional().trim().isLength({ max: 100 }),
    body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 1000 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, service, message } = req.body;

    try {
      await sendContactEmail({ name, email, service, message });

      console.log(`✅ Contact email sent from ${name} (${email})`);

      return res.status(200).json({
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      });
    } catch (error) {
      console.error("❌ Failed to send contact email:", error.message);
      return res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again or email us directly.",
      });
    }
  }
);

// ─────────────────────────────────────────────
// 404 Handler
// ─────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ─────────────────────────────────────────────
// Start Server
// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 YM Enterprises API running on http://localhost:${PORT}`);
});
