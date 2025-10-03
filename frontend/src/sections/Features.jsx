import React from 'react';
import { FiShield, FiAward, FiGlobe, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';
import FeatureImage from '../assets/Logo.jpg'; // Add a suitable image here

const featuresData = [
    { icon: <FiAward />, title: "Expert Installation", description: "Certified and experienced technicians." },
    { icon: <FiShield />, title: "Quality Guarantee", description: "Comprehensive warranties and support." },
    { icon: <FiZap />, title: "Energy Efficient", description: "Solutions designed to reduce your energy consumption and lower utility bills" },
    { icon: <FiGlobe />, title: "Eco-Friendly", description: "Sustainable solutions for a better future." }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="pr-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl font-bold text-brand-teal mb-4">Why Choose Us?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Our commitment to quality, innovation, and customer satisfaction sets us apart. We provide reliable and efficient solutions tailored to meet the evolving needs of modern households and communities.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {featuresData.map((feature, index) => (
                <div key={index} className="flex items-start">
                    <span className="text-brand-gold text-2xl mr-3 mt-1 shrink-0">{feature.icon}</span>
                    <p><span className="font-bold text-brand-charcoal">{feature.title}</span><br/>
                    <span className="text-gray-500">{feature.description}</span></p>
                </div>
            ))}
          </div>
        </motion.div>
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
         >
            <img src={FeatureImage} alt="Modern Interior" className="rounded-lg shadow-xl w-full h-full object-cover"/>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;