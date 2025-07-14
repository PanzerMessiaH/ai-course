'use client';

import { Box, Typography, Card } from '@mui/material';
import { Section, CTAButton } from '../shared';

const AccsoLogo = () => (
  <Box
    component="svg"
    viewBox="0 0 280.63 63.9"
    role="img"
    aria-label="ACCSO Company Logo"
    sx={{
      width: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
      height: { xs: '32px', sm: '36px', md: '41px', lg: '45px' },
      display: 'block',
      '& .cls-1': {
        fill: '#2dfa87',
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
      width: { xs: '220px', sm: '250px', md: '280px', lg: '320px' },
      height: { xs: '50px', sm: '57px', md: '64px', lg: '73px' },
      display: 'block',
      objectFit: 'contain',
      filter: 'brightness(1.1) contrast(1.05)',
    }}
  />
);

const AuthorityIndicator = ({ children }: { children: string }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
    <Box
      sx={{
        color: 'secondary.main',
        fontSize: '1.2rem',
        fontWeight: 'bold',
      }}
    >
      ✓
    </Box>
    <Typography variant="body1" sx={{ fontWeight: 500 }}>
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
        color: 'secondary.main',
        mb: 0.5,
      }}
    >
      {number}
    </Typography>
    <Typography 
      variant="body2" 
      sx={{ 
        color: 'rgba(255, 255, 255, 0.85)',
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
      background="gradient"
      spacing="large"
      ariaLabel="Hero section with course introduction and enrollment options"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 203, 117, 0.25) 0%, rgba(0, 203, 117, 0.12) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(45, 250, 135, 0.22) 0%, rgba(45, 250, 135, 0.08) 40%, transparent 70%)',
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
          top: '10%',
          right: '25%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 203, 117, 0.15) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '20%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(45, 250, 135, 0.12) 0%, transparent 50%)',
          borderRadius: '50%',
          filter: 'blur(70px)',
          zIndex: 1,
        }}
      />

      {/* Dominic Systems Logo - Top Left Corner */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 16, sm: 20, md: 32, lg: 40 },
          left: { xs: 16, sm: 20, md: 32, lg: 40 },
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <DominicSystemsLogo />
      </Box>

      {/* ACCSO Logo - Top Right Corner */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 16, sm: 20, md: 32, lg: 40 },
          right: { xs: 16, sm: 20, md: 32, lg: 40 },
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AccsoLogo />
      </Box>

      {/* Centered Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          maxWidth: { xs: '100%', sm: '800px', md: '1000px', lg: '1200px', xl: '1400px' },
          mx: 'auto',
          px: { xs: 2, md: 4, lg: 6 },
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4.5rem', xl: '5rem' },
              fontWeight: 700,
              lineHeight: 1.1,
              mb: 3,
              color: 'white',
              maxWidth: { xs: '100%', md: '900px', lg: '1100px' },
              mx: 'auto',
            }}
          >
            Transform your Enterprise Team into AI-Native Engineers in 3 Days
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem', lg: '1.4rem' },
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              maxWidth: { xs: '100%', md: '800px', lg: '900px' },
              mx: 'auto',
            }}
          >
            In this course, your team will stop programming the old way. No more hand-writing code, specs, or tests. Instead, every Scrum role—from developer to designer to product owner—will work through intelligent agents like ChatGPT, Claude, Gemini, and DeepSeek.<br/><br/>
            Using the open-source Cursor Memory Bank, your team collaborates with agents to plan, build, and reflect. Personal knowledge is captured, shared, and transformed into collective intelligence. The result? Software development that accelerates with every sprint—and a team that thinks, works, and learns in a fundamentally new way.
          </Typography>
        </Box>

        {/* Authority Indicators - Centered */}
        <Box sx={{ 
          mb: 4, 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 0, md: 4, lg: 6 },
          maxWidth: { md: '800px', lg: '1000px' },
          width: '100%',
        }}>
          <AuthorityIndicator>Agents Write the Code. You Guide the Intelligence.</AuthorityIndicator>
          <AuthorityIndicator>Team Knowledge Compounds via Shared Memory</AuthorityIndicator>
          <AuthorityIndicator>Full-Role Transformation Across the Scrum Team</AuthorityIndicator>
          <AuthorityIndicator>Backed by PKM & KM Theory for Organizational Learning</AuthorityIndicator>
        </Box>

        {/* CTA Buttons - Centered */}
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, mb: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
          <CTAButton
            variant="primary"
            size="large"
            href="/register"
            icon="→"
            ariaLabel="Join waitlist for the AI-Native Agentic Programming Bootcamp"
          >
            Join Waitlist
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="large"
            href="#program-details"
            ariaLabel="View detailed program information and curriculum"
          >
            View Program Details
          </CTAButton>
        </Box>

        {/* Social Proof - Bottom */}
        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 2,
            p: { xs: 3, md: 4, lg: 5 },
            maxWidth: { xs: '100%', md: '700px', lg: '800px', xl: '900px' },
            width: '100%',
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 2, md: 4, lg: 6 }, 
            mb: 3, 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <StatCard number="3" label="Days Training" />
            <StatCard number="100%" label="Hands-On Learning" />
            <StatCard number="90%" label="Faster Development" />
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            &ldquo;We don&apos;t write code anymore. We guide the agents who do. This changed how we deliver, think, and work—completely.&rdquo;
          </Typography>
        </Card>
      </Box>
    </Section>
  );
};

export default HeroSection; 