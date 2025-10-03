import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Solar from "../assets/images/solarpanel.jpg";
import light from "../assets/images/light.jpg";
import Home from "../assets/images/home1.jpg";

const previewData = [
  { title: "Solar Solutions", image: Solar, link: "/products/solar-solutions" },
  { title: "Lighting Systems", image: light, link: "/products/lighting-systems" },
  { title: "Home & Living", image: Home, link: "/products/home-living" },
];

const ProductPreview = () => {
  return (
    <section className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl font-bold text-brand-teal">Explore Our Products</h2>
          <p className="text-gray-500 mt-2">Quality solutions designed for a modern, sustainable lifestyle.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={item.link} className="block rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="font-serif text-3xl font-bold">{item.title}</h3>
                    <div className="flex items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
                      View Products <FiArrowRight className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;