'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { Handshake, Rocket } from '@mui/icons-material';
import { Section } from '../shared';

interface ContentCardProps {
  icon: React.ComponentType<{ sx?: object }>;
  title: string;
  items: string[];
  variant?: 'problem' | 'solution';
}

const ContentCard: React.FC<ContentCardProps> = ({ icon: IconComponent, title, items, variant = 'problem' }) => (
  <Card
    sx={{
      backgroundColor: 'var(--card-background)',
      border: variant === 'problem'
        ? '1px solid var(--orange)'
        : '1px solid var(--neon-green-on-white)',
      borderRadius: '0 20px 0 20px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        borderColor: variant === 'problem' ? 'var(--orange)' : 'var(--neon-green-on-white)',
        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
        transform: 'translateY(-2px)',
      },
    }}
  >
    <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Icon Badge */}
      <Box
        sx={{
          backgroundColor: variant === 'problem' ? 'var(--orange)' : 'var(--neon-green-on-white)',
          borderRadius: '0 12px 0 12px',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
          width: '60px',
          height: '60px',
          mx: 'auto',
          border: variant === 'problem'
            ? '2px solid var(--orange)'
            : '2px solid var(--neon-green-on-white)',
        }}
      >
        <IconComponent
          sx={{
            fontSize: '1.5rem',
            color: 'white',
          }}
        />
      </Box>

      {/* Card Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 600,
            color: variant === 'problem' ? 'var(--orange)' : 'var(--neon-green-on-white)',
            fontSize: { xs: '1.5rem', md: '1.75rem' },
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
      }}>
        {items.map((item, index) => (
          <Box
            component="li"
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              mb: 2,
              '&:last-child': { mb: 0 },
            }}
          >
            <Box
              sx={{
                color: variant === 'problem' ? 'var(--orange)' : 'var(--neon-green-on-white)',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                mr: 2,
                mt: 0.25,
                flexShrink: 0,
              }}
            >
              {variant === 'problem' ? '•' : '✓'}
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-color)',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              {item}
            </Typography>
          </Box>
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
    <Section 
      sx={{
        backgroundColor: 'var(--page-background)',
        position: 'relative',
      }}
    >
      {/* Section Content */}
      <Box sx={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: { xs: 3, sm: 4, md: 5, lg: 6 },
        position: 'relative',
        zIndex: 1,
      }}>
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
              maxWidth: '1000px',
              mx: 'auto',
              color: 'var(--heading-text-color)',
            }}
          >
            Build Software with AI Partners
          </Typography>
          
          <Box sx={{ maxWidth: '700px', mx: 'auto' }}>
            <Typography
              variant="body1"
              component="p"
              sx={{
                color: 'var(--text-color)',
                lineHeight: 1.7,
                mb: 3,
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                fontWeight: 400,
              }}
            >
              Learn to work with AI agents that handle coding while you focus on strategy and innovation.
            </Typography>
            
            <Typography
              variant="body1"
              component="p"
              sx={{
                color: 'var(--text-color)',
                opacity: 0.9,
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
            gap: { xs: 3, md: 4 },
            mb: 4,
          }}
        >
          <ContentCard
            icon={Handshake}
            title="How You Work Now"
            items={problems}
            variant="problem"
          />
          <ContentCard
            icon={Rocket}
            title="What You Gain"
            items={solutions}
            variant="solution"
          />
        </Box>
      </Box>
    </Section>
  );
};

export default ProblemSolutionSection; 