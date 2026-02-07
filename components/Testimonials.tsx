
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TESTIMONIALS, CLIENT_LOGOS } from '../data';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-deepBlue relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Proven Results</h4>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Voice of the Summit</h2>

        <div className="max-w-4xl mx-auto mb-20 mt-8 min-h-[300px] flex items-center justify-center">
          <div className="relative w-full">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={t.id} 
                className={`transition-all duration-1000 absolute top-0 left-0 w-full ${
                  idx === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
                }`}
              >
                <div className="bg-white/10 p-10 md:p-14 rounded-[3rem] backdrop-blur-md border border-white/20 shadow-2xl">
                  <div className="mb-6 text-gold text-2xl">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="text-xl md:text-3xl italic text-white mb-8 leading-relaxed font-light">
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-center space-x-5">
                    <Image 
                      src={t.image} 
                      alt={t.name}
                      width={64}
                      height={64}
                      className="rounded-full border-2 border-gold object-cover shadow-lg"
                      loading="lazy"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-lg text-white">{t.name}</h4>
                      <p className="text-gold text-sm font-semibold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manual Controls */}
        <div className="flex justify-center space-x-3 mb-24">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'bg-gold w-10' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Client Logos */}
        <div className="pt-16 border-t border-white/10">
          <p className="text-silver font-bold uppercase tracking-widest text-xs mb-10">Trusted by Market Titans</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {CLIENT_LOGOS.map((logo) => (
              <div key={logo.name} className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-white group cursor-default">
                <i className={`fab ${logo.icon} text-4xl group-hover:text-gold transition-colors`}></i>
                <span className="group-hover:text-gold transition-colors">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
