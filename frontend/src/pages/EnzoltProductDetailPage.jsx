import React, { useState, useLayoutEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiX, FiSend } from "react-icons/fi";
import { enzoltCategories } from "../data/enzoltProduct";
import EnquiryModal from "../components/common/EnquiryModal";

const EnzoltProductDetailPage = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();

  const category = enzoltCategories.find((c) => c.id === categoryId);
  const product = category?.items.find((item) => item.id === productId);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId, productId]);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link
          to="/enzolt-products"
          className="mt-8 inline-block bg-brand-gold text-brand-teal font-bold py-3 px-6 rounded-md hover:opacity-90"
        >
          Back to Enzolt Products
        </Link>
      </div>
    );
  }

  const displayImage = product.images?.[0]?.src;

  return (
    <motion.section
      className="pt-32 pb-24 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Navigation */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-brand-teal hover:text-brand-gold mb-8 font-medium transition-colors"
        >
          <FiArrowLeft className="mr-2" size={20} />
          Back to Enzolt Products
        </button>

        {/* Product Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-charcoal">
          {product.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT — Product Image */}
          <div className="flex flex-col items-center">
            <div
              className="w-full h-96 bg-gray-50 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition p-4 border border-gray-100 flex items-center justify-center"
              onClick={() => setSelectedImage(displayImage)}
            >
              <img
                src={displayImage}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-400 text-xs mt-3">
              Click image to enlarge
            </p>
          </div>

          {/* RIGHT — Product Info */}
          <div>
            {/* Subtitle + Tagline */}
            {product.subtitle && (
              <p className="text-sm text-brand-gold font-semibold uppercase tracking-wider mb-1">
                {product.subtitle}
              </p>
            )}
            {product.tagline && (
              <p className="text-gray-500 text-sm mb-4">{product.tagline}</p>
            )}

            <h2 className="text-2xl font-semibold text-brand-teal mb-4">
              Product Overview
            </h2>

            <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line bg-gray-50/60 p-5 rounded-xl border border-gray-100 mb-6">
              {product.description}
            </p>

            {/* Specifications */}
            {product.specs && (
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3 text-brand-charcoal">
                  Key Specifications & Features
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  {product.specs.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="bg-brand-gold text-brand-charcoal font-bold px-8 py-4 rounded-xl shadow-md hover:bg-yellow-400 transition flex items-center justify-center gap-2 flex-1 min-w-[160px]"
              >
                <FiSend />
                <span>Enquiry Now</span>
              </button>

              <HashLink
                smooth
                to="/#contact"
                className="bg-gray-100 text-gray-700 font-semibold px-6 py-4 rounded-xl hover:bg-gray-200 transition text-center flex-1 min-w-[160px] text-sm flex items-center justify-center"
              >
                Go to Contact Form
              </HashLink>
            </div>
          </div>
        </div>

        {/* Image Popup Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center bg-black/70 backdrop-blur-sm z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="bg-white p-6 rounded-2xl max-w-xl w-full relative shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
                  onClick={() => setSelectedImage(null)}
                >
                  <FiX size={24} />
                </button>

                <img
                  src={selectedImage}
                  alt="Enlarged Enzolt product"
                  className="w-full h-96 object-contain rounded-lg bg-gray-50 p-2"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Product Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
          product={product}
        />
      </div>
    </motion.section>
  );
};

export default EnzoltProductDetailPage;
