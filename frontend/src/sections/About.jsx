import React from 'react';
import { motion } from 'framer-motion';
import FounderImage from '../assets/Logo.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 scroll-mt-28">
      <div className="container mx-auto px-6">
        <motion.div 
          className="bg-white rounded-lg shadow-xl p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:col-span-1 text-center">
            <img src={FounderImage} alt="Founder Priyadharshini Bhuvaneshwaran" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-md" />
            <h3 className="font-serif text-2xl font-bold text-brand-teal">Priya Dharshini Bhuvaneshwaran</h3>
            <p className="text-brand-gold font-semibold">Founder and Managing Director</p>
          </div>
          <div className="md:col-span-2 md:pl-8 border-t md:border-t-0 md:border-l border-gray-200/80 pt-8 md:pt-0 md:pl-8">
            <h2 className="font-serif text-3xl font-bold text-brand-teal mb-4 leading-snug">
              Our Vision for a Brighter Future
            </h2>
            <p className="text-gray-600 leading-relaxed italic mb-4">
              “Empowering your home with light, energy, and innovation—because every space deserves to shine smarter and greener.”
            </p>
            <p className="text-gray-600 leading-relaxed">
              Since its inception, Yazh Marutha Enterprises has been committed to illuminating lives and empowering homes through innovative and sustainable solutions. Specializing in lighting, solar energy systems, and home appliances, we integrate technology, design, and quality to enhance everyday living. With a steadfast focus on reliability and customer satisfaction, our products and solutions are tailored to meet the evolving needs of modern households, businesses, and communities. From energy-efficient lighting and renewable solar solutions to a comprehensive range of smart and durable home appliances, we have earned a reputation as a trusted partner for both residential and commercial projects. By blending innovation, sustainability, and service excellence, we deliver value-driven solutions that make spaces brighter, smarter, and more sustainable. Guided by our vision to become a trusted global brand, we continue to create smarter, greener solutions for a brighter future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;