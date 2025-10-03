import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { FiArrowLeft, FiSun, FiZap, FiCpu, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const iconMap = {
  solar: <FiSun size={48} />,
  lighting: <FiZap size={48} />,
  appliances: <FiCpu size={48} />,
};

const ServiceDetailPage = () => {
  const { key } = useParams();
  const service = servicesData[key];
  const navigate = useNavigate();

  const [showFeatures, setShowFeatures] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);

  // Always render top of page on mount
  useEffect(() => {
    // Add offset for fixed navbar
    const navbarHeight = 100; // adjust to your navbar height
    window.scrollTo({ top: 0, behavior: "auto" });
    document.body.style.scrollPaddingTop = `${navbarHeight}px`; 
  }, [key]);

  const handleCTAClick = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        const yOffset = -100;
        const y = contactEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  if (!service) {
    return (
      <div className="text-center py-24">
        <h2 className="text-3xl font-bold">Service Not Found</h2>
        <Link to="/services" className="mt-4 inline-block text-brand-teal">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-32 px-6 md:px-12 container mx-auto max-w-6xl">
      {/* ↑ pt-32 adds offset so content is not hidden under navbar */}
      <Link to="/services" className="flex items-center text-brand-teal mb-6 hover:text-brand-gold transition-colors">
        <FiArrowLeft className="mr-2" /> Back to Services
      </Link>

      <div className="text-center mb-12">
        <div className="text-brand-gold mb-4">{iconMap[key]}</div>
        <h1 className="text-4xl font-bold text-brand-teal mb-4">{service.title}</h1>
        <p className="text-gray-500 text-lg">{service.details}</p>
      </div>

      {/* Features */}
      <div className="border rounded-lg p-6 mb-6 shadow-sm">
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="w-full flex justify-between items-center text-left font-semibold text-lg text-brand-teal"
        >
          Features
          {showFeatures ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        {showFeatures && (
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            {service.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        )}
      </div>

      {/* Benefits */}
      <div className="border rounded-lg p-6 mb-6 shadow-sm">
        <button
          onClick={() => setShowBenefits(!showBenefits)}
          className="w-full flex justify-between items-center text-left font-semibold text-lg text-brand-teal"
        >
          Benefits
          {showBenefits ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        {showBenefits && (
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            {service.benefits.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={handleCTAClick}
          className="bg-brand-gold text-brand-teal font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity"
        >
          {service.cta.text}
        </button>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
