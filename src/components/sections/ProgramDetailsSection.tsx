'use client';

import { useState } from 'react';
import { Box, Typography, Card, CardContent, Collapse, IconButton } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Section, CTAButton } from '../shared';

interface DisclosureContentProps {
  title: string;
  activities: string[];
  outcome: {
    title: string;
    description: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

const DisclosureContent: React.FC<DisclosureContentProps> = ({
  title,
  activities,
  outcome,
  isOpen,
  onToggle,
}) => (
  <Card
    sx={{
      mb: 3,
      overflow: 'visible',
      border: '2px solid',
      borderColor: isOpen ? 'secondary.main' : 'divider',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        borderColor: 'secondary.main',
        boxShadow: '0 4px 12px rgba(0, 203, 117, 0.15)',
      },
    }}
  >
    {/* Disclosure Header */}
    <Box
      onClick={onToggle}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 3,
        cursor: 'pointer',
        bgcolor: isOpen ? 'rgba(0, 203, 117, 0.05)' : 'transparent',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          bgcolor: 'rgba(0, 203, 117, 0.05)',
        },
      }}
    >
      <Typography
        variant="h5"
        component="h3"
        sx={{
          fontWeight: 600,
          color: isOpen ? 'secondary.main' : 'text.primary',
          transition: 'color 0.3s ease',
        }}
      >
        {title}
      </Typography>
      <IconButton
        sx={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          color: isOpen ? 'secondary.main' : 'text.secondary',
        }}
      >
        <ExpandMore />
      </IconButton>
    </Box>

    {/* Disclosure Body */}
    <Collapse in={isOpen} timeout={300}>
      <CardContent sx={{ pt: 0, pb: 3 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
          }}
        >
          {/* Activities Card */}
          <Card
            variant="outlined"
            sx={{
              border: '1px solid rgba(0, 203, 117, 0.2)',
              bgcolor: 'rgba(0, 203, 117, 0.02)',
            }}
          >
            <CardContent>
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                  '& li': {
                    position: 'relative',
                    pl: 3,
                    mb: 2,
                    color: 'text.primary',
                    lineHeight: 1.6,
                    '&:before': {
                      content: '"✓"',
                      position: 'absolute',
                      left: 0,
                      color: 'secondary.main',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                    },
                    '&:last-child': {
                      mb: 0,
                    },
                  },
                }}
              >
                {activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Outcome Card */}
          <Card
            variant="outlined"
            sx={{
              border: '1px solid rgba(0, 203, 117, 0.3)',
              bgcolor: 'rgba(0, 203, 117, 0.05)',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: 'secondary.main',
                }}
              >
                {outcome.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.6,
                }}
              >
                {outcome.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </CardContent>
    </Collapse>
  </Card>
);

const ProgramDetailsSection = () => {
  const [openDisclosure, setOpenDisclosure] = useState<number | null>(0); // First item open by default

  const programDays = [
    {
      title: 'Day 1: AI-Native Architecture',
      activities: [
        'Shift from manual coding to AI-driven orchestration',
        'Master enterprise-grade AI tool configuration',
        'Design scalable AI-first system architectures',
      ],
      outcome: {
        title: 'Day 1 Outcome',
        description: 'Understand how to integrate AI tools into existing workflows and plan AI-Native architectures.',
      },
    },
    {
      title: 'Day 2: Agentic Development',
      activities: [
        'Use AI agents for autonomous code generation and testing',
        'Transform specs into actionable plans',
        'Build functional prototypes using AI tools',
      ],
      outcome: {
        title: 'Day 2 Outcome',
        description: 'Build and deploy a complete enterprise application using AI tools and orchestration.',
      },
    },
    {
      title: 'Day 3: Team Integration',
      activities: [
        'Define new AI-focused roles and responsibilities',
        'Implement AI adoption strategies',
        'Create sustainable AI-Native development processes',
      ],
      outcome: {
        title: 'Day 3 Outcome',
        description: 'Leave with a complete roadmap for transforming your development organization.',
      },
    },
  ];

  const handleDisclosureToggle = (index: number) => {
    setOpenDisclosure(openDisclosure === index ? null : index);
  };

  return (
    <Section background="secondary" spacing="large" id="program-details">
      {/* Section Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 600,
            mb: 1.5,
            lineHeight: 1.1,
          }}
        >
          The{' '}
          <Box
            component="span"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
            }}
          >
            Agentic Coding Bootcamp
          </Box>
          :{' '}Your Complete Transformation Program
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.4,
            mb: 2,
          }}
        >
          A comprehensive 2-3 day intensive that transforms your entire development approach
        </Typography>
      </Box>

      {/* Program Disclosure Content */}
      <Box sx={{ mb: 4 }}>
        {programDays.map((day, index) => (
          <DisclosureContent
            key={index}
            title={day.title}
            activities={day.activities}
            outcome={day.outcome}
            isOpen={openDisclosure === index}
            onToggle={() => handleDisclosureToggle(index)}
          />
        ))}
      </Box>


    </Section>
  );
};

export default ProgramDetailsSection; 