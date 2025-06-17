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
        {icon}
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
      title: 'Proven Enterprise Leadership',
      description: 'Advanced methodologies for AI-first systems that enable rapid deployment of enterprise-grade solutions at scale.',
    },
    {
      icon: '🚀',
      title: 'Successful Implementations',
      description: 'Leading organizations trust us to transform their development teams using our proven approach to AI-Native engineering.',
    },
    {
      icon: '⚡',
      title: 'Industry-Leading Techniques',
      description: "Through successful enterprise implementations, we've developed the definitive framework for Agentic Programming adoption.",
    },
  ];

  const stats = [
    { number: '500+', label: 'Engineers Trained' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '90%', label: 'Faster Development' },
    { number: '95%', label: 'Client Satisfaction' },
  ];

  return (
    <Section background="secondary" spacing="large">
      {/* Section Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 600,
            mb: 3,
            lineHeight: 1.2,
          }}
        >
          Why{' '}
          <Box
            component="span"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
            }}
          >
            ACCSO
          </Box>{' '}
          Leads Enterprise AI Transformation
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          The trusted authority in AI-Native development for forward-thinking enterprises
        </Typography>
      </Box>

      {/* Feature Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 8,
        }}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Box>

      {/* Statistics Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { 
            xs: 'repeat(2, 1fr)', 
            sm: 'repeat(4, 1fr)' 
          },
          gap: 4,
          mb: 6,
          p: 4,
          borderRadius: 2,
          background: 'linear-gradient(135deg, rgba(0, 203, 117, 0.1) 0%, rgba(45, 250, 135, 0.1) 100%)',
          border: '1px solid rgba(0, 203, 117, 0.2)',
        }}
      >
        {stats.map((stat, index) => (
          <StatItem key={index} number={stat.number} label={stat.label} />
        ))}
      </Box>

      {/* CTA */}
      <Box sx={{ textAlign: 'center' }}>
        <CTAButton
          variant="secondary"
          size="large"
          href="#program-details"
        >
          Learn About Our Methodology
        </CTAButton>
      </Box>
    </Section>
  );
};

export default AuthoritySection; 