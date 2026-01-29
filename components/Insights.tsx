
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

        {/* Newsletter Enhancement */}
        <div className="mt-20 relative z-10">
          <div className="bg-deepBlue rounded-[2rem] p-8 md:p-12 md:flex justify-between items-center shadow-2xl border border-white/10">
            <div className="text-left mb-8 md:mb-0 max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Stay Ahead with <span className="text-gold italic">Pinnacle Insights</span></h3>
              <p className="text-silver text-lg leading-relaxed">Join 5,000+ executives receiving our weekly strategy notes directly in their inbox.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your professional email" 
                className="px-6 py-4 rounded-xl outline-none text-deepBlue w-full md:w-80 focus:ring-4 focus:ring-gold/30 transition shadow-inner"
                required
              />
              <button 
                type="submit"
                disabled={isSubscribed}
                className={`px-8 py-4 font-bold rounded-xl transition-all shadow-lg whitespace-nowrap active:scale-95 ${
                  isSubscribed ? 'bg-green-500 text-white' : 'bg-gold text-deepBlue hover:bg-white'
                }`}
              >
                {isSubscribed ? 'Subscribed!' : 'Join the Network'}
              </button>
            </form>
          </div>
          {/* Decorative element */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-deepBlue/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
