
import React from 'react';
import { CASE_STUDIES } from '../data';

interface CaseStudiesViewProps {
  onGoBack: () => void;
}

const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({ onGoBack }) => {
  return (
    <div className="min-h-screen bg-lightGray pt-32 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <button onClick={onGoBack} className="text-deepBlue font-bold hover:text-gold transition mb-12 flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Back to Home
        </button>

        <div className="mb-20">
          <h1 className="text-5xl font-heading font-extrabold text-deepBlue mb-6">Proven <span className="text-gold">Results</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl">A comprehensive portfolio of transformations across the global business landscape.</p>
        </div>

        <div className="space-y-16">
          {CASE_STUDIES.map((cs, index) => (
            <div key={cs.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-[2.5rem] shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300`}>
              {/* Image Section */}
              <div className="w-full lg:w-2/5 h-64 lg:h-auto relative overflow-hidden group">
                <div className="absolute inset-0 bg-deepBlue/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={cs.image} 
                  alt={cs.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-deepBlue/5 flex items-center justify-center text-deepBlue">
                    <i className={`fas ${cs.icon} text-xl`}></i>
                  </div>
                  <span className="text-gold font-bold uppercase tracking-widest text-xs">{cs.client}</span>
                </div>
                
                <h3 className="text-3xl font-heading font-bold text-deepBlue mb-4">{cs.title}</h3>
                
                <div className="bg-lightGray rounded-xl p-4 mb-6 inline-block w-max">
                  <span className="text-xs text-gray-500 uppercase font-bold tracking-wider block mb-1">Key Outcome</span>
                  <span className="text-xl font-extrabold text-deepBlue">{cs.result}</span>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {cs.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesView;
