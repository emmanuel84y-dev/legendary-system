'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import TeamView from '../../components/TeamView';

export default function TeamPage() {
  const router = useRouter();

  return (
    <TeamView onGoBack={() => router.back()} />
  );
}
