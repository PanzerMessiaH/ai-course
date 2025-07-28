'use client';

import { Box, Typography } from '@mui/material';
import { Section } from '../shared';

const AuthoritySection = () => {
  return (
    <Section 
      spacing="small"
      ariaLabel="Why choose ACCSO and Dominic Systems - company authority and credentials"
      sx={{
        backgroundColor: 'var(--page-background)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section Content */}
      <Box sx={{ 
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: { xs: 2, sm: 3, md: 4 },
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Section Header */}
        <Typography
          variant="h2"
          component="h2"
          id="authority-heading"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 600,
            mb: 3,
            lineHeight: 1.2,
            color: 'var(--heading-text-color)',
            textAlign: 'center',
          }}
        >
          Why ACCSO & Dominic Systems
        </Typography>

        {/* ACCSO Description */}
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: 'var(--text-color)',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
            mb: 3,
            fontSize: { xs: '1.1rem', md: '1.2rem' },
            textAlign: 'center',
          }}
        >
          <Box component="strong" sx={{ color: 'var(--neon-green-on-white)' }}>Accso</Box> delivers transformation at scale. Since 2010, we&apos;ve completed over 2,000 projects with a team of more than 350 specialists from five global hubs. We specialise in enterprise digital transformation and AI-native development that drives your competitiveness.
        </Typography>

        {/* Dominic Systems Description */}
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: 'var(--text-color)',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
            mb: 4,
            fontSize: { xs: '1.1rem', md: '1.2rem' },
            textAlign: 'center',
          }}
        >
          <Box component="strong" sx={{ color: 'var(--neon-green-on-white)' }}>Dominic Systems</Box> brings 13+ years of Microsoft Dynamics 365 and AI expertise, specializing in government and enterprise solutions. As early adopters of Microsoft Copilot, we lead organizations through conversational AI transformation and productivity optimization.
        </Typography>

        {/* Combined Expertise Highlight */}
        <Box
          sx={{
            backgroundColor: 'var(--card-background)',
            border: '1px solid var(--card-border)',
            borderRadius: '0 20px 0 20px',
            p: { xs: 3, md: 4 },
            textAlign: 'center',
            maxWidth: '700px',
            mx: 'auto',
            mt: 4,
          }}
        >
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: 'var(--text-color)',
              lineHeight: 1.6,
              fontWeight: 600,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
            }}
          >
            Combined expertise: <Box component="span" sx={{ color: 'var(--neon-green-on-white)' }}>Enterprise-proven AI development training</Box> + <Box component="span" sx={{ color: 'var(--neon-green-on-white)' }}>Microsoft ecosystem mastery</Box>
          </Typography>
        </Box>
      </Box>
    </Section>
  );
};

export default AuthoritySection; 