import React, { useState, useLayoutEffect, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { productCategories } from "../data/products";
import { FiArrowLeft, FiX, FiCheck } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const ProductDetailPage = () => {
  const { categoryId, productId } = useParams();
  const category = productCategories.find((cat) => cat.id === categoryId);
  const product = category?.items.find((item) => item.id === productId);

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeImageSrc, setActiveImageSrc] = useState("");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId, productId]);

  useEffect(() => {
    if (product?.images?.length) {
      setActiveImageSrc(product.images[0].src);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link
          to="/products"
          className="mt-8 inline-block bg-brand-gold text-brand-teal font-bold py-3 px-6 rounded-md hover:opacity-90"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  const discountPercent =
    product.originalPrice && product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <motion.section
      className="pt-32 pb-24 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <Link
          to={`/products/${categoryId}`}
          className="flex items-center text-brand-teal hover:text-brand-gold mb-8 font-medium transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to {category?.category || "Products"}
        </Link>

        {product.price ? (
          /* RICH PRODUCT LAYOUT FOR PRODUCTS WITH PRICE (E.G. EXIDE COMBO, SOLAR BATTERIES) */
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-brand-charcoal">
              {product.title}
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* LEFT: IMAGE VIEWER & THUMBNAILS */}
              <div className="flex flex-col items-center">
                <div
                  className="w-full h-[420px] bg-gray-50 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition p-4 flex items-center justify-center border border-gray-100"
                  onClick={() => setSelectedImage(activeImageSrc || product.images?.[0]?.src)}
                >
                  <img
                    src={activeImageSrc || product.images?.[0]?.src}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Thumbnails Gallery */}
                {product.images && product.images.length > 1 && (
                  <div className="flex gap-3 mt-6 overflow-x-auto w-full pb-2">
                    {product.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImageSrc(img.src)}
                        className={`w-20 h-20 flex-shrink-0 border-2 rounded-xl overflow-hidden transition-all bg-gray-50 ${
                          activeImageSrc === img.src
                            ? "border-brand-teal scale-105 shadow-sm"
                            : "border-gray-200 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img.src}
                          alt={img.name || `Thumbnail ${i + 1}`}
                          className="w-full h-full object-contain p-1"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT: DETAILS & PRICING */}
              <div>
                {product.subtitle && (
                  <p className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-2">
                    {product.subtitle}
                  </p>
                )}

                {product.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-yellow-400">
                      <AiFillStar />
                      <span className="ml-1 font-semibold text-gray-800 text-sm">
                        {product.rating}
                      </span>
                    </div>
                    {product.reviewsCount && (
                      <span className="text-gray-500 text-sm">
                        ({product.reviewsCount} reviews)
                      </span>
                    )}
                  </div>
                )}

                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {product.shortDescription || product.description}
                </p>

                {/* PRICE BOX */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 mb-6">
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <span className="text-4xl font-bold text-brand-teal">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="line-through text-gray-400 text-xl">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                        {discountPercent && (
                          <span className="bg-green-500 text-white font-semibold text-sm px-3 py-1 rounded-full">
                            {discountPercent}% OFF
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  <p className="text-green-600 text-sm font-medium mt-2">
                    ✓ In Stock — Ready to Ship & Free Delivery Support
                  </p>
                </div>

                {/* SPECIFICATIONS LIST */}
                {product.specs && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-brand-charcoal mb-3">
                      Key Highlights & Warranty
                    </h3>
                    <ul className="space-y-2">
                      {product.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CALL TO ACTION BUTTONS */}
                <div className="flex gap-4 flex-wrap mt-8">
                  <Link
                    to={`/buy-now/${categoryId}/${productId}`}
                    className="bg-brand-teal text-white font-bold px-8 py-4 rounded-xl shadow-md hover:bg-brand-teal/90 transition text-center flex-1 min-w-[160px]"
                  >
                    Buy Now
                  </Link>

                  <Link
                    to="/#contact"
                    className="bg-brand-gold text-brand-charcoal font-bold px-8 py-4 rounded-xl shadow-md hover:bg-yellow-400 transition text-center flex-1 min-w-[160px]"
                  >
                    Enquiry Now
                  </Link>
                </div>
              </div>
            </div>

            {/* FULL DESCRIPTION / OVERVIEW */}
            {product.fullDescription && (
              <div className="mt-16 border-t pt-10">
                <h3 className="text-2xl font-bold text-brand-teal mb-4">
                  Product Overview & Technical Specs
                </h3>
                <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                  {product.fullDescription}
                </p>
              </div>
            )}
          </div>
        ) : (
          /* STANDARD GRID DISPLAY FOR CATEGORIES WITHOUT PRICING */
          <div>
            <h1 className="text-4xl font-bold text-center mb-12 text-brand-charcoal">
              {product.title}
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {product.images?.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer text-center"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.name}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div>
                  <p className="mt-2 text-gray-700 font-medium">{img.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* IMAGE LIGHTBOX POPUP MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center z-50 bg-black/70 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleBackgroundClick}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 max-w-xl w-full relative shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
                  onClick={() => setSelectedImage(null)}
                >
                  <FiX size={24} />
                </button>

                <img
                  src={selectedImage}
                  alt="Selected product view"
                  className="w-full h-96 object-contain rounded-lg mb-4 bg-gray-50"
                />

                <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                  {product.fullDescription || product.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default ProductDetailPage;
