'use client';

import { Box, Typography } from '@mui/material';
import { Section } from '../shared';

const AuthoritySection = () => {

  return (
    <Section 
      background="gradient" 
      spacing="large"
      ariaLabel="Why choose ACCSO - company authority and credentials"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 203, 117, 0.15) 0%, rgba(0, 203, 117, 0.08) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(45, 250, 135, 0.18) 0%, rgba(45, 250, 135, 0.06) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: 1,
        },
      }}
          >
      {/* Additional Background Glow Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          right: '20%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(0, 203, 117, 0.12) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(45, 250, 135, 0.1) 0%, transparent 50%)',
          borderRadius: '50%',
          filter: 'blur(70px)',
          zIndex: 1,
        }}
      />

      {/* Section Header */}
      <Box sx={{ 
        textAlign: 'center', 
        mb: 8,
        position: 'relative',
        zIndex: 2,
      }}>
        <Typography
          variant="h2"
          component="h2"
          id="authority-heading"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 600,
            mb: 3,
            lineHeight: 1.2,
            color: 'white',
          }}
        >
          Why ACCSO & Dominic Systems
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          <strong>ACCSO</strong> is a leading technology partner with 2,000+ delivered projects since 2010. Operating across five global locations with 350+ professionals, we specialize in enterprise digital transformation and AI-native development.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          <strong>Dominic Systems</strong> brings 13+ years of Microsoft Dynamics 365 and AI expertise, specializing in government and enterprise solutions. As early adopters of Microsoft Copilot, we lead organizations through conversational AI transformation and productivity optimization.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
            fontWeight: 500,
            fontSize: '1.1rem',
          }}
        >
          Combined expertise: Enterprise-proven AI development training + Microsoft ecosystem mastery
        </Typography>
      </Box>

      {/* Feature Cards - REMOVED PER USER REQUEST */}
      {/* <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4,
          mb: 8,
        }}
        role="region"
        aria-labelledby="authority-heading"
      >
        <FeatureCard
          icon="🏆"
          title="Enterprise-Proven Methods"
          description="Advanced methodologies for AI-first systems that enable rapid deployment of enterprise solutions."
        />
        <FeatureCard
          icon="⚡"
          title="Industry-Leading Techniques"
          description="Comprehensive framework for Agentic Programming adoption in enterprise environments."
        />
      </Box> */}

      {/* Statistics Grid - REMOVED PER USER REQUEST */}
      {/* <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 4,
          mb: 6,
          p: 4,
          borderRadius: 2,
          background: 'linear-gradient(135deg, rgba(0, 203, 117, 0.1) 0%, rgba(45, 250, 135, 0.1) 100%)',
          border: '1px solid rgba(0, 203, 117, 0.2)',
        }}
        role="region"
        aria-label="Training program statistics"
      >
        <StatItem number="2-3" label="Days Training" />
        <StatItem number="90%" label="Faster Development" />
        <StatItem number="24/7" label="Expert Support" />
      </Box> */}

      {/* CTA - REMOVED PER USER REQUEST */}
      {/* <Box sx={{ textAlign: 'center' }}>
        <CTAButton
          variant="outline"
          size="large"
          href="/register"
          icon="→"
          ariaLabel="Get started today with AI-Native Agentic Programming training"
        >
          Get Started Today
        </CTAButton>
      </Box> */}
    </Section>
  );
};

export default AuthoritySection; 