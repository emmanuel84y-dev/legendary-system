
'use client';

import React, { Suspense } from 'react';
import CaseStudiesClient from '../../components/CaseStudiesClient';
import { useRouter } from 'next/navigation';

function CaseStudiesContent() {
  const router = useRouter();
  return <CaseStudiesClient onGoBack={() => router.back()} />;
}

export default function CaseStudiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 pb-24 flex items-center justify-center"><p className="text-gray-600">Loading case studies...</p></div>}>
      <CaseStudiesContent />
    </Suspense>
  );
}
