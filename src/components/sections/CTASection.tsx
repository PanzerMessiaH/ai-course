'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { Section, CTAButton } from '../shared';

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <Box sx={{ textAlign: 'center' }}>
    <Typography
      variant="h3"
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

const GuaranteeBox = () => (
  <Box
    sx={{
      p: 4,
      borderRadius: 3,
      background: 'linear-gradient(135deg, rgba(0, 203, 117, 0.1) 0%, rgba(45, 250, 135, 0.1) 100%)',
      border: '2px solid rgba(0, 203, 117, 0.2)',
      textAlign: 'center',
      mb: 4,
    }}
  >
    <Typography
      variant="h6"
      sx={{
        color: 'text.primary',
        fontWeight: 600,
        lineHeight: 1.6,
        '&:before': {
          content: '"✅ "',
          color: 'secondary.main',
          fontSize: '1.2rem',
        },
      }}
    >
      100% Satisfaction Guarantee - If your team doesn&apos;t achieve measurable improvement in development velocity within 30 days, we&apos;ll provide additional consultation at no cost.
    </Typography>
  </Box>
);

const UrgencyIndicator = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      p: 3,
      borderRadius: 2,
      background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.1) 0%, rgba(255, 140, 0, 0.1) 100%)',
      border: '1px solid rgba(255, 165, 0, 0.3)',
      mb: 3,
    }}
  >
    <Box sx={{ fontSize: '1.5rem' }}>⏰</Box>
    <Typography
      variant="body1"
      sx={{
        color: 'text.primary',
        fontWeight: 600,
      }}
    >
      Limited seats available - Next cohort starts in 3 weeks
    </Typography>
  </Box>
);

const SocialProofIndicator = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      p: 3,
      borderRadius: 2,
      background: 'linear-gradient(135deg, rgba(0, 203, 117, 0.1) 0%, rgba(45, 250, 135, 0.1) 100%)',
      border: '1px solid rgba(0, 203, 117, 0.2)',
    }}
  >
    <Typography
      variant="h4"
      component="span"
      sx={{
        fontWeight: 700,
        color: 'secondary.main',
      }}
    >
      12
    </Typography>
    <Typography
      variant="body1"
      sx={{
        color: 'text.primary',
        fontWeight: 500,
      }}
    >
      enterprise teams have enrolled this month
    </Typography>
  </Box>
);

const CTASection = () => {
  const investmentStats = [
    { number: '2-3', label: 'Intensive Days' },
    { number: '90%', label: 'Faster Development' },
    { number: '100%', label: 'Hands-On Learning' },
    { number: '∞', label: 'Future Potential' },
  ];

  const cohortDetails = [
    'Format: Intensive 2-3 day on-site or virtual program',
    'Team Size: 3-15 participants per cohort',
    'Location: Your office or our training facility',
    'Support: 90-day post-training consultation included',
    'Materials: All tools, frameworks, and resources provided',
  ];

  return (
    <Section background="gradient" spacing="large" id="enrollment">
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
            color: 'white',
          }}
        >
          Transform Your Team Into{' '}
          <Box
            component="span"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
            }}
          >
            AI-Native Leaders
          </Box>
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Join the next cohort and lead your organization&apos;s AI transformation
        </Typography>
      </Box>

      {/* Main Content Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 6,
          mb: 8,
        }}
      >
        {/* Investment & Value Card */}
        <Card
          sx={{
            border: '2px solid rgba(255, 255, 255, 0.2)',
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 4,
                color: 'text.primary',
              }}
            >
              Investment & Value
            </Typography>

            {/* Stats Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 3,
                mb: 4,
              }}
            >
              {investmentStats.map((stat, index) => (
                <StatItem key={index} number={stat.number} label={stat.label} />
              ))}
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: 'text.primary',
                lineHeight: 1.6,
              }}
            >
              The investment in this program pays for itself within the first month through increased development velocity and reduced technical debt.
            </Typography>
          </CardContent>
        </Card>

        {/* Cohort Details Card */}
        <Card
          sx={{
            border: '2px solid rgba(255, 255, 255, 0.2)',
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 4,
                color: 'text.primary',
              }}
            >
              Next Cohort Details
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                p: 0,
                m: 0,
                '& li': {
                  position: 'relative',
                  pl: 3,
                  mb: 2,
                  color: 'text.primary',
                  lineHeight: 1.6,
                  '&:before': {
                    content: '"•"',
                    position: 'absolute',
                    left: 0,
                    color: 'secondary.main',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                  },
                  '&:last-child': {
                    mb: 0,
                  },
                },
              }}
            >
              {cohortDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* CTA Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Box sx={{ mb: 4 }}>
          <CTAButton
            variant="primary"
            size="large"
            href="mailto:training@accso.com?subject=Agentic%20Coding%20Bootcamp%20Enrollment"
            sx={{
              mr: { xs: 0, sm: 3 },
              mb: { xs: 3, sm: 0 },
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': {
                  boxShadow: '0 0 0 0 rgba(0, 203, 117, 0.7)',
                },
                '70%': {
                  boxShadow: '0 0 0 10px rgba(0, 203, 117, 0)',
                },
                '100%': {
                  boxShadow: '0 0 0 0 rgba(0, 203, 117, 0)',
                },
              },
            }}
            icon="→"
          >
            Enroll Your Team Now
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="large"
            href="mailto:info@accso.com?subject=Agentic%20Coding%20Bootcamp%20Information"
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
            }}
          >
            Request More Information
          </CTAButton>
        </Box>

        <GuaranteeBox />
        <UrgencyIndicator />
        <SocialProofIndicator />
      </Box>
    </Section>
  );
};

export default CTASection; 