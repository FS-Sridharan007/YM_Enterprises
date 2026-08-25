import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import {
  HiOutlineSun,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineHome,
  HiOutlineGift,
  HiOutlineCpuChip,
} from "react-icons/hi2";

/* ─── representative images (first image from each category) ─── */
import solarBattery from "../assets/images/solarpanel.jpg";
import enzoltEnergy from "../assets/products/Battery/Battery1.png";
import feston3Kw from "../assets/products/Feston/Feston 3Kw.png";
import deyeProduct from "../assets/products/Deye/Deye.png";
import wareeImg from "../assets/products/Waree/Waree.webp";
import polycabImg from "../assets/products/Polycab/Polycab3kw.webp";
import decorative from "../assets/products/decorative1.jpg";
import smartLighting from "../assets/products/technical1.jpg";
import homeAppliance from "../assets/products/spot1.jpg";
import comboImg from "../assets/products/Combo/combo1.png";

/* ─── category data ─── */
const allCategories = [
  {
    id: "solars",
    title: "Solars",
    description:
      "High-efficiency solar panels, advanced inverters, energy storage batteries, and complete mounting systems for sustainable power.",
    image: solarBattery,
    href: "/products/solar-solutions",
    icon: HiOutlineSun,
    color: "from-amber-400 to-orange-500",
    items: ["Panels", "Inverters", "Batteries", "Charge Controllers", "Mounting Systems"],
  },
  {
    id: "enzolt",
    title: "Enzolt Energy",
    description:
      "Premium LiFePO4 battery solutions built for long-lasting backup power — reliable, safe, and efficient for homes and businesses.",
    image: enzoltEnergy,
    href: "/enzolt-products",
    icon: HiOutlineBolt,
    color: "from-emerald-400 to-teal-500",
    items: ["LiFePO4 12W", "LiFePO4 24W"],
  },
  {
    id: "feston",
    title: "Feston",
    description:
      "Smart string inverters from the Feston Enfield Series — compact, efficient, and built for seamless grid-tied solar conversion.",
    image: feston3Kw,
    href: "/feston-products",
    icon: HiOutlineSparkles,
    color: "from-violet-400 to-purple-500",
    items: ["3KW String Inverter", "5KW String Inverter"],
  },
  {
    id: "deye",
    title: "DEYE",
    description:
      "High-performance DEYE single phase string inverters with 2 MPP trackers, up to 97.5% efficiency, and smart monitoring capabilities.",
    image: deyeProduct,
    href: "/deye-products",
    icon: HiOutlineCpuChip,
    color: "from-blue-400 to-indigo-500",
    items: ["3.6KW", "4KW", "4.6KW", "5KW", "5.2KW", "6KW", "6.2KW"],
  },
  {
    id: "waree",
    title: "Waree",
    description:
      "Complete Waaree on-grid solar kits with high-efficiency monocrystalline panels, inverter, mounting, and all accessories included.",
    image: wareeImg,
    href: "/waree-products",
    icon: HiOutlineSun,
    color: "from-red-400 to-pink-500",
    items: ["3KW Solar Kit", "5KW Solar Kit"],
  },
  {
    id: "polycab",
    title: "Polycab",
    description:
      "High-performance Polycab solar on-grid inverters engineered for 3KW, 5KW, and 6KW capacity setups with dual MPPT and smart monitoring.",
    image: polycabImg,
    href: "/polycab-products",
    icon: HiOutlineSun,
    color: "from-amber-500 to-yellow-600",
    items: ["3KW Inverter", "5KW Inverter", "6KW Inverter"],
  },
  {
    id: "combos",
    title: "Combos",
    description:
      "Hand-picked combo bundles pairing inverters with batteries at special offer prices — everything you need in one package.",
    image: comboImg,
    href: "/combos",
    icon: HiOutlineGift,
    color: "from-pink-400 to-rose-500",
    items: ["Microtek + Enzolt Combo"],
  },
  {
    id: "decorative-lighting",
    title: "Decorative Lighting",
    description:
      "Transform spaces with chandeliers, pendants, wall lights, ceiling lights, and elegant accent fixtures for every setting.",
    image: decorative,
    href: "/products/lighting-systems/decorative-lighting",
    icon: HiOutlineLightBulb,
    color: "from-yellow-400 to-amber-500",
    items: ["Chandeliers", "Pendant Lights", "Wall Lights", "Ceiling Lights"],
  },
  {
    id: "smart-lighting",
    title: "Smart Lighting",
    description:
      "Technical, spot, outdoor, LED strip, step, and in-ground lighting — precision-engineered for commercial and architectural use.",
    image: smartLighting,
    href: "/products/lighting-systems",
    icon: HiOutlineLightBulb,
    color: "from-cyan-400 to-blue-500",
    items: ["Technical Lighting", "Spot Lights", "Outdoor Lighting", "LED Strips"],
  },
  {
    id: "home-appliances",
    title: "Home Appliances",
    description:
      "A curated collection of smart home appliances designed for efficiency, comfort, and modern convenience in everyday life.",
    image: homeAppliance,
    href: "/products/home-living/home-appliances",
    icon: HiOutlineHome,
    color: "from-slate-400 to-gray-600",
    items: ["Smart Appliances"],
  },
];

/* ─── animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const AllProductsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-teal">
            Our Products
          </h1>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg">
            Explore our complete range of solar solutions, lighting systems, energy storage, and home appliances.
          </p>
        </motion.div>

        {/* ─── CATEGORY GRID ─── */}
        <motion.div
          className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.id} variants={cardVariants}>
                <Link
                  to={cat.href}
                  className="group block bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                >
                  {/* Image + gradient overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-60 mix-blend-multiply`} />

                    {/* icon badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-sm">
                      <Icon className="text-xl text-brand-teal" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-brand-teal group-hover:text-brand-gold transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>

                    {/* product chips */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {cat.items.slice(0, 4).map((item) => (
                        <span
                          key={item}
                          className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                      {cat.items.length > 4 && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                          +{cat.items.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-5 flex items-center text-brand-teal font-medium text-sm group-hover:text-brand-gold transition-colors">
                      Explore Category
                      <FiArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AllProductsPage;
