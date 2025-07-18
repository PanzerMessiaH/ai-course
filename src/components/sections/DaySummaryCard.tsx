'use client';

import { Box, Typography, Card, CardContent, Chip, Collapse, IconButton } from '@mui/material';
import { ExpandMore, Psychology, FlashOn, Rocket } from '@mui/icons-material';
import { CurriculumDay } from '../../data/curriculum';

interface DaySummaryCardProps {
  day: CurriculumDay;
  dayNumber: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const DaySummaryCard: React.FC<DaySummaryCardProps> = ({
  day,
  dayNumber,
  isExpanded,
  onToggle,
}) => {
  // Generate summary from day data
  const getKeyFocus = (dayId: string): string => {
    switch (dayId) {
      case 'day-1':
        return 'Individual mindset transformation and core AI-native development skills';
      case 'day-2':
        return 'Advanced techniques and professional application in real-world scenarios';
      case 'day-3':
        return 'Team leadership and organizational AI-native transformation';
      default:
        return day.description;
    }
  };

  const getModuleCoverage = (modules: typeof day.modules): string => {
    const moduleCount = modules.length;
    switch (day.id) {
      case 'day-1':
        return `${moduleCount} foundational sessions covering AI-native development, problem analysis, strategic planning, and creative problem solving`;
      case 'day-2':
        return `${moduleCount} advanced sessions covering rapid development, continuous learning, productivity techniques, and tool integration`;
      case 'day-3':
        return `${moduleCount} integration sessions covering team collaboration, quality assurance, real-world implementation, and organizational scaling`;
      default:
        return `${moduleCount} comprehensive sessions covering core principles and practical application`;
    }
  };

  const getKeySkills = (modules: typeof day.modules): string[] => {
    const allSkills = modules.flatMap(module => module.skillsGained);
    // Return first 3-4 most impactful skills
    return allSkills.slice(0, 4);
  };

  const keyFocus = getKeyFocus(day.id);
  const moduleCoverage = getModuleCoverage(day.modules);
  const keySkills = getKeySkills(day.modules);
  const DayIcon = dayNumber === 1 ? Psychology : dayNumber === 2 ? FlashOn : Rocket;

  return (
    <Card
      sx={{
        mb: 3,
        border: '2px solid',
        borderColor: isExpanded ? 'secondary.main' : 'rgba(0, 203, 117, 0.3)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'visible',
        '&:hover': {
          borderColor: 'secondary.main',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        {/* Day Header - Clickable */}
        <Box
          onClick={onToggle}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: isExpanded ? 3 : 0,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              '& .expand-icon': {
                color: 'secondary.main',
              }
            }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
            <Box
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mb: 0 
              }}
            >
              <DayIcon
                sx={{
                  fontSize: '2rem',
                  color: '#1a1a1a',
                  filter: 'drop-shadow(0 1px 2px rgba(0, 203, 117, 0.3))',
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 600,
                  color: isExpanded ? 'secondary.main' : 'text.primary',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  transition: 'color 0.3s ease',
                  lineHeight: 1.2,
                }}
              >
                {day.title}
              </Typography>
            </Box>
          </Box>
          <IconButton
            className="expand-icon"
            sx={{
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease, color 0.3s ease',
              color: isExpanded ? 'secondary.main' : 'text.secondary',
            }}
          >
            <ExpandMore />
          </IconButton>
        </Box>

        {/* Collapsible Content */}
        <Collapse in={isExpanded} timeout={300}>
          {/* Key Focus */}
          <Typography
            variant="h6"
            component="h4"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: 'secondary.main',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
            }}
          >
            Focus: {keyFocus}
          </Typography>

          {/* Module Coverage */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            Coverage: {moduleCoverage}
          </Typography>

          {/* Key Skills */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                mb: 1.5,
                color: 'text.primary',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                letterSpacing: '0.5px',
              }}
            >
              Key Skills Gained
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              {keySkills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: 'rgba(0, 203, 117, 0.5)',
                    color: 'text.secondary',
                    fontSize: '0.75rem',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      color: 'secondary.main',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Outcome Preview */}
          <Box
            sx={{
              p: 2,
              borderRadius: 1,
              bgcolor: 'rgba(0, 203, 117, 0.05)',
              border: '1px solid rgba(0, 203, 117, 0.2)',
              mb: 3,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: 'secondary.main',
                fontSize: '0.875rem',
              }}
            >
              {day.outcome.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.5,
                fontSize: '0.875rem',
              }}
            >
              {day.outcome.description}
            </Typography>
          </Box>
        </Collapse>


      </CardContent>
    </Card>
  );
};

export default DaySummaryCard; 