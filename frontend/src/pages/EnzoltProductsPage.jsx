import React, { useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, NavLink, Link } from "react-router-dom";
import { enzoltCategories } from "../data/enzoltProduct";

const EnzoltProductsPage = () => {
  const { categoryId } = useParams();

  const activeCategory = categoryId
    ? enzoltCategories.find((c) => c.id === categoryId)
    : enzoltCategories[0];

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

        {/* Page Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl font-bold text-brand-teal">
            Enzolt Products
          </h2>
          <p className="text-gray-500 mt-2">
            Explore premium LiFePO4 battery solutions.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center border-b border-gray-200 mb-12 relative">
          {enzoltCategories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/enzolt-products/${cat.id}`}
              className={({ isActive }) =>
                `relative font-medium text-lg px-6 py-3 transition-colors ${
                  isActive
                    ? "text-brand-teal"
                    : "text-gray-500 hover:text-brand-teal"
                }`
              }
            >
              {cat.category}
              {cat.id === activeCategory.id && (
                <motion.div
                  layoutId="enzoltProductTabUnderline"
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
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {activeCategory.items.map((item) => (
                <Link
                  key={item.id}
                  to={`/enzolt-products/${activeCategory.id}/${item.id}`}
                  className="block p-6 rounded-lg border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:border-gray-300"
                >
                  <div className="w-full h-52 bg-gray-100 rounded-md flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={item.images?.[0]?.src}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-brand-teal">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-2 text-sm">
                    {item.description?.slice(0, 90)}...
                  </p>
                  <span className="mt-4 inline-block text-brand-teal font-medium hover:text-brand-gold">
                    View Details →
                  </span>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EnzoltProductsPage;
