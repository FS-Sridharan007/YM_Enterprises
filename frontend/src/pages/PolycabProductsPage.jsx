import React, { useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, NavLink, Link } from "react-router-dom";
import { polycabCategories } from "../data/polycabProduct";

const PolycabProductsPage = () => {
  const { categoryId } = useParams();

  const activeCategory = categoryId
    ? polycabCategories.find((c) => c.id === categoryId)
    : polycabCategories[0];

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
    <section id="products" className="pt-32 pb-24 bg-white scroll-mt-28 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Page Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl font-bold text-brand-teal">
            Polycab Products
          </h2>
          <p className="text-gray-500 mt-2">
            Explore high-performance Polycab solar inverter solutions (3KW, 5KW, 6KW).
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center border-b border-gray-200 mb-12 relative">
          {polycabCategories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/polycab-products/${cat.id}`}
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
                  layoutId="polycabProductTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                />
              )}
            </NavLink>
          ))}
        </div>

        {/* Products Grid */}
        <div className="max-w-6xl mx-auto">
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
                  to={`/polycab-products/${activeCategory.id}/${item.id}`}
                  className="block p-6 rounded-2xl border border-gray-200/80 bg-white transition-all duration-300 hover:shadow-xl hover:border-gray-300 group"
                >
                  {/* Image */}
                  <div className="w-full h-56 bg-gray-50 rounded-xl flex items-center justify-center mb-4 p-4 overflow-hidden border border-gray-100">
                    <img
                      src={item.images?.[0]?.src}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="font-serif text-xl font-bold text-brand-teal group-hover:text-brand-gold transition-colors">
                    {item.title}
                  </h4>

                  {/* Subtitle */}
                  {item.subtitle && (
                    <p className="text-gray-500 mt-2 text-sm">{item.subtitle}</p>
                  )}

                  {/* Tagline */}
                  {item.tagline && (
                    <p className="text-brand-charcoal font-semibold text-sm mt-1">
                      {item.tagline}
                    </p>
                  )}

                  {/* View Details */}
                  <span className="mt-5 inline-block text-brand-teal font-medium hover:text-brand-gold transition-colors text-sm">
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

export default PolycabProductsPage;
