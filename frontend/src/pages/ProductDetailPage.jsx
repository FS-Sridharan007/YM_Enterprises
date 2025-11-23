import React, { useState, useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { productCategories } from "../data/products";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ProductDetailPage = () => {
  const { categoryId, productId } = useParams();
  const category = productCategories.find((cat) => cat.id === categoryId);
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
          to="/products"
          className="mt-8 inline-block bg-brand-gold text-brand-teal font-bold py-3 px-6 rounded-md hover:opacity-90"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // Handle closing modal on background click
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.section
      className="pt-32 pb-24 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6">
        <Link
          to={`/products/${categoryId}`}
          className="flex items-center text-brand-teal hover:text-brand-gold mb-8 font-medium transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to {category.category}
        </Link>

        <h1 className="text-4xl font-bold text-center mb-12 text-brand-charcoal">
          {product.title}
        </h1>

{/* Conditional Image Grid */}
{productId === "solar-batteries" ? (
  // ⭐ ENERGY STORAGE BATTERIES → LEFT ALIGNED + BUY NOW BUTTON
  <div className="max-w-md mx-0"> 
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="cursor-pointer text-left"
    onClick={() => setSelectedImage(product.images[0].src)}
  >
    <div className="w-full h-72 flex items-center justify-start bg-gray-100 rounded-lg mb-4 overflow-hidden">
      <img
        src={product.images[0].src}
        alt={product.images[0].name}
        className="w-full h-72 object-cover rounded-lg"
      />
    </div>

    <p className="mt-2 text-gray-700 font-medium">{product.images[0].name}</p>
  </motion.div>

  {/* ⭐ BUY NOW BUTTON */}
  <div className="mt-8">
    <Link
      to={`/buy-now/${categoryId}/${productId}`}
      className="inline-block bg-brand-gold text-brand-charcoal font-bold px-8 py-4 rounded-xl shadow-md hover:bg-yellow-400 transition"
    >
      Buy Now
    </Link>
  </div>
</div>
) : (
  // ⭐ OTHER CATEGORIES → FULL GRID
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
)}
        {/* Popup modal for image + short long-description */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleBackgroundClick} // close on background click
            >
              <motion.div
                className="bg-white rounded-2xl p-6 max-w-md w-full relative shadow-2xl"
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
                  alt="Selected product"
                  className="w-full h-96 object-cover rounded-lg mb-4"
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



// import React, { useLayoutEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { productCategories } from '../data/products';
// import { FiArrowLeft } from 'react-icons/fi';
// import { motion } from 'framer-motion';

// const ProductDetailPage = () => {
//   const { categoryId, productId } = useParams();
//   const category = productCategories.find(cat => cat.id === categoryId);
//   const product = category?.items.find(item => item.id === productId);

//   // Scroll to top immediately
//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, [categoryId, productId]);

//   if (!product) {
//     return (
//       <div className="container mx-auto px-6 py-32 text-center">
//         <h1 className="text-3xl font-bold">Product Not Found</h1>
//         <Link to="/products" className="mt-8 inline-block bg-brand-gold text-brand-teal font-bold py-3 px-6 rounded-md hover:opacity-90">
//           Back to Products
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <motion.section
//       className="pt-32 pb-24 bg-white scroll-mt-32"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -30 }}
//       transition={{ duration: 0.6, ease: 'easeInOut' }}
//     >
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto">
//           <Link to={`/products/${categoryId}`} className="flex items-center text-brand-teal hover:text-brand-gold mb-8 font-medium transition-colors">
//             <FiArrowLeft className="mr-2" />
//             Back to {category.category}
//           </Link>

//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               {product.image ? (
//                 <img src={product.image} alt={product.title} className="w-full rounded-lg shadow-md object-cover" />
//               ) : (
//                 <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
//                   <span className="text-gray-500">No Image</span>
//                 </div>
//               )}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               <h1 className="font-serif text-4xl font-bold text-brand-charcoal">{product.title}</h1>
//               {product.price && (
//                 <p className="font-serif text-3xl text-brand-teal mt-4">{product.price}</p>
//               )}
//               <p className="text-gray-600 mt-6 text-base leading-relaxed">{product.description}</p>
//             </motion.div>
//           </div>

//           {product.specifications && product.specifications.length > 0 && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="mt-16 border-t pt-8"
//             >
//               <h3 className="font-serif text-2xl font-bold text-brand-teal mb-6">Specifications</h3>
//               <div className="space-y-4">
//                 {product.specifications.map((spec, index) => (
//                   <div key={index} className="flex justify-between border-b pb-2">
//                     <span className="font-semibold text-gray-700">{spec.name}</span>
//                     <span className="text-gray-600">{spec.value}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default ProductDetailPage;
