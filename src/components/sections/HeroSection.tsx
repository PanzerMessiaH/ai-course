'use client';

import { Box, Typography, Card } from '@mui/material';
import { Section, CTAButton } from '../shared';
import { componentStyles } from '../../theme/styleUtils';

const AccsoLogo = () => (
  <Box
    component="svg"
    viewBox="0 0 280.63 63.9"
    role="img"
    aria-label="ACCSO Company Logo"
    sx={{
      width: { xs: '120px', sm: '140px', md: '160px', lg: '180px' },
      height: { xs: '27px', sm: '32px', md: '36px', lg: '41px' },
      display: 'block',
      '& .cls-1': {
        fill: 'var(--neon-green)',
      },
    }}
  >
    <title>ACCSO Logo</title>
    <path className="cls-1" d="M63.9,63.9H0V0h63.9v63.9ZM2.24,61.66h59.42V2.24H2.24v59.42Z"/>
    <path className="cls-1" d="M120.27,18.64l-4.54,15.56h11.56l-4.36-15.56-1.21-4.78h-.18l-1.27,4.78ZM129.71,42.73h-16.47l-2.54,8.84h-10.78l15.68-45.4h12.17l15.86,45.4h-11.38l-2.54-8.84Z"/>
    <g>
      <path className="cls-1" d="M173.24,21.3c-2.18-.85-5.02-1.39-8.23-1.39-7.51,0-9.93,2.91-9.93,11.87,0,9.44,2.54,12.35,10.05,12.35,3.15,0,5.93-.67,8.23-1.63l1.03,7.57c-2.91,1.33-6.84,2.24-10.53,2.24-12.53,0-18.71-6.78-18.71-20.58,0-12.95,5.93-20.16,19.37-20.16,3.39,0,7.2.79,9.75,1.69l-1.03,8.05Z"/>
      <path className="cls-1" d="M205.81,21.3c-2.18-.85-5.02-1.39-8.23-1.39-7.51,0-9.93,2.91-9.93,11.87,0,9.44,2.54,12.35,10.05,12.35,3.15,0,5.93-.67,8.23-1.63l1.03,7.57c-2.91,1.33-6.84,2.24-10.53,2.24-12.53,0-18.71-6.78-18.71-20.58,0-12.95,5.93-20.16,19.37-20.16,3.39,0,7.2.79,9.75,1.69l-1.03,8.05Z"/>
      <path className="cls-1" d="M224.51,52.29c-4.9,0-9.32-1.09-12.95-2.97l1.21-8.05c3.69,1.94,7.51,3.03,11.68,3.03,4.42,0,6.36-1.51,6.36-3.99,0-5.87-19.07-2.97-19.07-16.47,0-6.66,4.42-12.23,15.01-12.23,4.06,0,8.48.73,11.75,2.12l-1.09,7.81c-3.63-1.09-7.02-1.76-10.23-1.76-5.02,0-6.36,1.63-6.36,3.57,0,5.81,19.07,2.66,19.07,16.28,0,7.75-5.75,12.65-15.38,12.65"/>
      <path className="cls-1" d="M262.23,19.91c-6.3,0-8.54,2.54-8.54,12.05s2.24,12.05,8.54,12.05,8.41-2.66,8.41-12.05-2.06-12.05-8.41-12.05M262.23,52.29c-12.96,0-18.46-6.72-18.46-20.34s5.39-20.28,18.46-20.28,18.4,6.6,18.4,20.28-5.33,20.34-18.4,20.34"/>
    </g>
    <g>
      <polygon className="cls-1" points="92.16 20.18 41.5 20.18 44.2 12.33 94.86 12.33 92.16 20.18"/>
      <polygon className="cls-1" points="86.76 35.87 36.09 35.87 38.8 28.03 89.46 28.03 86.76 35.87"/>
      <polygon className="cls-1" points="81.36 51.57 30.7 51.57 33.4 43.72 84.06 43.72 81.36 51.57"/>
    </g>
  </Box>
);

const DominicSystemsLogo = () => (
  <Box
    component="img"
    src="/dominic-systems-logo.svg"
    alt="Dominic Systems Limited Logo"
    role="img"
    aria-label="Dominic Systems Limited - CRM Integration and ERP Solutions Partner"
    sx={{
      width: { xs: '180px', sm: '200px', md: '240px', lg: '280px' },
      height: { xs: '41px', sm: '46px', md: '55px', lg: '64px' },
      display: 'block',
      objectFit: 'contain',
      filter: 'brightness(1.2) contrast(1.1)',
    }}
  />
);

const AuthorityIndicator = ({ children }: { children: string }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
    <Box
      sx={{
        color: 'var(--neon-green)',
        fontSize: '1.2rem',
        fontWeight: 'bold',
      }}
    >
      ✓
    </Box>
    <Typography variant="body1" sx={{ 
      fontWeight: 500,
      color: 'var(--banner-text-color)'
    }}>
      {children}
    </Typography>
  </Box>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <Box sx={{ textAlign: 'center', flex: 1 }}>
    <Typography
      variant="h4"
      component="div"
      sx={{
        fontWeight: 700,
        color: 'var(--neon-green)',
        mb: 0.5,
      }}
    >
      {number}
    </Typography>
    <Typography 
      variant="body2" 
      sx={{ 
        color: 'var(--banner-text-color)',
        opacity: 0.85,
        fontWeight: 500,
        fontSize: { xs: '0.875rem', md: '0.9rem' }
      }}
    >
      {label}
    </Typography>
  </Box>
);

const HeroSection = () => {
  return (
    <Section
      ariaLabel="Hero section with course introduction and enrollment options"
      sx={{
        ...componentStyles.banner.background,
        backgroundImage: 'url(https://res.cloudinary.com/dr7lejrnw/image/upload/c_scale,w_auto,dpr_auto,f_auto,q_auto/v1735479200/image2_yocmis.png)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        // Subtle overlay for text readability
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 60, 60, 0.15)',
          zIndex: 0,
        },
      }}
    >
      {/* Dominic Systems Logo - Top Left */}
      <Box sx={{
        position: 'absolute',
        top: { xs: 16, sm: 20, md: 24, lg: 32 },
        left: { xs: 16, sm: 20, md: 24, lg: 32 },
        zIndex: 10,
      }}>
        <DominicSystemsLogo />
      </Box>

      {/* ACCSO Logo - Top Right */}
      <Box sx={{
        position: 'absolute',
        top: { xs: 16, sm: 20, md: 24, lg: 32 },
        right: { xs: 16, sm: 20, md: 24, lg: 32 },
        zIndex: 10,
      }}>
        <AccsoLogo />
      </Box>

      {/* Main Content - Centered */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 3, sm: 4, md: 6 },
          position: 'relative',
          zIndex: 1,
          marginTop: { xs: '100px', md: '80px' }, // Account for logos on mobile
        }}
      >
        {/* Main Heading */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            mb: 3,
            color: 'var(--neon-green)',
            maxWidth: '1000px',
            mx: 'auto',
          }}
        >
          Transform your Enterprise Team into AI-Native Engineers in 3 Days
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: 'var(--banner-text-color)',
            mb: 4,
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          AI Native software development with Accso & Dominic Systems Accelerate Your Future
        </Typography>

        {/* Body Text */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              lineHeight: 1.2,
              color: 'var(--banner-text-color)',
              mb: 2,
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            In this course, your team will stop programming the old way. No more hand-writing code, specs, or tests. Instead, every Scrum role—from developer to designer to product owner—will work through intelligent agents like ChatGPT, Claude, Gemini, and DeepSeek.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              lineHeight: 1.2,
              color: 'var(--banner-text-color)',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            Using the open-source Cursor Memory Bank, your team collaborates with agents to plan, build, and reflect. Personal knowledge is captured, shared, and transformed into collective intelligence. The result? Software development that accelerates with every sprint—and a team that thinks, works, and learns in a fundamentally new way.
          </Typography>
        </Box>

        {/* Authority Indicators */}
        <Box sx={{ 
          mb: 4, 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 0, md: 4, lg: 6 },
          textAlign: { xs: 'left', md: 'center' },
        }}>
          <AuthorityIndicator>Led by industry professionals with 15+ years experience</AuthorityIndicator>
          <AuthorityIndicator>Hands-on learning with real enterprise scenarios</AuthorityIndicator>
          <AuthorityIndicator>Proven methodologies from successful AI transformations</AuthorityIndicator>
        </Box>

        {/* CTA Button */}
        <Box sx={{ mb: 5 }}>
          <CTAButton variant="primary" href="/register">
            Register for 3-Day Intensive Course
          </CTAButton>
        </Box>

        {/* Statistics */}
        <Card sx={{
          ...componentStyles.card,
          background: 'rgba(0, 60, 60, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(45, 250, 135, 0.3)',
          p: { xs: 3, md: 4 },
          maxWidth: '600px',
          width: '100%',
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
            <StatCard number="200+" label="Enterprise Teams Transformed" />
            <StatCard number="85%" label="Productivity Increase" />
            <StatCard number="3 Days" label="To AI-Native Workflow" />
          </Box>
        </Card>
      </Box>
    </Section>
  );
};

export default HeroSection; 