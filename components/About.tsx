
import React from 'react';

interface AboutProps {
  onCtaClick: () => void;
}

const About: React.FC<AboutProps> = ({ onCtaClick }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold opacity-20 rounded-full blur-xl"></div>
            <img 
              src="/images/about-team.jpg" 
              alt="Professional consulting team" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px] relative z-10"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-deepBlue text-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <p className="text-3xl font-bold text-gold">15+</p>
              <p className="text-sm font-medium uppercase tracking-wider">Years Experience</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Our Foundation</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepBlue mb-8 leading-tight">
              Transforming Ambition into <span className="text-gold">Achievement</span>.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At Pinnacle Consulting, we specialize in helping businesses unlock their potential and achieve sustainable growth. We believe that true success comes from a deep understanding of your unique challenges, combined with world-class strategy.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We don't just act as advisors who leave you with a deck; we embed ourselves within your operations to ensure execution matches the vision. From navigating complex digital transformations to optimizing global supply chains, our team creates structural resilience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start space-x-3">
                <i className="fas fa-check-circle text-gold text-xl mt-1"></i>
                <p className="text-gray-700 font-medium">Strategic Execution</p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-check-circle text-gold text-xl mt-1"></i>
                <p className="text-gray-700 font-medium">Operational Frameworks</p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-check-circle text-gold text-xl mt-1"></i>
                <p className="text-gray-700 font-medium">Global Market Insight</p>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-check-circle text-gold text-xl mt-1"></i>
                <p className="text-gray-700 font-medium">Digital Innovation</p>
              </div>
            </div>

            <button 
              onClick={onCtaClick}
              className="group inline-flex items-center text-deepBlue font-bold text-lg border-b-2 border-gold hover:text-gold transition-all duration-300 pb-1"
            >
              Meet The Team 
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white">
            <h3 className="text-4xl font-heading font-bold text-deepBlue mb-6">Subscribe Today</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Stay informed with our latest insights on business transformation, market trends, and strategic innovation. Join thousands of executives who trust Pinnacle Consulting for actionable intelligence.
            </p>
            <button className="bg-deepBlue text-white px-6 py-3 rounded-lg font-bold hover:bg-gold hover:text-deepBlue transition-all duration-300">
              Read More
            </button>
          </div>

          <div className="bg-gradient-to-br from-deepBlue to-deepBlue/80 rounded-3xl p-10 md:p-14 shadow-2xl">
            <h3 className="text-3xl font-heading font-bold text-white mb-8">Join Newsletter</h3>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button 
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg font-bold text-lg hover:bg-gold hover:text-deepBlue transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
