
'use client';

import React from 'react';
import MethodsView from '../../components/MethodsView';
import { useRouter } from 'next/navigation';

export default function MethodsPage() {
  const router = useRouter();
  return <MethodsView onGoBack={() => router.push('/')} onGoToContact={() => router.push('/#contact')} />;
}
