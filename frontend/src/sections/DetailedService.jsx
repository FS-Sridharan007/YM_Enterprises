import React, { useState } from 'react';
import { FiChevronRight, FiZap, FiSun, FiHome } from 'react-icons/fi';

// Service data from the draft
const serviceDetails = {
  lighting: {
    icon: <FiZap className="text-3xl" />,
    title: "Comprehensive Lighting Solutions",
    description: "Smart and stylish lighting solutions for residential and commercial spaces.",
    items: [
      "Architectural & Decorative Lighting",
      "Technical & Industrial Lighting",
      "Custom Spotlights",
      "External & Landscape Lighting"
    ]
  },
  solar: {
    icon: <FiSun className="text-3xl" />,
    title: "End-to-End Solar Services",
    description: "Renewable solutions to help you save on electricity and reduce your carbon footprint.",
    items: [
      "Solar Panel Installation",
      "Battery Storage Systems",
      "Grid-Tie Solutions",
      "Ongoing Maintenance & Support"
    ]
  },
  appliances: {
    icon: <FiHome className="text-3xl" />,
    title: "Premium & Smart Home Appliances",
    description: "Elevate your home with a range of smart and durable home appliances.",
    items: [
      "Modern Kitchen Appliances",
      "Integrated Smart Home Devices",
      "Energy-Efficient Solutions",
      "Expert Installation Services"
    ]
  }
};

const DetailedService = () => {
  const [activeTab, setActiveTab] = useState('lighting');
  const activeService = serviceDetails[activeTab];

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-6 py-3 font-bold rounded-full transition-all duration-300 ${activeTab === id ? 'bg-primary-green text-white shadow-md' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
    >
      {label}
    </button>
  );

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-primary-green">A Deeper Look Into Our Services</h2>
          <p className="text-gray-500 mt-2">Tailored solutions that blend innovation, sustainability, and service excellence.</p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-12">
          <TabButton id="lighting" label="Lighting" />
          <TabButton id="solar" label="Solar" />
          <TabButton id="appliances" label="Appliances" />
        </div>

        <div className="bg-white p-12 rounded-lg shadow-xl max-w-4xl mx-auto transition-all duration-500">
          <div className="flex items-center text-accent-gold mb-4">
            {activeService.icon}
            <h3 className="font-serif text-3xl text-primary-green ml-4">{activeService.title}</h3>
          </div>
          <p className="text-gray-600 mb-8">{activeService.description}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {activeService.items.map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FiChevronRight className="text-accent-gold mr-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DetailedService;