import React, { useEffect } from "react";
import ServiceCard from "../components/common/ServiceCard";
import { servicesData } from "../data/servicesData";
import { FiSun, FiZap, FiCpu } from 'react-icons/fi';
import { motion } from "framer-motion";

const iconMap = {
  solar: <FiSun size={32} />,
  lighting: <FiZap size={32} />,
  appliances: <FiCpu size={32} />,
};

/* ── Right-side decorative SVG: solar energy / sustainability theme ── */
const RightArt = () => (
  <svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

    {/* Glowing sun orb */}
    <circle cx="200" cy="130" r="52" fill="#1a535c" opacity="0.08"/>
    <circle cx="200" cy="130" r="38" fill="#1a535c" opacity="0.13"/>
    <circle cx="200" cy="130" r="26" fill="#1a535c" opacity="0.55"/>
    <circle cx="200" cy="130" r="18" fill="#c4a265" opacity="0.75"/>
    <circle cx="200" cy="130" r="10" fill="#e0bc85" opacity="0.9"/>

    {/* Sun rays */}
    {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 200 + Math.cos(rad) * 32;
      const y1 = 130 + Math.sin(rad) * 32;
      const x2 = 200 + Math.cos(rad) * (i % 2 === 0 ? 58 : 50);
      const y2 = 130 + Math.sin(rad) * (i % 2 === 0 ? 58 : 50);
      return (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#c4a265" strokeWidth={i % 2 === 0 ? "2.5" : "1.5"}
          strokeLinecap="round" opacity="0.7"
        />
      );
    })}

    {/* Energy bolt flowing down from sun */}
    <path d="M205 158 L192 195 L204 195 L190 235" stroke="#1a535c" strokeWidth="3"
      strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
    {/* Bolt arrowhead */}
    <path d="M183 228 L190 235 L198 225" stroke="#1a535c" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>

    {/* Solar panel grid — bottom left */}
    <g opacity="0.55" transform="translate(38, 230) rotate(-8)">
      {/* Panel outline */}
      <rect x="0" y="0" width="110" height="70" rx="5" fill="#1a535c" opacity="0.15" stroke="#1a535c" strokeWidth="1.5"/>
      {/* Grid lines horizontal */}
      <line x1="0" y1="23" x2="110" y2="23" stroke="#1a535c" strokeWidth="1" opacity="0.6"/>
      <line x1="0" y1="46" x2="110" y2="46" stroke="#1a535c" strokeWidth="1" opacity="0.6"/>
      {/* Grid lines vertical */}
      <line x1="36" y1="0" x2="36" y2="70" stroke="#1a535c" strokeWidth="1" opacity="0.6"/>
      <line x1="73" y1="0" x2="73" y2="70" stroke="#1a535c" strokeWidth="1" opacity="0.6"/>
      {/* Cell highlights */}
      <rect x="3" y="3" width="30" height="17" rx="2" fill="#c4a265" opacity="0.2"/>
      <rect x="39" y="3" width="30" height="17" rx="2" fill="#c4a265" opacity="0.15"/>
      <rect x="76" y="26" width="30" height="17" rx="2" fill="#c4a265" opacity="0.2"/>
      <rect x="3" y="49" width="30" height="17" rx="2" fill="#c4a265" opacity="0.15"/>
    </g>

    {/* Circular orbit ring around sun */}
    <circle cx="200" cy="130" r="68" stroke="#1a535c" strokeWidth="1"
      strokeDasharray="6 5" opacity="0.25"/>

    {/* Small orbiting dot */}
    <circle cx="268" cy="130" r="5" fill="#c4a265" opacity="0.6"/>
    <circle cx="200" cy="62" r="4" fill="#1a535c" opacity="0.5"/>

    {/* Curved circuit lines bottom-right */}
    <path d="M230 270 Q260 260 280 230 Q295 205 285 180" stroke="#1a535c"
      strokeWidth="1.5" strokeLinecap="round" opacity="0.3" strokeDasharray="4 4"/>
    <path d="M240 290 Q275 275 290 245" stroke="#c4a265"
      strokeWidth="1" strokeLinecap="round" opacity="0.25" strokeDasharray="3 5"/>

    {/* Small leaf accent bottom-left — subtle, not dominant */}
    <path d="M25 320 Q8 300 15 278 Q36 286 25 320 Z" fill="#1a535c" opacity="0.3"/>
    <path d="M20 340 Q5 320 10 300" stroke="#1a535c" strokeWidth="1.5"
      strokeLinecap="round" opacity="0.3"/>

    {/* Dot constellation top-right */}
    <circle cx="285" cy="60" r="3" fill="#c4a265" opacity="0.4"/>
    <circle cx="300" cy="80" r="2" fill="#1a535c" opacity="0.3"/>
    <circle cx="270" cy="78" r="2" fill="#c4a265" opacity="0.35"/>
    <line x1="285" y1="60" x2="300" y2="80" stroke="#1a535c" strokeWidth="0.8" opacity="0.2"/>
    <line x1="285" y1="60" x2="270" y2="78" stroke="#1a535c" strokeWidth="0.8" opacity="0.2"/>

  </svg>
);

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceKeys = Object.keys(servicesData);

  return (
    <section id="services" className="pt-32 pb-24 scroll-mt-32 relative overflow-hidden">
      {/* ↑ pt-32 adds offset for fixed navbar so content is not hidden */}

      {/* Right-side decorative artwork */}
      <div className="absolute right-0 top-16 w-72 lg:w-80 h-[380px] pointer-events-none select-none">
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
          <h2 className="font-serif text-4xl font-bold text-brand-teal">Our Core Services</h2>
          <p className="text-gray-500 mt-2">Solutions that blend innovation, sustainability, and service excellence.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard
                serviceKey={key}
                icon={iconMap[key]}
                title={servicesData[key].title}
                description={servicesData[key].description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
