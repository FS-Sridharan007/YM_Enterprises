import React from 'react';
import { motion } from 'framer-motion';

const FounderMessage = () => {
  return (
    <motion.section 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 text-center">
            <div className="w-48 h-48 rounded-full mx-auto bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-400">Founder's Image</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-brand-dark-green">Priyadharshini Bhuvaneshwaran</h3>
            <p className="text-brand-green font-semibold">Founder and CEO</p>
          </div>
          <div className="md:col-span-2 md:pl-8">
            <h2 className="font-serif text-3xl font-bold text-brand-dark-green mb-4 leading-snug">
              A Message from Our Founder
            </h2>
            <p className="text-gray-600 leading-relaxed">
              "Since our inception, Yazh Marutha Enterprises has been driven by a simple yet powerful mission: to illuminate lives and empower homes with sustainable, innovative solutions. We believe that technology and nature can coexist beautifully, and every product we offer is a testament to that belief. We are more than just a company; we are your partners in building a smarter, greener, and brighter future for all."
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FounderMessage;