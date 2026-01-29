
import React from 'react';
import { CASE_STUDIES } from '../data';

interface CaseStudiesProps {
  onViewAll: () => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onViewAll }) => {
  // Only show first 3 on home
  const featured = CASE_STUDIES.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Success Stories</h4>
            <h2 className="text-4xl font-heading font-bold text-deepBlue">Proven Impact Across Industries</h2>
          </div>
          <div className="flex">
            <button 
              onClick={onViewAll}
              className="inline-block text-deepBlue font-bold border-b-2 border-gold pb-1 hover:text-gold transition w-max h-max"
            >
              View All Case Studies &rarr;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((cs) => (
            <div key={cs.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gold/30 transition-all duration-500 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-deepBlue/20 group-hover:bg-transparent transition-colors z-10"></div>
                 <img src={cs.image} alt={cs.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md z-20 text-deepBlue">
                    <i className={`fas ${cs.icon}`}></i>
                 </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">{cs.client}</p>
                <h3 className="text-xl font-bold text-deepBlue mb-4">{cs.title}</h3>
                
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <p className="text-2xl font-extrabold text-deepBlue">{cs.result}</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">
                  {cs.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
