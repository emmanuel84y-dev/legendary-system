
import React, { useEffect } from 'react';
import { Service } from '../types';

interface ServiceDetailViewProps {
  service: Service;
  onGoBack: () => void;
  onCtaClick: () => void;
}

const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ service, onGoBack, onCtaClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  return (
    <div className="min-h-screen bg-white animate-fade-in">
      {/* Hero Header */}
      <div className="relative h-[60vh] bg-deepBlue overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <button 
            onClick={onGoBack} 
            className="absolute top-32 left-6 md:left-0 text-white/80 hover:text-gold transition flex items-center gap-2 font-bold uppercase tracking-widest text-sm"
          >
            <i className="fas fa-arrow-left"></i> Back to Services
          </button>
          
          <div className="max-w-3xl mt-16">
            <div className={`w-16 h-1 bg-gold mb-6`}></div>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-silver font-light leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-heading font-bold text-deepBlue mb-6">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {service.longDescription}
            </p>
          </div>
          <div className="bg-lightGray p-8 rounded-3xl h-max">
            <h3 className="text-xl font-bold text-deepBlue mb-6 flex items-center gap-3">
              <i className={`fas ${service.icon} text-gold`}></i> At a Glance
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-deepBlue mt-1"></i>
                <span className="text-gray-700 font-medium">Global Best Practices</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-deepBlue mt-1"></i>
                <span className="text-gray-700 font-medium">Data-Driven Methodology</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-deepBlue mt-1"></i>
                <span className="text-gray-700 font-medium">Dedicated Partner Support</span>
              </li>
            </ul>
            <button 
              onClick={onCtaClick}
              className="mt-8 w-full py-4 bg-deepBlue text-white font-bold rounded-xl hover:bg-gold hover:text-deepBlue transition-all shadow-lg"
            >
              Request Consultation
            </button>
          </div>
        </div>

        {/* Approach Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Methodology</h4>
            <h2 className="text-4xl font-heading font-bold text-deepBlue">Our Approach</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.approach.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-deepBlue to-gold rounded-2xl opacity-20 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                <div className="relative bg-white p-8 rounded-2xl h-full border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-deepBlue text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-deepBlue mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className="bg-deepBlue rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Impact</h4>
              <h2 className="text-4xl font-heading font-bold mb-6">Expected Outcomes</h2>
              <p className="text-silver text-lg leading-relaxed mb-8">
                Our engagements are defined by measurable results, not just hours billed. Here is what you can expect when partnering with Pinnacle.
              </p>
              <button 
                onClick={onCtaClick}
                className="px-8 py-3 border-2 border-gold text-gold font-bold rounded-full hover:bg-gold hover:text-deepBlue transition-all"
              >
                Start Your Transformation
              </button>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-1 gap-4 w-full">
              {service.outcomes.map((outcome, idx) => (
                <div key={idx} className="bg-white/10 p-4 rounded-xl flex items-center gap-4 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-deepBlue text-sm"></i>
                  </div>
                  <span className="font-semibold text-lg">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailView;
