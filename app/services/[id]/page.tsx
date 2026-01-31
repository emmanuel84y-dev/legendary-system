
'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import ServiceDetailView from '../../../components/ServiceDetailView';
import { SERVICES } from '../../../data';

export default function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const service = SERVICES.find(s => s.id === resolvedParams.id);

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center">Service not found</div>;
  }

  return (
    <ServiceDetailView 
      service={service} 
      onGoBack={() => router.push('/#services')}
      onCtaClick={() => router.push('/#contact')}
    />
  );
}
