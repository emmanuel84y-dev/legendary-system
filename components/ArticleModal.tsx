
import React, { useEffect } from 'react';
import { Insight } from '../types';

interface ArticleModalProps {
  article: Insight | null;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [article]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 bg-deepBlue text-white hover:bg-gold hover:text-deepBlue rounded-full w-12 h-12 flex items-center justify-center transition shadow-lg z-50"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <div className="relative h-72 md:h-[400px]">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10">
            <span className="bg-gold text-deepBlue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
              {article.category}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-deepBlue mt-4 drop-shadow-sm">
              {article.title}
            </h2>
          </div>
        </div>

        <div className="p-10 md:p-16">
          <div 
            className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-deepBlue shadow-inner">
                <i className="fas fa-user-tie text-2xl"></i>
              </div>
              <div>
                <p className="font-extrabold text-deepBlue text-lg">Written by Pinnacle Team</p>
                <p className="text-gray-500 font-medium">Global Strategy Consultants</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="px-8 py-3 bg-deepBlue text-white font-bold rounded-full hover:bg-gold hover:text-deepBlue transition-all shadow-lg active:scale-95"
            >
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
