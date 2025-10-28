import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import companyLogo from '../../assets/Logo2.png';
import { FiSearch, FiMail, FiPhone, FiFacebook, FiInstagram, FiYoutube, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  {
    label: "Products",
    subLinks: [
      { href: "/products/solar-solutions/solar-panels", label: "Solar Panels" },
      { href: "/products/solar-solutions/solar-batteries", label: "Solar Batteries" },
      { href: "/products/lighting-systems/decorative-lighting", label: "Decorative Lighting" },
      { href: "/products/lighting-systems/smart-lighting", label: "Smart Lighting" },
      { href: "/products/home-living/home-appliances", label: "Home Appliances" },
    ]
  },
  { href: "/#features", label: "Features" },
  { href: "/#about", "label": "About Us" },
  { href: "/#contact", label: "Contact" },
];

const menuContainerVariants = {
  hidden: {
    clipPath: 'circle(24px at calc(100% - 48px) 50%)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  visible: {
    clipPath: 'circle(150% at calc(100% - 48px) 50%)',
    transition: {
      type: 'spring',
      stiffness: 80,
      restDelta: 2,
    },
  },
};

const navListVariants = {
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    },
    hidden: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const navLinkVariants = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    hidden: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
        closeMenu();
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/') {
        const sectionIds = navLinks.filter(link => link.href && link.href.startsWith('/#')).map(link => link.href.substring(2));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );

        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    } else {
        setActiveSection('');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenProducts(false);
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 shadow-sm">
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
                <a href="https://www.facebook.com/share/1DkpGrq6AN/" className="hover:text-white transition-colors" aria-label="Facebook"><FiFacebook /></a>
                <a href="https://www.youtube.com/@yazhmaruthabhuvaneshwaran" className="hover:text-white transition-colors" aria-label="YouTube"><FiYoutube /></a>
                <a href="https://www.instagram.com/yazhmarutha_enterprises?utm_source=qr&igsh=eHl6aW51cHUwdjk1" className="hover:text-white transition-colors" aria-label="Instagram"><FiInstagram /></a>
              </div>
            </div> 
        </div>

        <div className="bg-brand-cream/90 backdrop-blur-lg border-b border-black/5">
            <div className="container mx-auto px-6 py-1 flex justify-between items-center h-16">
              <Link to="/"><img src={companyLogo} alt="Yazh Marutha Enterprises" className="h-16" /></Link>
              <nav className="hidden lg:flex items-center space-x-10 text-brand-charcoal">{navLinks.map((link) => (<div key={link.label} className="relative py-2" onMouseEnter={() => link.subLinks && setOpenDropdown(link.label)} onMouseLeave={() => link.subLinks && setOpenDropdown(null)}>{link.href ? (<Link to={link.href} smooth scroll={scrollWithOffset} className="font-medium hover:text-brand-teal transition-colors text-base"><span className={activeSection === link.href.substring(2) ? 'text-brand-teal' : ''}>{link.label}</span></Link>) : (<div className="flex items-center font-medium cursor-default text-base"><span>{link.label}</span><FiChevronDown className="ml-1" size={16} /></div>)}{link.href && activeSection === link.href.substring(2) && (<motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" transition={{ type: 'spring', stiffness: 300, damping: 25 }}/>)}<AnimatePresence>{link.subLinks && openDropdown === link.label && (<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2, ease: "easeOut" }} className="absolute top-full mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200/80"><ul className="py-2">{link.subLinks.map(subLink => (<li key={subLink.label}><Link to={subLink.href} className="block px-4 py-2 text-brand-charcoal hover:bg-gray-100">{subLink.label}</Link></li>))}</ul></motion.div>)}</AnimatePresence></div>))}</nav>
              <div className="hidden lg:flex items-center space-x-6">
                <button className="text-brand-charcoal hover:text-brand-gold transition-colors" aria-label="Search"><FiSearch size={20} /></button>
                <Link to="/#contact" smooth scroll={scrollWithOffset} className="bg-brand-gold text-brand-teal font-bold py-2 px-5 rounded-md hover:opacity-90 transition-opacity">Get a Quote</Link>
              </div>
              
              <div className="lg:hidden">
                 <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-charcoal focus:outline-none z-50 relative" aria-label="Toggle menu">
                    {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                 </button>
              </div>
            </div>
        </div>
      </header>

<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      variants={menuContainerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 bg-brand-cream z-40 flex flex-col lg:hidden"
    >
      {/* Close button */}
      <button
        onClick={closeMenu}
        className="absolute top-4 right-4 z-50 text-brand-charcoal"
        aria-label="Close menu"
      >
        <FiX size={28} /> {/* ✅ smaller close icon */}
      </button>

      {/* Logo + Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        exit={{ opacity: 0 }}
        className="flex-shrink-0 flex flex-col items-center pt-12 pb-6"
      >
        <img
          src={companyLogo}
          alt="Yazh Marutha Enterprises"
          className="h-16 mb-3"
        />
        <h2 className="text-xl font-bold text-brand-charcoal text-center">
          Yazh Marutha Enterprises
        </h2>
      </motion.div>

      {/* Nav Links */}
      <motion.div
        variants={navListVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex-grow flex flex-col justify-center items-center text-center space-y-4"
      >
        {navLinks.map((link) => (
          <motion.div
            key={link.label}
            variants={navLinkVariants}
            className="flex flex-col items-center"
          >
            {link.subLinks ? (
              <>
                <button
                  onClick={() => setOpenProducts(!openProducts)}
                  className="text-lg sm:text-xl font-semibold text-brand-charcoal hover:text-brand-teal transition-colors flex items-center"
                >
                  {link.label}
                  <FiChevronDown
                    className={`ml-1 transition-transform duration-300 ${
                      openProducts ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>
                <AnimatePresence>
                  {openProducts && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col items-center space-y-2 mt-2"
                    >
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.label}>
                          <Link
                            to={subLink.href}
                            onClick={closeMenu}
                            className="block text-base text-brand-teal hover:text-brand-gold transition-colors"
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                to={link.href}
                smooth
                scroll={scrollWithOffset}
                onClick={closeMenu}
                className="text-lg sm:text-xl font-medium text-brand-charcoal hover:text-brand-teal transition-colors"
              >
                {link.label}
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, ease: "easeOut" },
        }}
        exit={{ opacity: 0, y: 20 }}
        className="flex-shrink-0 w-full px-6 pb-8 space-y-5"
      >
        <div className="text-center text-brand-charcoal/90">
          <p className="font-semibold text-base">Yazh Marutha Enterprises</p>
          <p className="text-sm">sales@yazhmaruthaenterprises.com</p>
          <p className="text-sm">1245 Alliance Jasmine Springs Thayyur,</p>
          <p className="text-sm">OMR, Kelambakkam, Chennai - 603103</p>
          <p className="text-sm">+91 7418310769</p>
        </div>

        <Link
          to="/#contact"
          smooth
          scroll={scrollWithOffset}
          onClick={closeMenu}
          className="block w-full text-center bg-brand-gold text-brand-teal text-base font-semibold py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          Get a Quote
        </Link>

        <div className="flex justify-center items-center space-x-6 text-sm text-brand-charcoal/90">
          <a
            href="mailto:ymb.yazhmaruthaenterprises@gmail.com"
            className="flex items-center hover:text-brand-teal transition-colors"
          >
            <FiMail className="mr-1" size={16} /> Email
          </a>
          <a
            href="tel:+91 7418310769"
            className="flex items-center hover:text-brand-teal transition-colors"
          >
            <FiPhone className="mr-1" size={16} /> Call
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default Navbar;