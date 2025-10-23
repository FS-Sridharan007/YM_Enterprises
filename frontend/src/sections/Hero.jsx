import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Solar from "../assets/images/rooftop-solar.jpg";
import light from "../assets/images/image11.webp";
import Home from "../assets/images/home2.jpg";

const slides = [
  {
    id: 0,
    headline: "Power Your Future Sustainably.",
    description: "Custom solar solutions designed for your home and business, reducing costs and protecting our planet.",
    image: Solar,
  },
  {
    id: 1,
    headline: "Design with Light and Elegance.",
    description: "From architectural to ambient, our lighting systems blend style with energy-efficient technology.",
    image: light,
  },
  {
    id: 2,
    headline: "Smart Living, Simplified.",
    description: "Explore our collection of premium, intelligent appliances that bring comfort and convenience to your home.",
    image: Home,
  },
];

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  active: { x: 0, opacity: 1 },
  outgoing: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

const sliderTransition = {
  duration: 1.2,
  ease: [0.56, 0.03, 0.12, 1.04],
};


const Hero = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    const newIndex = (activeIndex + newDirection + slides.length) % slides.length;
    setActiveIndex([newIndex, newDirection]);
  };

  // Autoplay functionality remains
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  const activeSlide = slides[activeIndex];

  return (
    <section id="home" className="relative h-screen w-full flex overflow-hidden bg-brand-cream scroll-mt-28">
      <div className="relative h-full w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="outgoing"
            transition={sliderTransition}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeSlide.image})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text Content - Left-aligned */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white p-6 sm:p-12 md:p-24 z-10">
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight" style={{ textShadow: '0px 2px 10px rgba(0,0,0,0.5)' }}>
                {activeSlide.headline}
              </h1>
              <p className="mt-4 text-lg text-white/80">
                {activeSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Navigation arrows have been removed for a clean, automatic slideshow */}

    </section>
  );
};

export default Hero;