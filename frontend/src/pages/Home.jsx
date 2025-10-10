import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import ProductPreview from '../sections/ProductPreview';
import Features from '../sections/Features';
import About from '../sections/About';
import Contact from '../sections/Contact';

const Home = () => {
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
