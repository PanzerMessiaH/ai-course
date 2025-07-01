'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { Section, CTAButton } from '../shared';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card
    sx={{
      height: '100%',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
      },
    }}
  >
    <CardContent sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          fontSize: '3rem',
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box component="span" role="img" aria-label={title}>
          {icon}
        </Box>
      </Box>
      <Typography
        variant="h5"
        component="h3"
        sx={{
          fontWeight: 600,
          mb: 2,
          color: 'text.primary',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <Box sx={{ textAlign: 'center' }}>
    <Typography
      variant="h3"
      component="div"
      sx={{
        fontWeight: 700,
        color: 'secondary.main',
        mb: 1,
        fontSize: { xs: '2rem', md: '3rem' },
      }}
    >
      {number}
    </Typography>
    <Typography
      variant="body1"
      sx={{
        color: 'text.secondary',
        fontWeight: 500,
      }}
    >
      {label}
    </Typography>
  </Box>
);

const AuthoritySection = () => {
  const features = [
    {
      icon: '🏆',
      title: 'Enterprise-Proven Methods',
      description: 'Advanced methodologies for AI-first systems that enable rapid deployment of enterprise solutions.',
    },
    {
      icon: '⚡',
      title: 'Industry-Leading Techniques',
      description: "Comprehensive framework for Agentic Programming adoption in enterprise environments.",
    },
  ];

  const stats = [
    { number: '2-3', label: 'Days Training' },
    { number: '90%', label: 'Faster Development' },
    { number: '24/7', label: 'Expert Support' },
  ];

  return (
    <Section 
      background="secondary" 
      spacing="large"
      ariaLabel="Why choose ACCSO - company authority and credentials"
    >
      {/* Section Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          id="authority-heading"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 600,
            mb: 3,
            lineHeight: 1.2,
          }}
        >
          Why ACCSO & Dominic Systems
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'text.secondary',
            maxWidth: '900px',
            mx: 'auto',
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          Accso Cape Town, part of Accso – Accelerated Solutions, is a leading full-service technology partner specializing in tailored business solutions through software engineering and consulting. With a strong reputation for quality and innovation, we support clients across a wide range of industries and geographies, delivering services that enable sustainable digital transformation.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: 'text.secondary',
            maxWidth: '900px',
            mx: 'auto',
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          Since its founding in 2010, Accso has successfully delivered more than 2,000 projects. Today, the company operates across five strategic locations—Cape Town, Darmstadt, Frankfurt, Cologne, and Munich—and is powered by a team of over 350 dedicated professionals committed to excellence, agility, and long-term client success.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: 'text.secondary',
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Combined expertise in AI-Native development training and enterprise system integration
        </Typography>
      </Box>

      {/* Feature Cards */}
      <Box
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
      </Box>

      {/* Statistics Grid */}
      <Box
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
      </Box>

      {/* CTA */}
      <Box sx={{ textAlign: 'center' }}>
        <CTAButton
          variant="outline"
          size="large"
          href="/register"
          icon="→"
          ariaLabel="Get started today with AI-Native Agentic Programming training"
        >
          Get Started Today
        </CTAButton>
      </Box>
    </Section>
  );
};

export default AuthoritySection; 