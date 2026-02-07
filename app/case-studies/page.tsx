
'use client';

import React from 'react';
import CaseStudiesView from '../../components/CaseStudiesView';
import { useRouter } from 'next/navigation';

export default function CaseStudiesPage() {
  const router = useRouter();
  return <CaseStudiesView onGoBack={() => router.back()} />;
}
