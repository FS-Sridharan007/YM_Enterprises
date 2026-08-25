import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import ProductPreview from '../sections/ProductPreview';
import Features from '../sections/Features';
import About from '../sections/About';
import Contact from '../sections/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
          const yOffset = -100; // Navbar fixed header offset
          window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Services />
      <ProductPreview />
      <Features />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
