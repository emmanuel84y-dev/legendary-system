
import React from 'react';
import { METRICS } from '../data';

const Metrics: React.FC = () => {
  return (
    <section className="bg-deepBlue py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 text-gold group-hover:bg-gold group-hover:text-deepBlue transition-colors duration-500">
                <i className={`fas ${metric.icon} text-2xl`}></i>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-1">{metric.value}</h3>
              <p className="text-silver text-sm font-semibold uppercase tracking-widest">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
