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

const ProblemSolutionSection = () => {
  const problems = [
    'Development cycles taking months instead of days',
    'Skilled developers spending time on repetitive tasks',
    'Teams struggling to keep pace with AI innovation',
  ];

  const solutions = [
    'Build enterprise software without writing code',
    'Transform developers into AI orchestrators',
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
          The Challenge:{' '}
          <Box
            component="span"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
            }}
          >
            Traditional Development is Too Slow
          </Box>
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          While competitors embrace AI-Native development, traditional coding creates bottlenecks.
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
          title="Current Challenges"
          items={problems}
          variant="problem"
        />
        <ContentCard
          icon="✨"
          title="AI-Native Solution"
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
          Transform Your Team
        </CTAButton>
      </Box>
    </Section>
  );
};

export default ProblemSolutionSection; 