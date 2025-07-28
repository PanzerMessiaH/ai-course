'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { GpsFixed } from '@mui/icons-material';
import { Section, CTAButton } from '../shared';

interface BenefitCardProps {
  icon: React.ComponentType<{ sx?: object }>;
  title: string;
  items: string[];
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: IconComponent, title, items }) => (
  <Card
    sx={{
      height: '100%',
      backgroundColor: 'var(--card-background)',
      border: '1px solid var(--card-border)',
      borderRadius: '0 20px 0 20px',
      position: 'relative',
      overflow: 'hidden',
      transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        borderColor: 'var(--neon-green-on-white)',
        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
        transform: 'translateY(-2px)',
      },
    }}
  >
    <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Card Header */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
        <Box
          sx={{
            mr: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 60,
            borderRadius: '0 12px 0 12px',
            backgroundColor: 'var(--card-background)',
            border: '2px solid var(--neon-green-on-white)',
            color: 'var(--neon-green-on-white)',
          }}
        >
          <IconComponent
            sx={{
              fontSize: '2rem',
              color: 'var(--neon-green-on-white)',
            }}
          />
        </Box>
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontWeight: 600,
            color: 'var(--heading-text-color)',
            lineHeight: 1.3,
            fontSize: { xs: '1.5rem', md: '1.75rem' },
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Benefit Items */}
      <Box sx={{ flex: 1 }}>
        <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
          {items.map((item, index) => (
            <Box
              component="li"
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: 2,
                '&:last-child': { mb: 0 },
              }}
            >
              <Box
                sx={{
                  color: 'var(--neon-green-on-white)',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  mr: 2,
                  mt: 0.25,
                  flexShrink: 0,
                }}
              >
                ✓
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-color)',
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const BenefitsSection = () => {
  const benefits = [
    {
      icon: GpsFixed,
      title: "In 3 Days, your Team will:",
      items: [
        'Transform your development approach with systematic problem-solving and innovative thinking capabilities',
        'Master efficient development techniques and integrate cutting-edge tools for enhanced productivity',
        'Lead AI-native team collaboration and implement quality practices that scale across organizations',
        'Build sustainable development practices and prepare your organization for future technology trends',
      ],
    },
  ];

  return (
    <Section 
      sx={{
        backgroundColor: 'var(--page-background)',
        position: 'relative',
      }}
    >
      {/* Section Content */}
      <Box sx={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: { xs: 3, sm: 4, md: 5, lg: 6 },
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Enrollment CTA Button */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 6,
        }}>
          <CTAButton
            variant="primary"
            href="/register"
          >
            Join Waitlist
          </CTAButton>
        </Box>

        {/* Section Header */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 8,
        }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 600,
              mb: 3,
              lineHeight: 1.2,
              color: 'var(--heading-text-color)',
            }}
          >
            What You&apos;ll{' '}
            <Box
              component="span"
              sx={{
                color: 'var(--neon-green-on-white)',
                fontWeight: 700,
              }}
            >
              Achieve
            </Box>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: 'var(--text-color)',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.2rem' },
            }}
          >
            Core skills and deliverables from the intensive training
          </Typography>
        </Box>

        {/* Main Benefits Grid */}
        <Box sx={{ 
          mb: 8,
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Box
            sx={{
              maxWidth: { xs: '100%', md: '800px', lg: '900px' },
              width: '100%',
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

        {/* Authority-Based Conversion Section */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 8,
            mb: 6,
          }}
        >
          {/* Next Cohort Information */}
          <Box
            sx={{
              backgroundColor: 'var(--card-background)',
              border: '1px solid var(--neon-green-on-white)',
              borderRadius: '0 20px 0 20px',
              p: { xs: 3, md: 4 },
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            <Typography
              variant="h4"
              component="h4"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'var(--heading-text-color)',
                fontSize: { xs: '1.5rem', md: '1.75rem' },
              }}
            >
              Ready to Claim your Seat?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-color)',
                mb: 2,
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}
            >
              Three days. One career‑defining leap. Join the waitlist to secure your spot
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'var(--neon-green-on-white)',
                fontWeight: 600,
                fontSize: '1rem',
              }}
            >
              Join the waitlist to secure your spot
            </Typography>
          </Box>

          {/* Join Waitlist CTA */}
          <Box sx={{ mb: 4 }}>
            <CTAButton
              variant="primary"
              href="/register"
              sx={{
                fontSize: '1.25rem',
                py: 2,
                px: 4,
                minWidth: '280px',
              }}
            >
              Join Waitlist
            </CTAButton>
          </Box>

          {/* Waitlist Benefits */}
          <Typography
            variant="body2"
            sx={{
              color: 'var(--text-color)',
              opacity: 0.8,
              maxWidth: '500px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: '1rem',
            }}
          >
            We&apos;ll contact you with enrollment details when the next cohort is scheduled.
          </Typography>
        </Box>
      </Box>
    </Section>
  );
};

export default BenefitsSection; 