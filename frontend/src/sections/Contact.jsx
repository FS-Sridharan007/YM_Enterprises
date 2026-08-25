import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Force using Netlify Functions by ignoring the old VITE_API_URL completely.
    const API_URL = import.meta.env.VITE_LOCAL_BACKEND_URL || "";
    const endpoint = API_URL ? `${API_URL}/api/contact` : `/.netlify/functions/contact`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-brand-teal">Get in Touch</h2>
          <p className="text-gray-500 mt-2">Ready for a brighter future? Contact us for a free consultation.</p>
        </div>
        <motion.div
          className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg border border-gray-200/80"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {submitted ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-4xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-brand-teal mb-2">Message Sent!</h3>
              <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                Thank you <span className="font-semibold text-brand-teal">{formData.name}</span>! We've received your message and will get back to you shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", service: "", message: "" }); }}
                className="mt-6 bg-brand-teal text-white font-bold px-8 py-3 rounded-full hover:bg-brand-teal/90 transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 bg-brand-cream/60 border-transparent border-2 rounded-lg focus:ring-2 focus:ring-brand-gold focus:outline-none focus:border-brand-gold"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-3 bg-brand-cream/60 border-transparent border-2 rounded-lg focus:ring-2 focus:ring-brand-gold focus:outline-none focus:border-brand-gold"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="md:col-span-2 p-3 bg-brand-cream/60 border-transparent border-2 rounded-lg focus:ring-2 focus:ring-brand-gold focus:outline-none focus:border-brand-gold text-gray-500"
              >
                <option value="">Select a Service of Interest</option>
                <option>Lighting Solutions</option>
                <option>Solar Energy</option>
                {/* <option>Home Appliances</option> */}
              </select>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="md:col-span-2 p-3 bg-brand-cream/60 border-transparent border-2 rounded-lg focus:ring-2 focus:ring-brand-gold focus:outline-none focus:border-brand-gold"
              />

              {/* Error message */}
              {error && (
                <div className="md:col-span-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                  ⚠️ {error}
                </div>
              )}

              <div className="md:col-span-2 text-center">
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="bg-brand-teal text-white font-bold text-lg py-3 px-12 rounded-full disabled:opacity-60"
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;