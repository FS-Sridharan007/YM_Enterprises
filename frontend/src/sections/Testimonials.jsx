import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from "react-icons/fa";

const testimonialData = [
    {
        quote: "The solar panel installation was seamless, and our energy bills have dropped significantly. A truly professional and trustworthy team!",
        name: "Priya Sharma",
        location: "Coimbatore, TN"
    },
    {
        quote: "Yazh Marutha transformed our office with their modern lighting solutions. The ambiance is perfect and highly energy-efficient.",
        name: "Arjun Reddy",
        location: "Chennai, TN"
    },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="font-serif text-4xl font-bold text-brand-teal mb-4">What Our Clients Say</h2>
            <p className="text-gray-500 mb-16 max-w-2xl mx-auto">We are proud to have earned the trust of homes and businesses across the region.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
            {testimonialData.map((testimonial, index) => (
                <motion.div 
                    key={index} 
                    className="bg-brand-cream p-8 rounded-lg text-left relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                    <FaQuoteLeft className="text-brand-gold/50 text-6xl absolute top-6 right-6" />
                    <p className="text-gray-600 italic mb-6 text-lg relative z-10">"{testimonial.quote}"</p>
                    <div className="font-bold text-brand-teal">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.location}</div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;