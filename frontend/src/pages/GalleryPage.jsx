import React, { useState, useLayoutEffect, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2, FiImage } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

// Import all 16 gallery images from src/assets/Gallery
import img1 from "../assets/Gallery/1.png";
import img2 from "../assets/Gallery/2.png";
import img3 from "../assets/Gallery/3.png";
import img4 from "../assets/Gallery/4.png";
import img5 from "../assets/Gallery/5.png";
import img6 from "../assets/Gallery/6.png";
import img7 from "../assets/Gallery/7.png";
import img8 from "../assets/Gallery/8.png";
import img9 from "../assets/Gallery/9.png";
import img10 from "../assets/Gallery/10.png";
import img11 from "../assets/Gallery/11.png";
import img12 from "../assets/Gallery/12.png";
import img13 from "../assets/Gallery/13.png";
import img14 from "../assets/Gallery/14.png";
import img15 from "../assets/Gallery/15.png";
import img16 from "../assets/Gallery/16.png";

const galleryImages = [
  { id: 1, src: img1, title: "Solar Installation Project 1", category: "Solar Projects" },
  { id: 2, src: img2, title: "Solar System Setup 2", category: "Solar Projects" },
  { id: 3, src: img3, title: "Energy Storage Unit 3", category: "Energy Storage" },
  { id: 4, src: img4, title: "High-Efficiency Panel Array 4", category: "Solar Projects" },
  { id: 5, src: img5, title: "Inverter System Installation 5", category: "Inverters" },
  { id: 6, src: img6, title: "Commercial Solar Setup 6", category: "Solar Projects" },
  { id: 7, src: img7, title: "Lighting & Power Setup 7", category: "Lighting & Power" },
  { id: 8, src: img8, title: "Rooftop Solar Installation 8", category: "Solar Projects" },
  { id: 9, src: img9, title: "Battery Backup Solution 9", category: "Energy Storage" },
  { id: 10, src: img10, title: "Smart Inverter Setup 10", category: "Inverters" },
  { id: 11, src: img11, title: "Solar & Energy Project 11", category: "Solar Projects" },
  { id: 12, src: img12, title: "Residential Solar System 12", category: "Solar Projects" },
  { id: 13, src: img13, title: "Power Management Array 13", category: "Inverters" },
  { id: 14, src: img14, title: "Energy Solution Setup 14", category: "Energy Storage" },
  { id: 15, src: img15, title: "Solar Installation Showcase 15", category: "Solar Projects" },
  { id: 16, src: img16, title: "Completed Energy Project 16", category: "Solar Projects" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-white via-gray-50/50 to-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* ─── HEADER ─── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <HiOutlineSparkles className="text-lg text-brand-gold" />
            Our Portfolio & Showcase
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-teal">
            Project & Product Gallery
          </h1>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg">
            Explore our real-world solar installations, energy storage setups, inverters, and lighting solutions crafted for our customers.
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <span className="inline-flex items-center gap-2 text-sm text-gray-500 bg-white border border-gray-200 px-4 py-1.5 rounded-full shadow-sm">
              <FiImage className="text-brand-teal" />
              {galleryImages.length} High-Resolution Photos
            </span>
          </div>
        </motion.div>

        {/* ─── GALLERY GRID ─── */}
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              onClick={() => setSelectedIndex(index)}
              className="group relative bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square flex items-center justify-center"
            >
              <img
                src={img.src}
                // alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/80 via-brand-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-gold">
                  {img.category}
                </span>
                {/* <h3 className="font-serif text-base font-bold line-clamp-1 mt-0.5">
                  {img.title}
                </h3> */}
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full">
                  <FiMaximize2 size={12} /> Click to Expand
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── LIGHTBOX MODAL ─── */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>

              {/* Navigation Left */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 md:left-8 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 backdrop-blur-md transition-colors"
                aria-label="Previous image"
              >
                <FiChevronLeft size={28} />
              </button>

              {/* Navigation Right */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 md:right-8 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 backdrop-blur-md transition-colors"
                aria-label="Next image"
              >
                <FiChevronRight size={28} />
              </button>

              {/* Image Container */}
              <motion.div
                key={selectedIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative p-2"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                />

                {/* Caption Bar */}
                <div className="mt-4 text-center text-white">
                  {/* <h3 className="font-serif text-lg font-bold">
                    {galleryImages[selectedIndex].title}
                  </h3> */}
                  <p className="text-xs text-gray-300 mt-1">
                    Image {selectedIndex + 1} of {galleryImages.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default GalleryPage;
