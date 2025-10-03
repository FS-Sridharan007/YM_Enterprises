import React from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const NewsletterModal = ({ onClose }) => {
  return (
    // The semi-transparent backdrop
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close modal when clicking the backdrop
    >
      {/* The modal content panel */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="relative w-full max-w-md bg-brand-cream rounded-lg shadow-xl overflow-hidden border-t-4 border-brand-gold"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="p-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-brand-teal">Join Our Community</h2>
          <p className="text-gray-600 mt-2 mb-6">
            Sign up for our newsletter to receive exclusive offers, energy-saving tips, and the latest product news.
          </p>
          
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:outline-none" 
            />
            <input 
              type="tel" 
              placeholder="Enter your mobile number" 
              className="w-full p-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-gold focus:outline-none" 
            />
            <button 
              type="submit"
              className="w-full bg-brand-teal text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-brand-teal"
          aria-label="Close modal"
        >
          <FiX size={24} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default NewsletterModal;