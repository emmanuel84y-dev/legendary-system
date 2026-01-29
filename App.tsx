
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudies from './components/CaseStudies';
import Metrics from './components/Metrics';
import ArticleModal from './components/ArticleModal';
import AIAssistant from './components/AIAssistant';
import MethodsView from './components/MethodsView';
import CaseStudiesView from './components/CaseStudiesView';
import TeamView from './components/TeamView';
import ServiceDetailView from './components/ServiceDetailView';
import { Insight, Service } from './types';

export type View = 'home' | 'methods' | 'case-studies' | 'team' | 'service-detail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedArticle, setSelectedArticle] = useState<Insight | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateAndScroll = (view: View, sectionId?: string) => {
    if (currentView !== view) {
      setCurrentView(view);
      // Wait for the DOM to render the new view before scrolling
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setCurrentView('service-detail');
  };

  const handleCtaClick = useCallback((label: string) => {
    console.log(`[Analytics] CTA Clicked: ${label}`);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'methods':
        return <MethodsView onGoBack={() => navigateAndScroll('home')} onGoToContact={() => navigateAndScroll('home', 'contact')} />;
      case 'case-studies':
        return <CaseStudiesView onGoBack={() => navigateAndScroll('home')} />;
      case 'team':
        return <TeamView onGoBack={() => navigateAndScroll('home')} />;
      case 'service-detail':
        if (!selectedService) return null; // Should not happen
        return (
          <ServiceDetailView 
            service={selectedService} 
            onGoBack={() => navigateAndScroll('home', 'services')}
            onCtaClick={() => navigateAndScroll('home', 'contact')}
          />
        );
      default:
        return (
          <>
            <Hero 
              onCtaClick={(label) => {
                handleCtaClick(label);
                navigateAndScroll('home', 'contact');
              }} 
              onLearnMore={() => navigateAndScroll('home', 'about')}
            />
            <About onCtaClick={() => navigateAndScroll('team')} />
            <Metrics />
            <Services 
              onCtaClick={handleServiceClick} 
              onViewMethods={() => navigateAndScroll('methods')}
            />
            <CaseStudies onViewAll={() => navigateAndScroll('case-studies')} />
            <Insights onOpenArticle={setSelectedArticle} />
            <Testimonials />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="relative overflow-x-hidden font-sans text-gray-800">
      <Navbar 
        onCtaClick={() => navigateAndScroll('home', 'contact')} 
        onNavigate={navigateAndScroll} 
        currentView={currentView} 
      />
      
      <main>
        {renderContent()}
      </main>

      <Footer />

      {/* Modals */}
      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />

      <AIAssistant />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[60] bg-gold text-deepBlue w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
};

export default App;
