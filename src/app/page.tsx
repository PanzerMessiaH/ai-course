'use client';

import { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import StructuredData from '@/components/shared/StructuredData';

// Dynamic imports for code splitting
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
  loading: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
      <CircularProgress />
    </Box>
  ),
});

const AuthoritySection = dynamic(() => import('@/components/sections/AuthoritySection'), {
  loading: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
      <CircularProgress />
    </Box>
  ),
});

const ProblemSolutionSection = dynamic(() => import('@/components/sections/ProblemSolutionSection'), {
  loading: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
      <CircularProgress />
    </Box>
  ),
});

const ProgramDetailsSection = dynamic(() => import('@/components/sections/ProgramDetailsSection'), {
  loading: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
      <CircularProgress />
    </Box>
  ),
});

const BenefitsSection = dynamic(() => import('@/components/sections/BenefitsSection'), {
  loading: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
      <CircularProgress />
    </Box>
  ),
});

const CTASection = dynamic(() => import('@/components/sections/CTASection'), {
  loading: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
      <CircularProgress />
    </Box>
  ),
});

export default function Home() {
  return (
    <>
      <StructuredData />
      {/* Skip Navigation Link for Accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '6px',
          background: '#000',
          color: '#fff',
          padding: '8px',
          textDecoration: 'none',
          zIndex: 1000,
          fontSize: '14px',
          borderRadius: '4px',
          transform: 'translateY(-100%)',
          transition: 'transform 0.3s'
        }}
        onFocus={(e) => e.target.style.transform = 'translateY(0)'}
        onBlur={(e) => e.target.style.transform = 'translateY(-100%)'}
      >
        Skip to main content
      </a>
      
      <main id="main-content" role="main" aria-label="AI-Native Agentic Programming Bootcamp">
        <HeroSection />
        <Suspense fallback={<Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}><CircularProgress /></Box>}>
          <AuthoritySection />
          <ProblemSolutionSection />
          <ProgramDetailsSection />
          <BenefitsSection />
          <CTASection />
        </Suspense>
      </main>
    </>
  );
}
