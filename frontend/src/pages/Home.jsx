import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import ProductPreview from '../sections/ProductPreview';
import Features from '../sections/Features';
import About from '../sections/About';
import Stats from '../sections/Stats';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Services />
      <ProductPreview />
      <Features />
      <About />
      <Stats />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
