import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-brand-teal">Get in Touch</h2>
            <p className="text-gray-500 mt-2">Ready for a brighter future? Contact us for a free consultation.</p>
        </div>
        <motion.div 
            className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg border border-gray-200/80"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="p-3 bg-brand-cream/60 border-transparent border-2 rounded-lg focus:ring-2 focus:ring-brand-gold focus:outline-none focus:border-brand-gold" />
                <input type="email" placeholder="Your Email" className="p-3 bg-brand-cream/60 border-transparent border-2 rounded-lg focus:ring-2 focus:ring-brand-gold focus:outline-none focus:border-brand-gold" />
                <select className="md:col-span-2 p-3 bg-brand-cream/60 border-transparent border-2 rounded-lg focus:ring-2 focus:ring-brand-gold focus:outline-none focus:border-brand-gold text-gray-500">
                    <option>Select a Service of Interest</option>
                    <option>Lighting Solutions</option>
                    <option>Solar Energy</option>
                    {/* <option>Home Appliances</option> */}
                </select>
                <textarea placeholder="Your Message" rows="5" className="md:col-span-2 p-3 bg-brand-cream/60 border-transparent border-2 rounded-lg focus:ring-2 focus:ring-brand-gold focus:outline-none focus:border-brand-gold"></textarea>
                <div className="md:col-span-2 text-center">
                    <motion.button 
                        type="submit" 
                        className="bg-brand-teal text-white font-bold text-lg py-3 px-12 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Send Message
                    </motion.button>
                </div>
            </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;