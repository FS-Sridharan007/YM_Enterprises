import React, { useState, useLayoutEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { deyeCategories } from "../data/deyeProduct";

const DeyeProductDetailPage = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();

  const category = deyeCategories.find((c) => c.id === categoryId);
  const product = category?.items.find((item) => item.id === productId);

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeVariant, setActiveVariant] = useState(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if (product?.variants?.length) {
      setActiveVariant(product.variants[0]);
    }
  }, [categoryId, productId]);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link
          to="/deye-products"
          className="mt-8 inline-block bg-brand-gold text-brand-teal font-bold py-3 px-6 rounded-md hover:opacity-90"
        >
          Back to DEYE Products
        </Link>
      </div>
    );
  }

  const displayImage = activeVariant?.images?.[0]?.src || product.images?.[0]?.src;

  return (
    <motion.section
      className="pt-32 pb-24 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6">

        {/* Back Navigation */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-brand-teal hover:text-brand-gold mb-8 font-medium transition-colors"
        >
          <FiArrowLeft className="mr-2" size={20} />
          Back
        </button>

        {/* Product Title */}
        <h1 className="text-4xl font-bold text-center mb-12 text-brand-charcoal">
          {product.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT — Product Image */}
          <div className="flex flex-col items-center">
            <div
              className="w-full h-96 bg-gray-100 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition"
              onClick={() => setSelectedImage(displayImage)}
            >
              <img
                src={displayImage}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
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

            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {product.description}
            </p>

            {/* Specifications */}
            {product.specs && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-brand-teal mt-1">▸</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3 text-brand-charcoal">
                  Select Model
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setActiveVariant(v)}
                      className={`px-5 py-2.5 rounded-xl border transition-all text-sm font-medium ${
                        activeVariant?.id === v.id
                          ? "bg-brand-teal border-brand-teal text-white shadow-md"
                          : "bg-white border-gray-300 text-gray-700 hover:border-brand-teal"
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Enquiry Now Button */}
            <Link
              to="/#contact"
              className="inline-block bg-brand-gold text-brand-charcoal font-bold px-8 py-4 rounded-xl shadow-md hover:bg-yellow-400 transition mt-8"
            >
              Enquiry Now
            </Link>
          </div>
        </div>

        {/* Image Popup Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="bg-white p-5 rounded-xl max-w-xl w-full relative shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
                  onClick={() => setSelectedImage(null)}
                >
                  <FiX size={24} />
                </button>

                <img
                  src={selectedImage}
                  alt="Zoom"
                  className="w-full h-96 object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.section>
  );
};

export default DeyeProductDetailPage;
