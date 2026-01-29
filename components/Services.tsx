
import React from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onCtaClick: (service: Service) => void;
  onViewMethods: () => void;
}

const Services: React.FC<ServicesProps> = ({ onCtaClick, onViewMethods }) => {
  return (
    <section id="services" className="py-24 bg-lightGray">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Our Capabilities</h4>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepBlue mb-4">Precision Engineering for Business</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-20 text-lg">
          We combine analytical rigor with creative intuition to solve your most complex organizational challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-left border-t-8 ${service.color} transform hover:-translate-y-2 group`}
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                <i className={`fas ${service.icon} text-3xl text-deepBlue group-hover:scale-110 transition-transform`}></i>
              </div>
              <h3 className="text-2xl font-heading font-bold text-deepBlue mb-4">{service.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.description}
              </p>
              <button 
                onClick={() => onCtaClick(service)}
                className="text-deepBlue font-bold flex items-center gap-2 hover:text-gold transition"
              >
                Learn More <i className="fas fa-chevron-right text-sm transform group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <button 
            onClick={onViewMethods}
            className="inline-block px-10 py-4 bg-deepBlue text-white font-extrabold rounded-full hover:bg-gold hover:text-deepBlue transition-all duration-300 shadow-xl"
          >
            Discover How We Help
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
