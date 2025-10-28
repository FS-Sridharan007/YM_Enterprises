import React from 'react';
import companyLogo from '../../assets/Logo2.png';

const Footer = () => {
  return (
    <footer className="bg-brand-teal text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-md p-2 w-24 mb-4">
              <img src={companyLogo} alt="Yazh Marutha Enterprises Logo" className="w-full"/>
            </div>
            <p className="text-gray-300 text-sm">For a greener earth and a brighter future.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white">Lighting Solutions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Solar Energy</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Home Appliances</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-300">
              <li>sales@yazhmaruthaenterprises.com</li>
              <li>1245 Alliance Jasmine Springs Thayyur,</li>
              <li>OMR, Kelambakkam, Chennai - 603103</li>
              <li>+91 7418310769</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700/50 pt-6 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Yazh Marutha Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;