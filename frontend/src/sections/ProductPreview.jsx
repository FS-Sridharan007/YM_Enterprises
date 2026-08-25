import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Solar from "../assets/images/solarpanel.jpg";
import light from "../assets/images/light.jpg";
// import Home from "../assets/images/home1.jpg";

const previewData = [
  { title: "Solar Solutions", image: Solar, link: "/products/solar-solutions" },
  { title: "Lighting Systems", image: light, link: "/products/lighting-systems" },
  // { title: "Home & Living", image: Home, link: "/products/home-living" },
];

/* ── Left side SVG artwork ── */
const LeftArt = () => (
  <svg viewBox="0 0 180 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Main stem */}
    <path d="M90 420 Q85 320 95 240 Q100 180 88 100" stroke="#1a535c" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.65"/>
    {/* Large leaf left */}
    <path d="M88 260 Q40 230 20 180 Q55 170 88 210 Z" fill="#1a535c" opacity="0.55"/>
    <path d="M88 260 Q55 250 20 180" stroke="#0f3238" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    {/* Large leaf right */}
    <path d="M92 300 Q145 265 160 210 Q120 205 92 248 Z" fill="#1a535c" opacity="0.45"/>
    <path d="M92 300 Q130 270 160 210" stroke="#0f3238" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
    {/* Mid leaf left */}
    <path d="M90 200 Q48 175 30 130 Q68 128 90 168 Z" fill="#2d7a6e" opacity="0.5"/>
    <path d="M90 200 Q60 170 30 130" stroke="#1a535c" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    {/* Small leaf right top */}
    <path d="M93 155 Q130 130 148 95 Q112 98 93 132 Z" fill="#2d7a6e" opacity="0.45"/>
    {/* Bud top */}
    <ellipse cx="88" cy="98" rx="7" ry="12" fill="#c4a265" opacity="0.7" transform="rotate(-10 88 98)"/>
    <ellipse cx="88" cy="92" rx="4" ry="6" fill="#e0bc85" opacity="0.6"/>
    {/* Ground grass */}
    <path d="M60 420 Q55 390 50 370" stroke="#1a535c" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M75 420 Q72 395 68 372" stroke="#2d7a6e" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <path d="M110 420 Q115 392 118 368" stroke="#1a535c" strokeWidth="2.5" strokeLinecap="round" opacity="0.45"/>
    <path d="M125 420 Q128 400 132 380" stroke="#2d7a6e" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
    {/* Floating small leaf */}
    <path d="M30 350 Q10 330 18 310 Q35 318 30 350 Z" fill="#1a535c" opacity="0.3"/>
    {/* Gold accent dots */}
    <circle cx="155" cy="195" r="4" fill="#c4a265" opacity="0.5"/>
    <circle cx="22" cy="165" r="3" fill="#c4a265" opacity="0.4"/>
    <circle cx="145" cy="88" r="3" fill="#c4a265" opacity="0.45"/>
  </svg>
);

/* ── Right side SVG artwork (mirrored) ── */
const RightArt = () => (
  <svg viewBox="0 0 180 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Main stem */}
    <path d="M90 420 Q95 320 85 240 Q80 180 92 100" stroke="#1a535c" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.65"/>
    {/* Large leaf right */}
    <path d="M92 260 Q140 230 160 180 Q125 170 92 210 Z" fill="#1a535c" opacity="0.55"/>
    <path d="M92 260 Q125 250 160 180" stroke="#0f3238" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    {/* Large leaf left */}
    <path d="M88 300 Q35 265 20 210 Q60 205 88 248 Z" fill="#1a535c" opacity="0.45"/>
    <path d="M88 300 Q50 270 20 210" stroke="#0f3238" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
    {/* Mid leaf right */}
    <path d="M90 200 Q132 175 150 130 Q112 128 90 168 Z" fill="#2d7a6e" opacity="0.5"/>
    {/* Small leaf left top */}
    <path d="M87 155 Q50 130 32 95 Q68 98 87 132 Z" fill="#2d7a6e" opacity="0.45"/>
    {/* Bud top */}
    <ellipse cx="92" cy="98" rx="7" ry="12" fill="#c4a265" opacity="0.7" transform="rotate(10 92 98)"/>
    <ellipse cx="92" cy="92" rx="4" ry="6" fill="#e0bc85" opacity="0.6"/>
    {/* Ground grass */}
    <path d="M120 420 Q125 390 130 370" stroke="#1a535c" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M105 420 Q108 395 112 372" stroke="#2d7a6e" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <path d="M70 420 Q65 392 62 368" stroke="#1a535c" strokeWidth="2.5" strokeLinecap="round" opacity="0.45"/>
    <path d="M55 420 Q52 400 48 380" stroke="#2d7a6e" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
    {/* Floating small leaf */}
    <path d="M150 350 Q170 330 162 310 Q145 318 150 350 Z" fill="#1a535c" opacity="0.3"/>
    {/* Gold accent dots */}
    <circle cx="25" cy="195" r="4" fill="#c4a265" opacity="0.5"/>
    <circle cx="158" cy="165" r="3" fill="#c4a265" opacity="0.4"/>
    <circle cx="35" cy="88" r="3" fill="#c4a265" opacity="0.45"/>
  </svg>
);

const ProductPreview = () => {
  return (
    <section className="py-24 bg-white scroll-mt-28 relative overflow-hidden">

      {/* Left decorative plant art */}
      <div className="absolute left-0 bottom-0 w-36 lg:w-48 h-[420px] pointer-events-none select-none">
        <LeftArt />
      </div>

      {/* Right decorative plant art */}
      <div className="absolute right-0 bottom-0 w-36 lg:w-48 h-[420px] pointer-events-none select-none">
        <RightArt />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl font-bold text-brand-teal">Explore Our Products</h2>
          <p className="text-gray-500 mt-2">Quality solutions designed for a modern, sustainable lifestyle.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {previewData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={item.link} className="block rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="font-serif text-3xl font-bold">{item.title}</h3>
                    <div className="flex items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
                      View Products <FiArrowRight className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;