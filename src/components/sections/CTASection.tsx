'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { ArrowForward, PersonAdd } from '@mui/icons-material';
import Link from 'next/link';
import { Section } from '../shared';

const CTASection = () => {
  return (
    <Section 
      sx={{ 
        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
          Ready to Transform Your Career?
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Join thousands of professionals who have mastered AI-Native development
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            component={Link}
            href="/register"
            variant="contained"
            size="large"
            startIcon={<PersonAdd />}
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: 'grey.100',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Register Now
          </Button>
          
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              borderColor: 'white',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                borderColor: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </Section>
  );
};

export default CTASection; 