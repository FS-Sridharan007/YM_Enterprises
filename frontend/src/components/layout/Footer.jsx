import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import companyLogo from '../../assets/Logo2.png';

const Footer = () => {
  return (
    <footer className="bg-brand-teal text-white border-t border-teal-800">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-2.5 w-28 mb-4 shadow-sm">
              <img src={companyLogo} alt="Yazh Marutha Enterprises Logo" className="w-full h-auto object-contain" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              For a greener earth and a brighter future.
            </p>
          </div>

          {/* Quick Links / Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#services" className="text-gray-300 hover:text-brand-gold transition-colors">Lighting Solutions</a></li>
              <li><a href="/#services" className="text-gray-300 hover:text-brand-gold transition-colors">Solar Energy</a></li>
              <li><a href="/#services" className="text-gray-300 hover:text-brand-gold transition-colors">Home Appliances</a></li>
              <li><a href="/all-products" className="text-gray-300 hover:text-brand-gold transition-colors">All Products</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#about" className="text-gray-300 hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-brand-gold transition-colors">Contact Us</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-brand-gold transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Addresses & Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-4 text-white">Contact & Addresses</h4>
            
            {/* Contact Bar */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6 bg-white/5 p-3 rounded-xl border border-white/10">
              <a href="mailto:sales@yazhmaruthaenterprises.com" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                <FiMail className="text-brand-gold text-base flex-shrink-0" />
                <span className="text-xs sm:text-sm">sales@yazhmaruthaenterprises.com</span>
              </a>
              <a href="tel:+917418310769" className="flex items-center gap-2 hover:text-brand-gold transition-colors ml-auto">
                <FiPhone className="text-brand-gold text-base flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91 7418310769</span>
              </a>
            </div>

            {/* Address Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4 text-xs text-gray-300">
              {/* Registered Office */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-brand-gold/40 transition-colors">
                <div className="flex items-center gap-1.5 text-brand-gold font-bold text-sm mb-2">
                  <FiMapPin className="flex-shrink-0" />
                  <span>Registered Office</span>
                </div>
                <p className="font-semibold text-white mb-1">YAZH MARUTHA ENTERPRISES</p>
                <p className="leading-relaxed text-gray-300">
                  1245 Alliance Jasmine Springs Thaiyur, OMR, Kelambakkam, Chennai - 603103
                </p>
              </div>

              {/* Branch Addresses */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-brand-gold/40 transition-colors space-y-3">
                <div>
                  <div className="flex items-center gap-1.5 text-brand-gold font-bold text-sm mb-1">
                    <FiMapPin className="flex-shrink-0" />
                    <span>Branch Office — Thaiyur</span>
                  </div>
                  <p className="font-semibold text-white mb-0.5">YAZH MARUTHA ENTERPRISES</p>
                  <p className="leading-relaxed text-gray-300">
                    Kelambakkam Bypass Rd, Thaiyur, Chennai - 603103
                  </p>
                </div>

                <div className="pt-2.5 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-brand-gold font-bold text-sm mb-1">
                    <FiMapPin className="flex-shrink-0" />
                    <span>Branch Office — Madurai</span>
                  </div>
                  <p className="font-semibold text-white mb-0.5">YAZH MARUTHA ENTERPRISES</p>
                  <p className="leading-relaxed text-gray-300">
                    Near KMPVIP Nagar, Ammapatti Main Road, Othakadai, Madurai - 625107
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700/60 pt-6 mt-4 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Yazh Marutha Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;