'use client';

import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import CaseStudiesView from './CaseStudiesView';

interface CaseStudiesClientProps {
  onGoBack: () => void;
}

const CaseStudiesClient: React.FC<CaseStudiesClientProps> = ({ onGoBack }) => {
  const searchParams = useSearchParams();
  const focusId = searchParams.get('focus');

  return <CaseStudiesView onGoBack={onGoBack} focusId={focusId} />;
};

export default CaseStudiesClient;
