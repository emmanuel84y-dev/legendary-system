
import React from 'react';

interface HeroProps {
  onCtaClick: (label: string) => void;
  onLearnMore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onLearnMore }) => {
  return (
    <header id="home" className="relative w-full h-screen flex items-center justify-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      {/* Background Fallback for simulation */}
      <div className="absolute inset-0 bg-slate-900 hidden"></div>
      
      <div className="absolute inset-0 hero-overlay"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-4 leading-tight">
          PINNACLE <span className="text-gold">CONSULTING</span>
        </h1>
        <h2 className="text-xl md:text-3xl text-gold font-light mb-8 tracking-widest uppercase">
          Guiding Businesses to the Peak of Success
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={() => onCtaClick('Hero Main CTA')}
            className="px-10 py-4 bg-gold text-deepBlue font-bold rounded-lg shadow-xl hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Book Discovery Call
          </button>
          <button 
            onClick={onLearnMore}
            className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-deepBlue transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce opacity-50">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </header>
  );
};

export default Hero;
