'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { Section, CTAButton } from '../shared';

interface ContentCardProps {
  icon: string;
  title: string;
  items: string[];
  variant?: 'problem' | 'solution';
}

const ContentCard: React.FC<ContentCardProps> = ({ icon, title, items, variant = 'problem' }) => (
  <Card
    sx={{
      height: '100%',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: variant === 'problem' 
        ? '2px solid rgba(255, 130, 40, 0.2)' 
        : '2px solid rgba(0, 203, 117, 0.2)',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: variant === 'problem'
          ? '0 8px 24px rgba(255, 130, 40, 0.15)'
          : '0 8px 24px rgba(0, 203, 117, 0.15)',
      },
    }}
  >
    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Card Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box
          sx={{
            fontSize: '2.5rem',
            mr: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 600,
            color: variant === 'problem' ? '#ff8228' : 'secondary.main',
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Card Content */}
      <Box component="ul" sx={{ 
        listStyle: 'none', 
        p: 0, 
        m: 0,
        flex: 1,
        '& li': {
          position: 'relative',
          pl: 3,
          mb: 2,
          color: 'text.primary',
          lineHeight: 1.6,
          '&:before': {
            content: variant === 'problem' ? '"•"' : '"✓"',
            position: 'absolute',
            left: 0,
            color: variant === 'problem' ? '#ff8228' : 'secondary.main',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          },
          '&:last-child': {
            mb: 0,
          },
        },
      }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Box>
    </CardContent>
  </Card>
);

const UrgencyIndicator = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      mt: 3,
      p: 2,
      borderRadius: 2,
      background: 'linear-gradient(135deg, rgba(255, 130, 40, 0.1) 0%, rgba(255, 130, 40, 0.2) 100%)',
      border: '1px solid rgba(255, 130, 40, 0.3)',
    }}
  >
    <Box sx={{ fontSize: '1.5rem' }}>🔥</Box>
    <Typography
      variant="body1"
      sx={{
        fontWeight: 600,
        color: '#ff8228',
      }}
    >
      Limited seats available - Next cohort starting soon
    </Typography>
  </Box>
);

const ProblemSolutionSection = () => {
  const problems = [
    'Development cycles taking months instead of days',
    'Technical debt accumulating faster than you can resolve it',
    'Skilled developers spending time on repetitive coding tasks',
    'Difficulty integrating AI tools into existing workflows',
    'Inability to rapidly prototype and validate ideas',
    'Teams struggling to keep pace with AI innovation',
  ];

  const solutions = [
    'Build enterprise-grade software without writing code',
    'Eliminate technical debt with AI-generated, optimized solutions',
    'Transform developers into AI orchestrators and solution architects',
    'Seamlessly integrate AI tools into agile workflows',
    'Deploy scalable prototypes in days, not months',
    'Future-proof your team with cutting-edge AI skills',
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
          The Enterprise Development Crisis:{' '}
          <Box
            component="span"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
            }}
          >
            Manual Coding is Holding You Back
          </Box>
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          While your competitors embrace AI-Native development, traditional coding creates bottlenecks that cost time, money, and market opportunities.
        </Typography>
      </Box>

      {/* Problem/Solution Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
          gap: 4,
          mb: 8,
        }}
      >
        <ContentCard
          icon="⚠️"
          title="The Problems You Face Daily"
          items={problems}
          variant="problem"
        />
        <ContentCard
          icon="✨"
          title="The AI-Native Solution"
          items={solutions}
          variant="solution"
        />
      </Box>

      {/* CTA Section */}
      <Box sx={{ textAlign: 'center' }}>
        <CTAButton
          variant="primary"
          size="large"
          href="#enrollment"
          icon="→"
        >
          Transform Your Team Today
        </CTAButton>
        <UrgencyIndicator />
      </Box>
    </Section>
  );
};

export default ProblemSolutionSection; 