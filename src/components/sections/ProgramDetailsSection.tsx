'use client';

import { useState } from 'react';
import { Box, Typography, Card, CardContent, Collapse, IconButton } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Section } from '../shared';
import { curriculumData, CurriculumModule as CurriculumModuleType } from '../../data/curriculum';
import CurriculumModule from './CurriculumModule';

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

          {/* Outcome Card */}
          <Box>
            <Card
              variant="outlined"
              sx={{
                border: '1px solid rgba(0, 203, 117, 0.3)',
                bgcolor: 'rgba(0, 203, 117, 0.05)',
                position: { xs: 'static', lg: 'sticky' },
                top: { lg: 20 },
                height: 'fit-content',
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
        </Box>
      </CardContent>
    </Collapse>
  </Card>
);

const ProgramDetailsSection = () => {
  const [openDisclosure, setOpenDisclosure] = useState<number | null>(0); // First item open by default
  const [openModules, setOpenModules] = useState<Set<string>>(new Set(['module-1'])); // First module of first day open

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
          }}
        >
          <Box
            component="span"
            sx={{
              color: 'secondary.main',
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
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.4,
            mb: 1,
            fontSize: { xs: '1rem', md: '1.25rem' },
          }}
        >
          Format: Modular sessions + Hands-on labs + Reflection rounds
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'text.secondary',
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.4,
            mb: 2,
            fontSize: { xs: '1rem', md: '1.25rem' },
          }}
        >
          A comprehensive 3 day intensive that transforms your enterprise scrum team into AI-Native Engineers.
        </Typography>
      </Box>

      {/* Program Disclosure Content */}
      <Box sx={{ mb: 4 }}>
        {programDays.map((day, index) => (
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
        ))}
      </Box>

    </Section>
  );
};

export default ProgramDetailsSection; 