'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { Section } from '../shared';

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
    "AI agents write your code, tests, and documentation",
    "You focus on strategy, review, and guiding the work",
    "Every team role—developer, designer, tester—works with AI partners",
    "Build faster with intelligent collaboration, not manual coding"
  ];

  const solutions = [
    "Personal AI partnerships that learn your preferences and context",
    "Team knowledge that connects and grows with every project",
    "A living memory system that makes each sprint smarter than the last",
    "Faster delivery through accumulated organizational intelligence"
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
            mb: 4,
            lineHeight: 1.2,
            maxWidth: { xs: '100%', md: '900px', lg: '1000px' },
            mx: 'auto',
            color: 'white',
          }}
        >
          Build Software with AI Partners
        </Typography>
        
        <Box sx={{ maxWidth: { xs: '100%', md: '700px' }, mx: 'auto' }}>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.7,
              mb: 3,
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              fontWeight: 400,
            }}
          >
            Learn to work with AI agents that handle coding while you focus on strategy and innovation.
          </Typography>
          
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              fontWeight: 500,
              fontStyle: 'italic',
            }}
          >
            This isn&apos;t about building AI apps. It&apos;s about building everything else—with AI.
          </Typography>
        </Box>
      </Box>

      {/* Problem/Solution Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
          gap: 4,
          mb: 4,
        }}
      >
        <ContentCard
          icon="🤝"
          title="How You Work Now"
          items={problems}
          variant="problem"
        />
        <ContentCard
          icon="🚀"
          title="What You Gain"
          items={solutions}
          variant="solution"
        />
      </Box>
    </Section>
  );
};

export default ProblemSolutionSection; 