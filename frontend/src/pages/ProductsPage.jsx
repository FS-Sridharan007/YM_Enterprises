import React, { useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, NavLink, Link } from 'react-router-dom';
import { productCategories } from '../data/products';

const ProductsPage = () => {
  const { categoryId } = useParams();

  const activeCategory = categoryId 
    ? productCategories.find(c => c.id === categoryId) 
    : productCategories[0];

  // Scroll to top whenever the category changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!activeCategory) {
    return (
        <div className="py-24 text-center">
            <h2 className="text-2xl font-bold">Category not found</h2>
        </div>
    );
  }

  return (
    <section id="products" className="pt-32 pb-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl font-bold text-brand-teal">
            Our Products
          </h2>
          <p className="text-gray-500 mt-2">
            A showcase of our high-quality solutions for modern living.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center border-b border-gray-200 mb-12 relative">
          {productCategories.map(cat => (
            <NavLink
              key={cat.id}
              to={`/products/${cat.id}`}
              className={({ isActive }) => 
                `relative font-medium text-lg px-6 py-3 transition-colors ${
                  isActive ? 'text-brand-teal' : 'text-gray-500 hover:text-brand-teal'
                }`
              }
            >
              {cat.category}
              {cat.id === activeCategory.id && (
                <motion.div
                  layoutId="productTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                />
              )}
            </NavLink>
          ))}
        </div>

        {/* Products Grid */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {activeCategory.items.map((item) => (
                <Link 
                  key={item.id} 
                  to={`/products/${activeCategory.id}/${item.id}`}
                  className="block p-6 rounded-lg border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:border-gray-300"
                >
                  <h4 className="font-serif text-xl font-bold text-brand-teal">{item.title}</h4>
                  <p className="text-gray-600 mt-2 leading-relaxed text-sm">{item.description}</p>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
