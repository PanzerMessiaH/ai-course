'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '@/components/shared/Section';
import CTAButton from '@/components/shared/CTAButton';

const CTASection = () => {
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
          Ready to Transform Your Team?
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
            mb: 6,
          }}
        >
          Join the next cohort and lead your organization&apos;s AI transformation
        </Typography>
      </Box>

      {/* CTA Buttons */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <CTAButton
          variant="primary"
          size="large"
          href="mailto:training@accso.com?subject=Agentic%20Coding%20Bootcamp%20Enrollment"
          sx={{
            mr: { xs: 0, sm: 3 },
            mb: { xs: 3, sm: 0 },
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
            bgcolor: 'rgba(255, 255, 255, 0.15)',
            borderColor: 'rgba(255, 255, 255, 0.6)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.25)',
              borderColor: 'rgba(255, 255, 255, 0.8)',
            },
          }}
        >
          Get More Information
        </CTAButton>
      </Box>

      {/* Simple Contact Info */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
          }}
        >
          Questions? Contact us at{' '}
          <Box
            component="a"
            href="mailto:training@accso.com"
            sx={{
              color: 'secondary.main',
              textDecoration: 'none',
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            training@accso.com
          </Box>
        </Typography>
      </Box>
    </Section>
  );
};

export default CTASection; 