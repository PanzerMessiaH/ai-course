'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { Section, CTAButton } from '../shared';

interface BenefitCardProps {
  icon: string;
  title: string;
  items: string[];
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, items }) => (
  <Card
    sx={{
      height: '100%',
      border: '2px solid',
      borderColor: 'divider',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        borderColor: 'secondary.main',
        boxShadow: '0 8px 24px rgba(0, 203, 117, 0.15)',
        transform: 'translateY(-4px)',
      },
    }}
  >
    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Card Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box
          sx={{
            fontSize: '2rem',
            mr: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 56,
            height: 56,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(0, 203, 117, 0.1) 0%, rgba(45, 250, 135, 0.1) 100%)',
            border: '1px solid rgba(0, 203, 117, 0.2)',
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Card Content */}
      <Box
        component="ul"
        sx={{
          listStyle: 'none',
          p: 0,
          m: 0,
          flexGrow: 1,
          '& li': {
            position: 'relative',
            pl: 3,
            mb: 2,
            color: 'text.primary',
            lineHeight: 1.6,
            '&:before': {
              content: '"✓"',
              position: 'absolute',
              left: 0,
              color: 'secondary.main',
              fontWeight: 'bold',
              fontSize: '1.1rem',
            },
            '&:last-child': {
              mb: 0,
            },
          },
        }}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Box>
    </CardContent>
  </Card>
);

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card
    sx={{
      height: '100%',
      border: '1px solid',
      borderColor: 'divider',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        borderColor: 'secondary.main',
        boxShadow: '0 6px 20px rgba(0, 203, 117, 0.12)',
        transform: 'translateY(-2px)',
      },
    }}
  >
    <CardContent sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          fontSize: '2.5rem',
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h6"
        component="h4"
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
          flexGrow: 1,
        }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const WhoShouldAttendSection = () => {
  const attendees = [
    {
      icon: '👨‍💻',
      title: 'Software Engineers & Technical Leads',
      description: 'Build AI-native systems and lead technical transformation',
    },
    {
      icon: '👥',
      title: 'Cross-Functional Teams (3-5 members)',
      description: 'Transition entire teams to AI-first workflows',
    },
    {
      icon: '📊',
      title: 'Engineering Managers',
      description: 'Integrate AI strategies into team processes',
    },
  ];

  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        component="h3"
        sx={{
          fontWeight: 600,
          mb: 4,
          textAlign: 'center',
        }}
      >
        Who Should Attend?
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
        }}
      >
        {attendees.map((attendee, index) => (
          <FeatureCard
            key={index}
            icon={attendee.icon}
            title={attendee.title}
            description={attendee.description}
          />
        ))}
      </Box>
    </Box>
  );
};

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: '⚡',
      title: 'Immediate Implementation',
      description: 'Start using AI-Native techniques on day one with hands-on application building',
    },
    {
      icon: '🏆',
      title: 'Proven Methodology',
      description: 'Based on successful enterprise implementations across 50+ organizations',
    },
    {
      icon: '🔄',
      title: 'Ongoing Support',
      description: '90-day consultation period ensures successful integration into your workflows',
    },
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        component="h3"
        sx={{
          fontWeight: 600,
          mb: 4,
          textAlign: 'center',
        }}
      >
        Why This Program Delivers Guaranteed Results
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
        }}
      >
        {guarantees.map((guarantee, index) => (
          <FeatureCard
            key={index}
            icon={guarantee.icon}
            title={guarantee.title}
            description={guarantee.description}
          />
        ))}
      </Box>
    </Box>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Core Competencies Mastered',
      items: [
        'AI-Native system architecture design',
        'Autonomous code generation and optimization',
        'Enterprise-grade AI tool integration',
        'Requirements engineering with AI assistance',
        'Scalable prototype development',
        'Team transformation leadership',
        'Future-proof AI adoption strategies',
      ],
    },
    {
      icon: '📦',
      title: 'Deliverables & Assets',
      items: [
        'Complete enterprise application built during training',
        'AI-Native development methodology framework',
        'Customized implementation roadmap for your organization',
        'Access to exclusive AI tool configurations',
        '90-day post-training support and consultation',
        'Ongoing community access and updates',
        'Professional certification in Agentic Programming',
      ],
    },
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
          Complete{' '}
          <Box
            component="span"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
            }}
          >
            Learning Outcomes
          </Box>{' '}
          & Deliverables
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
          Exactly what your team will master and the assets you&apos;ll take home
        </Typography>
      </Box>

      {/* Main Benefits Grid */}
      <Box sx={{ mb: 8 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 6,
          }}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              items={benefit.items}
            />
          ))}
        </Box>
      </Box>

      {/* Who Should Attend */}
      <WhoShouldAttendSection />

      {/* CTA */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <CTAButton
          variant="secondary"
          size="medium"
          href="#enrollment"
        >
          See Full Program Details
        </CTAButton>
      </Box>

      {/* Guarantee Section */}
      <GuaranteeSection />
    </Section>
  );
};

export default BenefitsSection; 