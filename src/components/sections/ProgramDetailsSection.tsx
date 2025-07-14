'use client';

import { useState } from 'react';
import { Box, Typography, Card, CardContent, Collapse, IconButton, Button } from '@mui/material';
import { ExpandMore, ViewList, ViewModule } from '@mui/icons-material';
import { Section } from '../shared';
import { curriculumData, CurriculumModule as CurriculumModuleType } from '../../data/curriculum';
import CurriculumModule from './CurriculumModule';
import CourseProgressionVisual from '../shared/CourseProgressionVisual';
import DaySummaryCard from './DaySummaryCard';

interface DisclosureContentProps {
  title: string;
  modules: CurriculumModuleType[];
  outcome: {
    title: string;
    description: string;
  };
  isOpen: boolean;
  onToggle: () => void;
  openModules: Set<string>;
  onModuleToggle: (moduleId: string) => void;
}

const DisclosureContent: React.FC<DisclosureContentProps> = ({
  title,
  modules,
  outcome,
  isOpen,
  onToggle,
  openModules,
  onModuleToggle,
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
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
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
            gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
            gap: { xs: 3, md: 4 },
            alignItems: 'start',
          }}
        >
          {/* Modules Section */}
          <Box>
            <Typography
              variant="h6"
              component="h4"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: 'secondary.main',
              }}
            >
              Course Modules
            </Typography>
            
            {modules.map((module) => (
              <CurriculumModule
                key={module.id}
                module={module}
                isOpen={openModules.has(module.id)}
                onToggle={() => onModuleToggle(module.id)}
              />
            ))}
          </Box>

          {/* Outcome Text */}
          <Box
            sx={{
              position: { xs: 'static', lg: 'sticky' },
              top: { lg: 20 },
              height: 'fit-content',
              mt: 6,
            }}
          >
            <Typography
              variant="h6"
              component="h4"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'var(--heading-text-color)',
              }}
            >
              {outcome.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-color)',
                lineHeight: 1.6,
              }}
            >
              {outcome.description}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Collapse>
  </Card>
);

const ProgramDetailsSection = () => {
  const [viewMode, setViewMode] = useState<'summary' | 'detailed'>('summary');
  const [openDisclosure, setOpenDisclosure] = useState<number | null>(null);
  const [openModules, setOpenModules] = useState<Set<string>>(new Set());
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const handleDisclosureToggle = (index: number) => {
    setOpenDisclosure(openDisclosure === index ? null : index);
  };

  const handleModuleToggle = (moduleId: string) => {
    const newOpenModules = new Set(openModules);
    if (newOpenModules.has(moduleId)) {
      newOpenModules.delete(moduleId);
    } else {
      newOpenModules.add(moduleId);
    }
    setOpenModules(newOpenModules);
  };

  const handleCardToggle = (cardIndex: number) => {
    const newExpandedCards = new Set(expandedCards);
    if (newExpandedCards.has(cardIndex)) {
      newExpandedCards.delete(cardIndex);
    } else {
      newExpandedCards.add(cardIndex);
    }
    setExpandedCards(newExpandedCards);
  };

  const handleViewModeToggle = () => {
    if (viewMode === 'summary') {
      setViewMode('detailed');
      setOpenDisclosure(0); // Open first day by default
    } else {
      setViewMode('summary');
      setOpenDisclosure(null);
    }
  };

  // Use the comprehensive curriculum data with modules
  const programDays = curriculumData.map((day) => ({
    title: day.title,
    modules: day.modules,
    outcome: day.outcome,
  }));

  return (
    <Section background="secondary" spacing="large" id="program-details">
      {/* Section Header */}
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 600,
            mb: { xs: 1, md: 1.5 },
            lineHeight: 1.1,
            color: 'var(--heading-text-color)',
          }}
        >
          <Box
            component="span"
            sx={{
              color: 'var(--neon-green-on-white)',
              fontWeight: 700,
            }}
          >
            Agentic Programming
          </Box>
          {' '}Curriculum
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'var(--text-color)',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.4,
            mb: 3,
            fontSize: { xs: '1rem', md: '1.25rem' },
          }}
        >
          3-day intensive transformation: Individual skills → Advanced techniques → Team leadership
        </Typography>

        {/* View Mode Toggle */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Button
            onClick={handleViewModeToggle}
            startIcon={viewMode === 'summary' ? <ViewModule /> : <ViewList />}
            variant="outlined"
            sx={{
              color: 'secondary.main',
              borderColor: 'secondary.main',
              textTransform: 'none',
              fontWeight: 500,
              '&:hover': {
                borderColor: 'secondary.main',
                bgcolor: 'rgba(0, 203, 117, 0.08)',
              },
            }}
          >
            {viewMode === 'summary' ? 'Show Detailed Curriculum' : 'Show Overview'}
          </Button>
        </Box>
      </Box>

      {/* Learning Progression Visual */}
      <Box sx={{ 
        mb: 6, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            mb: 3,
            color: 'text.primary',
          }}
        >
          Your Learning Journey
        </Typography>
        <CourseProgressionVisual size="medium" showLabels={true} />
      </Box>

      {/* Curriculum Content - Summary or Detailed View */}
      <Box sx={{ mb: 4 }}>
        {viewMode === 'summary' ? (
          // Summary View - Day Summary Cards
          curriculumData.map((day, index) => (
            <DaySummaryCard
              key={day.id}
              day={day}
              dayNumber={index + 1}
              isExpanded={expandedCards.has(index)}
              onToggle={() => handleCardToggle(index)}
            />
          ))
        ) : (
          // Detailed View - Full Disclosure System
          programDays.map((day, index) => (
            <DisclosureContent
              key={index}
              title={day.title}
              modules={day.modules}
              outcome={day.outcome}
              isOpen={openDisclosure === index}
              onToggle={() => handleDisclosureToggle(index)}
              openModules={openModules}
              onModuleToggle={handleModuleToggle}
            />
          ))
        )}
      </Box>

    </Section>
  );
};

export default ProgramDetailsSection; 