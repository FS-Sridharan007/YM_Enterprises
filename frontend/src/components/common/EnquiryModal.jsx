import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend, FiCheckCircle, FiPhone, FiMail, FiUser, FiMapPin } from "react-icons/fi";

const EnquiryModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (product) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        message: `Hi, I am interested in getting a quote & details for "${product.title || product.name || "this product"}". Please get in touch with me.`,
      });
      setSubmitted(false);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Use Netlify Functions if available, otherwise local Dev server
    const API_URL = import.meta.env.VITE_API_URL || "";
    const endpoint = API_URL ? `${API_URL}/api/enquiry` : `/.netlify/functions/enquiry`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          productName: product?.title || product?.name || "Product Enquiry",
          productUrl: window.location.href,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect. Please check your internet or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  const productImage = product.images?.[0]?.src || product.image;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm">
        {/* Modal Backdrop */}
        <motion.div
          className="fixed inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Card */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-xl w-full z-10 border border-gray-100"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header Bar */}
          <div className="bg-brand-teal text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-brand-gold text-brand-charcoal text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Quick Enquiry
              </span>
              <h3 className="font-semibold text-lg text-white">Product Consultation</h3>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Product Summary Header */}
          <div className="p-6 bg-gray-50 border-b border-gray-100 flex items-center gap-4">
            {productImage && (
              <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={productImage}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-brand-charcoal text-base truncate">
                {product.title || product.name}
              </h4>
              {product.subtitle && (
                <p className="text-xs text-brand-gold font-medium truncate">
                  {product.subtitle}
                </p>
              )}
              {product.price && (
                <p className="text-xs font-bold text-brand-teal mt-0.5">
                  Offer Price: ₹{product.price.toLocaleString()}
                </p>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 max-h-[75vh] overflow-y-auto">
            {submitted ? (
              <motion.div
                className="py-10 text-center flex flex-col items-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <FiCheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-brand-charcoal mb-2">
                  Enquiry Received!
                </h3>
                <p className="text-gray-600 text-sm max-w-md mb-6 leading-relaxed">
                  Thank you <span className="font-semibold text-brand-teal">{formData.name}</span>. Our expert team will contact you shortly regarding <span className="font-semibold">{product.title || product.name}</span>.
                </p>
                <button
                  onClick={onClose}
                  className="bg-brand-teal text-white font-bold px-8 py-3 rounded-xl hover:bg-brand-teal/90 transition shadow-md"
                >
                  Done & Close
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Phone Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3.5 top-3 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-3.5 top-3 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & City Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3.5 top-3 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      City / Pincode
                    </label>
                    <div className="relative">
                      <FiMapPin className="absolute left-3.5 top-3 text-gray-400" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Chennai / 603103"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Enquiry Details / Requirements
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent text-sm leading-relaxed"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                    ⚠️ {error}
                  </div>
                )}

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-gold text-brand-charcoal font-bold py-3.5 rounded-xl shadow-md hover:bg-yellow-400 transition flex items-center justify-center gap-2 text-base mt-2"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <FiSend />
                      <span>Submit Product Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EnquiryModal;
