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

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'What You&apos;ll Master',
      items: [
        'AI-Native system architecture design',
        'Autonomous code generation and optimization',
        'Enterprise-grade AI tool integration',
        'Team transformation leadership',
      ],
    },
    {
      icon: '📦',
      title: 'What You&apos;ll Take Home',
      items: [
        'Complete enterprise application built during training',
        'AI-Native development methodology framework',
        'Customized implementation roadmap',
        '90-day post-training support and consultation',
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
          What You&apos;ll{' '}
          <Box
            component="span"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
            }}
          >
            Achieve
          </Box>
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
          Core skills and deliverables from the intensive training
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

      {/* CTA */}
      <Box sx={{ textAlign: 'center' }}>
        <CTAButton
          variant="outline"
          size="medium"
          href="#enrollment"
        >
          Enroll Your Team
        </CTAButton>
      </Box>
    </Section>
  );
};

export default BenefitsSection; 