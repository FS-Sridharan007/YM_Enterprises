import React, { useState, useLayoutEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { enzoltCategories } from "../data/enzoltProduct";

const EnzoltProductDetailPage = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();

  const category = enzoltCategories.find((c) => c.id === categoryId);
  const product = category?.items.find((item) => item.id === productId);

  const [selectedImage, setSelectedImage] = useState(null);

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
              onClick={() => setSelectedImage(product.images[0].src)}
            >
              <img
                src={product.images?.[0]?.src}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* RIGHT — Product Info */}
          <div>
            <h2 className="text-2xl font-semibold text-brand-teal mb-4">
              Product Overview
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {product.description}
            </p>

            {product.specs && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                  Specifications
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  {product.specs.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Buy Now Button */}
            <Link
                  // to={`/buy-now/enzolt-products/${productId}`}
                  className="inline-block bg-brand-gold text-brand-charcoal font-bold px-8 py-4 rounded-xl shadow-md hover:bg-yellow-400 transition"
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

export default EnzoltProductDetailPage;
