'use client';

import HeroSection from '@/components/sections/HeroSection';
import AuthoritySection from '@/components/sections/AuthoritySection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import ProgramDetailsSection from '@/components/sections/ProgramDetailsSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import CTASection from '@/components/sections/CTASection';
import StructuredData from '@/components/shared/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <HeroSection />
      <AuthoritySection />
      <ProblemSolutionSection />
      <ProgramDetailsSection />
      <BenefitsSection />
      <CTASection />
    </>
  );
}
