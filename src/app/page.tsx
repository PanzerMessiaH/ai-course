'use client';

import HeroSection from '@/components/sections/HeroSection';
import AuthoritySection from '@/components/sections/AuthoritySection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import ProgramDetailsSection from '@/components/sections/ProgramDetailsSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AuthoritySection />
      <ProblemSolutionSection />
      <ProgramDetailsSection />
      <BenefitsSection />
      <SocialProofSection />
      <CTASection />
    </main>
  );
}
