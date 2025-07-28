'use client';

import { Box, Typography, Container, Divider } from '@mui/material';
import { Section } from '../shared';
import Image from 'next/image';

const Footer = () => {
  return (
    <Section 
      spacing="medium"
      sx={{
        backgroundColor: 'var(--dark-green)',
        background: 'linear-gradient(135deg, var(--dark-green) 0%, #1a4d3a 50%, var(--dark-green) 100%)',
        color: 'white',
        position: 'relative',
        mt: 0,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(105, 255, 148, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(105, 255, 148, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 4,
          justifyContent: 'space-between'
        }}>
          {/* Company Logos Section */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            gap: { xs: 3, sm: 4 },
            justifyContent: { xs: 'center', md: 'flex-start' },
            flex: 1
          }}>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexDirection: 'column'
            }}>
              <Image 
                src="/accso-logo.svg" 
                alt="ACCSO Logo" 
                width={120} 
                height={40}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <Typography variant="caption" sx={{ color: 'var(--neon-green)', fontSize: '0.7rem' }}>
                2,000+ Projects Since 2010
              </Typography>
            </Box>
            
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexDirection: 'column'
            }}>
              <Image 
                src="/dominic-systems-logo.svg" 
                alt="Dominic Systems Logo" 
                width={120} 
                height={40}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <Typography variant="caption" sx={{ color: 'var(--neon-green)', fontSize: '0.7rem' }}>
                13+ Years Microsoft Expertise
              </Typography>
            </Box>
          </Box>

          {/* Course Information Section */}
          <Box sx={{ 
            textAlign: { xs: 'center', md: 'right' },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            flex: 1,
            padding: 3,
            borderRadius: '0 20px 0 20px',
            background: 'rgba(105, 255, 148, 0.08)',
            border: '1px solid rgba(105, 255, 148, 0.2)',
            position: 'relative',
            '&::before': {
              content: '"🚀"',
              position: 'absolute',
              top: -8,
              right: -8,
              fontSize: '1.5rem',
              opacity: 0.7,
            },
          }}>
            <Typography variant="h6" sx={{ 
              color: 'var(--neon-green)',
              fontWeight: 600,
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}>
              AI-Native Agentic Programming Bootcamp
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                🏗️ 3 Days Intensive Training Program
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                🌍 Available Online or In-Person | Global Access
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                🎯 Enterprise-Grade AI Development Skills
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: { xs: 'center', md: 'flex-end' },
              mt: 1,
              flexWrap: 'wrap'
            }}>
              <Typography 
                component="a"
                href="mailto:info@accso.com" 
                sx={{ 
                  color: 'var(--neon-green)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Contact ACCSO
              </Typography>
              <Typography 
                component="a"
                href="mailto:info@dominicsystems.com" 
                sx={{ 
                  color: 'var(--neon-green)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Contact Dominic Systems
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ 
          my: 4, 
          borderColor: 'rgba(255, 255, 255, 0.2)',
          opacity: 0.6
        }} />

        {/* Bottom Section */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          pb: 2
        }}>
          <Typography variant="body2" sx={{ 
            opacity: 0.8,
            textAlign: { xs: 'center', sm: 'left' }
          }}>
            © 2025 ACCSO & Dominic Systems. All rights reserved.
          </Typography>
          
          <Box sx={{ 
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', sm: 'flex-end' }
          }}>
            <Typography variant="body2" sx={{ 
              opacity: 0.8,
              fontSize: '0.75rem'
            }}>
              Enterprise AI Training • Microsoft Ecosystem • Global Delivery
            </Typography>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default Footer;
