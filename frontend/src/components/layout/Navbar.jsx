import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import companyLogo from '../../assets/Logo2.png';
import {
  FiSearch, FiMail, FiPhone, FiFacebook, FiInstagram, FiYoutube,
  FiChevronDown, FiMenu, FiX
} from 'react-icons/fi';

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  {
    label: "Products",
    subLinks: [
      {
        label: "Solars",
        subLinks: [
          { href: "/products/solar-solutions/solar-panels", label: "Panels" },
          { href: "/products/solar-solutions/solar-inverters", label: "Inventors" },
          { href: "/products/solar-solutions/solar-batteries", label: "Batteries" },
        ]
      },
      { href: "/enzolt-products", label: "Enzolt Energy" },
      { href: "/products/lighting-systems/decorative-lighting", label: "Decorative Lighting" },
      { href: "/products/lighting-systems/smart-lighting", label: "Smart Lighting" },
      { href: "/products/home-living/home-appliances", label: "Home Appliances" },
    ]
  },
  { href: "/#features", label: "Features" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
];

const menuContainerVariants = {
  hidden: {
    clipPath: 'circle(24px at calc(100% - 48px) 50%)',
    transition: { type: 'spring', stiffness: 400, damping: 40 }
  },
  visible: {
    clipPath: 'circle(150% at calc(100% - 48px) 50%)',
    transition: { type: 'spring', stiffness: 80, restDelta: 2 }
  }
};

const navListVariants = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 }},
  hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 }}
};

const navLinkVariants = {
  visible: {
    y: 0, opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 }}
  },
  hidden: {
    y: 50, opacity: 0,
    transition: { y: { stiffness: 1000 }}
  }
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSolarDropdown, setOpenSolarDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/') {
      const sectionIds = navLinks
        .filter(link => link.href?.startsWith('/#'))
        .map(link => link.href.substring(2));

      const observer = new IntersectionObserver(
        entries => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id)),
        { rootMargin: '-50% 0px -50% 0px' }
      );

      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });

      return () => observer.disconnect();
    } else setActiveSection('');
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenProducts(false);
    setOpenSolarDropdown(false);
  };

  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <header className="fixed top-0 left-0 w-full z-50 shadow-sm">
        
        {/* ---------------- TOPBAR ---------------- */}
        <div className="bg-brand-teal text-white/80 text-sm hidden md:block">
          <div className="container mx-auto px-6 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="mailto:sales@yazhmaruthaenterprises.com" className="flex items-center hover:text-white transition-colors">
                <FiMail className="mr-2" /> sales@yazhmaruthaenterprises.com
              </a>
              <a href="mailto:ymb.yazhmaruthaenterprises@gmail.com" className="flex items-center hover:text-white transition-colors">
                <FiMail className="mr-2" /> ymb.yazhmaruthaenterprises@gmail.com
              </a>
              <a href="tel:+917418310769" className="flex items-center hover:text-white transition-colors">
                <FiPhone className="mr-2" /> +91 7418310769
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/share/1DkpGrq6AN/" className="hover:text-white"><FiFacebook /></a>
              <a href="https://www.youtube.com/@yazhmaruthabhuvaneshwaran" className="hover:text-white"><FiYoutube /></a>
              <a href="https://www.instagram.com/yazhmarutha_enterprises" className="hover:text-white"><FiInstagram /></a>
            </div>
          </div>
        </div>

        {/* ---------------- MAIN NAVBAR ---------------- */}
        <div className="bg-brand-cream/90 backdrop-blur-lg border-b border-black/5">
          <div className="container mx-auto px-6 py-1 flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link to="/"><img src={companyLogo} className="h-16" /></Link>

            {/* -------- DESKTOP NAV -------- */}
            <nav className="hidden lg:flex items-center space-x-10 text-brand-charcoal">

              {navLinks.map(link => (
                <div
                  key={link.label}
                  className="relative py-2"
                  onMouseEnter={() => link.subLinks && setOpenDropdown(link.label)}
                  onMouseLeave={() => link.subLinks && setOpenDropdown(null)}
                >

                  {/* MAIN NAV LINK */}
                  {link.href ? (
                    <Link
                      to={link.href}
                      smooth
                      scroll={scrollWithOffset}
                      className="font-medium hover:text-brand-teal transition-colors text-base"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button className="flex items-center font-medium cursor-pointer hover:text-brand-teal">
                      {link.label}
                      <FiChevronDown className="ml-1" size={16} />
                    </button>
                  )}
                
                  {/* ACTIVE INDICATOR */}
                  {link.href && activeSection === link.href.substring(2) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                    />
                  )}
                
                  {/* -------- MAIN DROPDOWN -------- */}
                  <AnimatePresence>
                    {link.subLinks && openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-xl border border-gray-200 z-50"
                      >
                        <ul className="py-2">
                    
                          {link.subLinks.map(sub => (
                            <li key={sub.label} className="relative group">
                          
                              {/* If HAS a nested menu (Solar category) */}
                              {sub.subLinks ? (
                                <>
                                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                                    <span>{sub.label}</span>
                                    <FiChevronDown className="rotate-270" />
                                  </div>
                              
                                  {/* -------- SIDE SUBMENU -------- */}
                                  <div className="
                                    absolute left-full top-0 ml-1 w-56 bg-white border
                                    shadow-lg rounded-md opacity-0 group-hover:opacity-100
                                    pointer-events-none group-hover:pointer-events-auto
                                    transition-opacity duration-200 z-50
                                  ">
                                    <ul className="py-2">
                                      {sub.subLinks.map(child => (
                                        <li key={child.label}>
                                          <Link
                                            to={child.href}
                                            className="block px-4 py-2 hover:bg-gray-100"
                                          >
                                            {child.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              ) : (
                                <Link
                                  to={sub.href}
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  {sub.label}
                                </Link>
                              )}
                            
                            </li>
                          ))}
                        
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                </div>
              ))}
            
            </nav>
            

            {/* ----- DESKTOP RIGHT SIDE ----- */}
            <div className="hidden lg:flex items-center space-x-6">
              <button><FiSearch size={20} /></button>
              <Link to="/#contact" smooth scroll={scrollWithOffset}
                className="bg-brand-gold text-brand-teal font-bold py-2 px-5 rounded-md"
              >
                Get a Quote
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>

          </div>
        </div>
      </header>

      {/* ------------ MOBILE MENU ------------ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-brand-cream z-40 flex flex-col lg:hidden"
          >

            {/* Close */}
            <button onClick={closeMenu} className="absolute top-4 right-4">
              <FiX size={28} />
            </button>

            {/* LOGO */}
            <div className="flex justify-center pt-16 pb-4">
              <img src={companyLogo} className="h-16" />
            </div>

            {/* MOBILE NAV LIST */}
            <motion.div
              variants={navListVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center space-y-4 pt-6"
            >
              {navLinks.map(link => (
                <motion.div variants={navLinkVariants} key={link.label}>

                  {/* PRODUCTS */}
                  {link.subLinks ? (
                    <>
                      <button
                        className="text-xl font-semibold flex items-center"
                        onClick={() => setOpenProducts(!openProducts)}
                      >
                        {link.label}
                        <FiChevronDown
                          className={`ml-2 transition-transform ${openProducts ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {openProducts && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-2 space-y-2 text-center"
                          >

                            {/* SUB LINKS INSIDE PRODUCTS */}
                            {link.subLinks.map(sub => (
                              <li key={sub.label}>

                                {/* SOLAR PANELS NESTED MENU */}
                                {sub.subLinks ? (
                                  <>
                                    <button
                                      className="text-brand-teal font-medium flex items-center mx-auto"
                                      onClick={() => setOpenSolarDropdown(
                                        openSolarDropdown === sub.label ? null : sub.label
                                      )}
                                    >
                                      {sub.label}
                                      <FiChevronDown
                                        className={`ml-1 transition-transform ${openSolarDropdown === sub.label ? "rotate-180" : ""}`}
                                      />
                                    </button>

                                    <AnimatePresence>
                                      {openSolarDropdown === sub.label && (
                                        <motion.ul
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="space-y-2 mt-2"
                                        >
                                          {sub.subLinks.map(child => (
                                            <li key={child.label}>
                                              <Link
                                                to={child.href}
                                                onClick={closeMenu}
                                                className="block text-brand-teal text-sm"
                                              >
                                                {child.label}
                                              </Link>
                                            </li>
                                          ))}
                                        </motion.ul>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <Link
                                    to={sub.href}
                                    onClick={closeMenu}
                                    className="block text-brand-teal"
                                  >
                                    {sub.label}
                                  </Link>
                                )}

                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={link.href} onClick={closeMenu} className="text-xl font-medium">
                      {link.label}
                    </Link>
                  )}

                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;
