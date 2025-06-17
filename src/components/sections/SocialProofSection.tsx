'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { Section } from '../shared';

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <Box sx={{ textAlign: 'center' }}>
    <Typography
      variant="h4"
      component="span"
      sx={{
        fontWeight: 700,
        color: 'secondary.main',
        display: 'block',
        mb: 1,
      }}
    >
      {number}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        color: 'text.secondary',
        fontSize: '0.875rem',
        fontWeight: 500,
      }}
    >
      {label}
    </Typography>
  </Box>
);

interface TestimonialCardProps {
  company: string;
  team: string;
  testimonial: string;
  stats: StatItemProps[];
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  company,
  team,
  testimonial,
  stats,
}) => (
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
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            mb: 1,
            color: 'text.primary',
          }}
        >
          {company}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontWeight: 500,
          }}
        >
          {team}
        </Typography>
      </Box>

      {/* Testimonial Content */}
      <Box sx={{ mb: 4, flexGrow: 1 }}>
        <Typography
          variant="body1"
          sx={{
            color: 'text.primary',
            lineHeight: 1.6,
            fontStyle: 'italic',
            position: 'relative',
            '&:before': {
              content: '"""',
              position: 'absolute',
              left: -16,
              top: -8,
              fontSize: '2rem',
              color: 'secondary.main',
              fontFamily: 'serif',
            },
            '&:after': {
              content: '"""',
              fontSize: '2rem',
              color: 'secondary.main',
              fontFamily: 'serif',
              marginLeft: '4px',
            },
          }}
        >
          {testimonial}
        </Typography>
      </Box>

      {/* Stats Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 3,
          p: 3,
          borderRadius: 2,
          background: 'linear-gradient(135deg, rgba(0, 203, 117, 0.05) 0%, rgba(45, 250, 135, 0.05) 100%)',
          border: '1px solid rgba(0, 203, 117, 0.1)',
        }}
      >
        {stats.map((stat, index) => (
          <StatItem key={index} number={stat.number} label={stat.label} />
        ))}
      </Box>
    </CardContent>
  </Card>
);

const SocialProofSection = () => {
  const testimonials = [
    {
      company: 'Fortune 500 Technology Company',
      team: 'Global Software Development Team',
      testimonial: 'Our development velocity increased by 90% within the first month. We\'re now deploying enterprise solutions that previously took 6 months in just 2 weeks.',
      stats: [
        { number: '90%', label: 'Faster Development' },
        { number: '75%', label: 'Cost Reduction' },
      ],
    },
    {
      company: 'Leading Financial Services Firm',
      team: 'Enterprise Architecture Team',
      testimonial: 'The AI-Native approach eliminated our technical debt backlog and enabled us to focus on innovation instead of maintenance. Our team now leads the industry in AI adoption.',
      stats: [
        { number: '100%', label: 'Debt Elimination' },
        { number: '3x', label: 'Innovation Rate' },
      ],
    },
    {
      company: 'Global Manufacturing Corporation',
      team: 'Digital Transformation Team',
      testimonial: 'ACCSO\'s methodology transformed our entire approach to software development. We\'ve become the AI-Native leaders in our industry.',
      stats: [
        { number: '85%', label: 'Team Satisfaction' },
        { number: '5x', label: 'Prototype Speed' },
      ],
    },
  ];

  return (
    <Section spacing="large">
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
          <Box
            component="span"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
            }}
          >
            Proven Results
          </Box>{' '}
          from Enterprise Leaders
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
          See how leading organizations have transformed their development teams
        </Typography>
      </Box>

      {/* Testimonials Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' },
          gap: 6,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            company={testimonial.company}
            team={testimonial.team}
            testimonial={testimonial.testimonial}
            stats={testimonial.stats}
          />
        ))}
      </Box>
    </Section>
  );
};

export default SocialProofSection; 