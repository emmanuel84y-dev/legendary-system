
import React, { useState } from 'react';
import { INSIGHTS } from '../data';
import { Insight } from '../types';

interface InsightsProps {
  onOpenArticle: (article: Insight) => void;
}

const Insights: React.FC<InsightsProps> = ({ onOpenArticle }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      console.log(`[Analytics] Newsletter Signup: ${email}`);
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section id="insights" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Knowledge Hub</h4>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepBlue">Insights That Matter</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((insight) => (
            <article key={insight.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100">
              <div className="overflow-hidden h-56">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold text-gold uppercase tracking-widest mb-3">{insight.category}</span>
                <h3 className="text-2xl font-bold text-deepBlue mb-4 group-hover:text-gold transition-colors">{insight.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{insight.summary}</p>
                <div className="mt-auto">
                  <button 
                    onClick={() => onOpenArticle(insight)} 
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-deepBlue hover:text-gold transition group/btn"
                  >
                    Read Article 
                    <i className="fas fa-arrow-right text-gold transform group-hover/btn:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white">
              <h3 className="text-4xl font-heading font-bold text-deepBlue mb-6">Subscribe Today</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stay informed with our latest insights on business transformation, market trends, and strategic innovation. Join thousands of executives who trust Pinnacle Consulting for actionable intelligence.
              </p>
              <button className="mt-8 bg-deepBlue text-white px-6 py-3 rounded-lg font-bold hover:bg-gold hover:text-deepBlue transition-all duration-300">
                Read More
              </button>
            </div>

            <div className="bg-gradient-to-br from-deepBlue to-deepBlue/80 rounded-3xl p-10 md:p-14 shadow-2xl">
              <h3 className="text-3xl font-heading font-bold text-white mb-8">Join Newsletter</h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" 
                  className="w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
                <button 
                  type="submit"
                  disabled={isSubscribed}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                    isSubscribed ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gold hover:text-deepBlue'
                  }`}
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
