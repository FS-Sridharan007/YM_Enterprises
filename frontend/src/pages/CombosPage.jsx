import React, { useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { comboOffers } from "../data/comboProducts";
import { FiPackage, FiCheck, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

/* ───── badge colour map ───── */
const badgeColors = {
  Popular:   "bg-blue-500",
  "Best Value": "bg-emerald-500",
  Limited:   "bg-amber-500",
  Premium:   "bg-purple-500",
};

/* ───── stagger container ───── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CombosPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-28 min-h-screen">
      <div className="container mx-auto px-6">

        {/* ─── PAGE HEADER ─── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <HiOutlineSparkles className="text-lg" />
            Special Offers
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-teal">
            Combo Offers
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-lg">
            Save more when you bundle. Explore our hand-picked combo deals on solar inverters and batteries.
          </p>

          {/* summary chips */}
          <div className="flex justify-center gap-6 mt-8 flex-wrap">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <FiPackage className="text-brand-teal" />
              {comboOffers.length} Combos Available
            </div>
            {/* <div className="flex items-center gap-2 text-gray-600 text-sm">
              <FiPercent className="text-green-500" />
              Up to {Math.max(...comboOffers.map(c => Math.round(((c.originalPrice - c.comboPrice) / c.originalPrice) * 100)))}% OFF
            </div> */}
          </div>
        </motion.div>

        {/* ─── COMBO CARDS GRID ─── */}
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {comboOffers.map((combo) => {
            const isExpanded = expandedId === combo.id;

            return (
              <motion.div
                key={combo.id}
                variants={cardVariants}
                className="relative bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* badge */}
                {combo.badge && (
                  <span
                    className={`absolute top-4 right-4 z-10 text-white text-xs font-bold px-3 py-1 rounded-full ${badgeColors[combo.badge] || "bg-gray-500"}`}
                  >
                    {combo.badge}
                  </span>
                )}

                {/* ── Image Row ── */}
                <div className="flex items-center justify-center gap-4 p-6 bg-gray-50/60">
                  {combo.images.map((img, i) => (
                    <div
                      key={i}
                      className="w-32 h-32 bg-white rounded-xl border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-[1.03] transition-transform duration-300"
                    >
                      <img
                        src={img.src}
                        alt={img.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  ))}

                  {/* plus sign between images */}
                  {combo.images.length > 1 && (
                    <span className="absolute text-3xl font-bold text-brand-teal/30 select-none hidden md:block" style={{ left: "50%", transform: "translateX(-50%)" }}>
                      +
                    </span>
                  )}
                </div>

                {/* ── Details ── */}
                <div className="p-6">
                  {/* tagline */}
                  <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-1">
                    {combo.tagline}
                  </p>

                  <h3 className="font-serif text-2xl font-bold text-brand-teal">
                    {combo.title}
                  </h3>

                  {/* included products */}
                  <ul className="mt-3 space-y-1.5">
                    {combo.includedProducts.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          {p.qty}× {p.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* expandable description */}
                  <button
                    onClick={() => toggle(combo.id)}
                    className="flex items-center gap-1 text-brand-teal text-sm font-medium mt-3 hover:text-brand-gold transition-colors"
                  >
                    {isExpanded ? "Show less" : "More details"}
                    {isExpanded ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-gray-500 text-sm overflow-hidden"
                      >
                        {combo.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* CTA */}
                  <div className="mt-6">
                    <Link
                      // to="/#contact"
                      smooth
                      className="block w-full py-3 bg-brand-teal text-white font-bold rounded-xl hover:bg-brand-teal/90 transition-colors text-center"
                    >
                      Enquiry Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom Banner ── */}
        <motion.div
          className="mt-20 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm">
            💡 All combos include free delivery, installation support, and manufacturer warranty on each product.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CombosPage;
