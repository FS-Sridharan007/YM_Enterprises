import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, serviceKey }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/services/${serviceKey}`)}
      className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      <div className="text-brand-gold mb-4">{icon}</div>
      <h3 className="font-serif text-2xl font-bold text-brand-teal mb-2">{title}</h3>
      <p className="text-gray-500 mb-6">{description}</p>
      <div className="font-bold text-brand-teal flex items-center group-hover:text-brand-gold transition-colors">
        Learn More <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

export default ServiceCard;
