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
      background: 'linear-gradient(135deg, rgba(0, 203, 117, 0.15) 0%, rgba(45, 250, 135, 0.1) 50%, rgba(255, 255, 255, 0.1) 100%)',
      backdropFilter: 'blur(15px)',
      border: '2px solid rgba(0, 203, 117, 0.3)',
      borderRadius: 3,
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 8px 32px rgba(0, 203, 117, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, rgba(0, 203, 117, 0.8) 0%, rgba(45, 250, 135, 0.8) 100%)',
        zIndex: 1,
      },
      '&:hover': {
        borderColor: 'secondary.main',
        boxShadow: '0 12px 40px rgba(0, 203, 117, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        transform: 'translateY(-6px) scale(1.02)',
        background: 'linear-gradient(135deg, rgba(0, 203, 117, 0.2) 0%, rgba(45, 250, 135, 0.15) 50%, rgba(255, 255, 255, 0.15) 100%)',
      },
    }}
  >
    <CardContent sx={{ p: 5, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
      {/* Card Header */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
        <Box
          sx={{
            fontSize: '2.5rem',
            mr: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 72,
            height: 72,
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(0, 203, 117, 0.3) 0%, rgba(45, 250, 135, 0.2) 100%)',
            border: '2px solid rgba(0, 203, 117, 0.4)',
            boxShadow: '0 4px 16px rgba(0, 203, 117, 0.3)',
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              inset: -2,
              borderRadius: '22px',
              padding: '2px',
              background: 'linear-gradient(135deg, rgba(0, 203, 117, 0.5), rgba(45, 250, 135, 0.5))',
              mask: 'linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)',
              maskComposite: 'exclude',
            },
          }}
        >
          {icon}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.3,
              mb: 1,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            {title}
          </Typography>
        </Box>
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
            pl: 4,
            mb: 3,
            color: 'rgba(255, 255, 255, 0.95)',
            lineHeight: 1.7,
            fontSize: '1.1rem',
            fontWeight: 500,
            padding: '12px 16px 12px 40px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.2s ease',
            '&:before': {
              content: '"✓"',
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'secondary.main',
              fontWeight: 'bold',
              fontSize: '1.3rem',
              textShadow: '0 0 8px rgba(0, 203, 117, 0.6)',
            },
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(0, 203, 117, 0.3)',
              transform: 'translateX(4px)',
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
      title: "What You'll Achieve",
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
      background="gradient" 
      spacing="large"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(0, 203, 117, 0.15) 0%, rgba(0, 203, 117, 0.08) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '65%',
          right: '12%',
          width: '400px',
          height: '400px',
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
          top: '30%',
          right: '18%',
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(0, 203, 117, 0.12) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          left: '20%',
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(45, 250, 135, 0.1) 0%, transparent 50%)',
          borderRadius: '50%',
          filter: 'blur(70px)',
          zIndex: 1,
        }}
      />

      {/* Enrollment CTA Button */}
      <Box sx={{ 
        textAlign: 'center', 
        mb: 6,
        position: 'relative',
        zIndex: 2,
      }}>
        <CTAButton
          variant="primary"
          size="large"
          href="/register"
          icon="→"
          ariaLabel="Join waitlist for the AI-Native Agentic Programming Bootcamp"
        >
          Join Waitlist
        </CTAButton>
      </Box>

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
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 600,
            mb: 3,
            lineHeight: 1.2,
            color: 'white',
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
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Core skills and deliverables from the intensive training
        </Typography>
      </Box>

      {/* Main Benefits Grid */}
      <Box sx={{ 
        mb: 8,
        position: 'relative',
        zIndex: 2,
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
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          mt: 8,
          mb: 6,
        }}
      >
        {/* Partnership Authority Statement */}
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: 'white',
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          Delivered by ACCSO & Dominic Systems
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
            fontWeight: 500,
          }}
        >
          Combined expertise in AI-Native development training and enterprise Microsoft Dynamics 365 
          with AI/Copilot integration. Leading organizations trust us to deliver transformational 
          learning experiences that drive real business outcomes.
        </Typography>

        {/* Next Cohort Information + Urgency */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(0, 203, 117, 0.2) 0%, rgba(45, 250, 135, 0.15) 100%)',
            border: '1px solid rgba(0, 203, 117, 0.4)',
            borderRadius: 3,
            p: 4,
            mb: 4,
            maxWidth: '600px',
            mx: 'auto',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography
            variant="h5"
            component="h4"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: 'white',
            }}
          >
            3-Day AI-Native Programming Bootcamp
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 2,
              fontSize: '1.125rem',
            }}
          >
            Limited spaces available for our intensive 3-day AI-Native Programming Bootcamp
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(45, 250, 135, 0.9)',
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
            size="large"
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

        {/* Clear Waitlist Benefits */}
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '500px',
            mx: 'auto',
            lineHeight: 1.6,
            fontSize: '1rem',
          }}
        >
          We&apos;ll contact you with enrollment details when the next cohort is scheduled.
        </Typography>
      </Box>
    </Section>
  );
};

export default BenefitsSection; 