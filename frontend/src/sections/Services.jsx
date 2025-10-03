import React, { useEffect } from "react";
import ServiceCard from "../components/common/ServiceCard";
import { servicesData } from "../data/servicesData";
import { FiSun, FiZap, FiCpu } from 'react-icons/fi';
import { motion } from "framer-motion";

const iconMap = {
  solar: <FiSun size={32} />,
  lighting: <FiZap size={32} />,
  appliances: <FiCpu size={32} />,
};

const Services = () => {
  // ⚡ Ensure page always opens from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="services" className="pt-32 pb-24 scroll-mt-32">
      {/* ↑ pt-32 adds offset for fixed navbar so content is not hidden */}
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl font-bold text-brand-teal">Our Core Services</h2>
          <p className="text-gray-500 mt-2">Solutions that blend innovation, sustainability, and service excellence.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(servicesData).map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard
                serviceKey={key}
                icon={iconMap[key]}
                title={servicesData[key].title}
                description={servicesData[key].description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
