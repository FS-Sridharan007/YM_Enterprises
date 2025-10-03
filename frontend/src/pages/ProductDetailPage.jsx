import React, { useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productCategories } from '../data/products';
import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProductDetailPage = () => {
  const { categoryId, productId } = useParams();
  const category = productCategories.find(cat => cat.id === categoryId);
  const product = category?.items.find(item => item.id === productId);

  // Scroll to top immediately
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId, productId]);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link to="/products" className="mt-8 inline-block bg-brand-gold text-brand-teal font-bold py-3 px-6 rounded-md hover:opacity-90">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      className="pt-32 pb-24 bg-white scroll-mt-32"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Link to={`/products/${categoryId}`} className="flex items-center text-brand-teal hover:text-brand-gold mb-8 font-medium transition-colors">
            <FiArrowLeft className="mr-2" />
            Back to {category.category}
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {product.image ? (
                <img src={product.image} alt={product.title} className="w-full rounded-lg shadow-md object-cover" />
              ) : (
                <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-serif text-4xl font-bold text-brand-charcoal">{product.title}</h1>
              {product.price && (
                <p className="font-serif text-3xl text-brand-teal mt-4">{product.price}</p>
              )}
              <p className="text-gray-600 mt-6 text-base leading-relaxed">{product.description}</p>
            </motion.div>
          </div>

          {product.specifications && product.specifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 border-t pt-8"
            >
              <h3 className="font-serif text-2xl font-bold text-brand-teal mb-6">Specifications</h3>
              <div className="space-y-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-700">{spec.name}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductDetailPage;
