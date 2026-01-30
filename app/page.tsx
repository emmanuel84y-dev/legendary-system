
'use client';

import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Insights from '../components/Insights';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import CaseStudies from '../components/CaseStudies';
import Metrics from '../components/Metrics';
import ArticleModal from '../components/ArticleModal';
import { Insight, Service } from '../types';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<Insight | null>(null);
  const router = useRouter();

  const handleCtaClick = (label: string) => {
    console.log(`[Analytics] CTA Clicked: ${label}`);
    // Smooth scroll to contact
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServiceClick = (service: Service) => {
    router.push(`/services/${service.id}`);
  };

  const navigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero 
        onCtaClick={handleCtaClick} 
        onLearnMore={() => navigateToSection('about')}
      />
      <About onCtaClick={() => router.push('/team')} />
      <Metrics />
      <Services 
        onCtaClick={handleServiceClick} 
        onViewMethods={() => router.push('/methods')}
      />
      <CaseStudies onViewAll={() => router.push('/case-studies')} />
      <Insights onOpenArticle={setSelectedArticle} />
      <Testimonials />
      <Contact />

      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </>
  );
}
