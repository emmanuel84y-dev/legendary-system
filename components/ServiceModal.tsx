
import React, { useEffect } from 'react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onInterested?: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onInterested }) => {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [service]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="sticky top-6 float-right right-6 bg-deepBlue text-white hover:bg-gold hover:text-deepBlue rounded-full w-10 h-10 flex items-center justify-center transition shadow-lg z-50"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="p-10 md:p-14 clear-both">
          <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 shadow-inner text-deepBlue text-4xl">
            <i className={`fas ${service.icon}`}></i>
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-deepBlue mb-4">
            {service.title}
          </h2>
          
          <div className="w-12 h-1 bg-gold mb-8"></div>
          
          <p className="text-xl text-gray-800 leading-relaxed mb-8">
            {service.longDescription}
          </p>

          <div className="bg-lightGray p-6 rounded-2xl border-l-4 border-gold">
            <h4 className="text-sm font-bold uppercase tracking-widest text-deepBlue mb-3">Our Deliverables</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <i className="fas fa-check text-gold text-xs"></i> Detailed Analytical Assessment
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <i className="fas fa-check text-gold text-xs"></i> 24-Month Implementation Roadmap
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <i className="fas fa-check text-gold text-xs"></i> Stakeholder Alignment Framework
              </li>
            </ul>
          </div>

          <button 
            onClick={onInterested || onClose}
            className="mt-10 w-full py-4 bg-deepBlue text-white font-bold rounded-xl hover:bg-gold hover:text-deepBlue transition-all shadow-lg"
          >
            Book Discovery Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
