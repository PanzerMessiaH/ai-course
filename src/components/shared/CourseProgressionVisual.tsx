'use client';

import { Box, Typography } from '@mui/material';
import { ArrowForward, KeyboardArrowDown } from '@mui/icons-material';

interface CourseProgressionVisualProps {
  currentPhase?: 'theory' | 'practice' | 'application';
  moduleId?: string;
  showLabels?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const CourseProgressionVisual: React.FC<CourseProgressionVisualProps> = ({
  currentPhase,
  showLabels = true,
  size = 'medium'
}) => {
  const phases = [
    {
      id: 'theory',
      icon: '📚',
      label: 'Theory',
      description: 'Learn fundamental concepts',
      color: 'rgba(0, 203, 117, 0.15)',
      activeColor: 'rgba(0, 203, 117, 0.3)',
    },
    {
      id: 'practice',
      icon: '🔧',
      label: 'Practice',
      description: 'Apply skills through exercises',
      color: 'rgba(0, 203, 117, 0.3)',
      activeColor: 'rgba(0, 203, 117, 0.5)',
    },
    {
      id: 'application',
      icon: '🚀',
      label: 'Application',
      description: 'Build real-world solutions',
      color: 'rgba(45, 250, 135, 0.4)',
      activeColor: 'rgba(45, 250, 135, 0.6)',
    },
  ];

  const getSizeConfig = () => {
    switch (size) {
      case 'small':
        return {
          containerHeight: '60px',
          iconSize: '1.5rem',
          labelSize: '0.875rem',
          descriptionSize: '0.75rem',
          spacing: 2,
        };
      case 'large':
        return {
          containerHeight: '120px',
          iconSize: '2.5rem',
          labelSize: '1.25rem',
          descriptionSize: '1rem',
          spacing: 4,
        };
      default: // medium
        return {
          containerHeight: '80px',
          iconSize: '2rem',
          labelSize: '1rem',
          descriptionSize: '0.875rem',
          spacing: 3,
        };
    }
  };

  const sizeConfig = getSizeConfig();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizeConfig.spacing,
        py: sizeConfig.spacing,
        px: 2,
        flexDirection: { xs: 'column', md: 'row' },
      }}
      role="region"
      aria-label="Course learning progression from theory to practice to application"
    >
      {phases.map((phase, index) => (
        <Box key={phase.id} sx={{ display: 'flex', alignItems: 'center', gap: sizeConfig.spacing }}>
          {/* Phase Card */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: sizeConfig.containerHeight,
              padding: 2,
              borderRadius: 2,
              background: currentPhase === phase.id ? phase.activeColor : phase.color,
              border: '1px solid',
              borderColor: currentPhase === phase.id 
                ? 'rgba(0, 203, 117, 0.6)' 
                : 'rgba(0, 203, 117, 0.3)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              minWidth: { xs: '200px', md: '160px' },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 2,
                background: currentPhase === phase.id 
                  ? 'rgba(0, 203, 117, 0.1)'
                  : 'transparent',
                zIndex: -1,
              },
              '&:hover': {
                borderColor: 'rgba(0, 203, 117, 0.5)',
                background: phase.activeColor,
                transform: 'translateY(-2px)',
                boxShadow: currentPhase === phase.id
                  ? '0 8px 24px rgba(45, 250, 135, 0.3)'
                  : '0 6px 20px rgba(0, 203, 117, 0.2)',
              },
            }}
            role="button"
            tabIndex={0}
            aria-label={`${phase.label}: ${phase.description}`}
          >
            {/* Icon */}
            <Typography
              component="span"
              sx={{
                fontSize: sizeConfig.iconSize,
                lineHeight: 1,
                mb: showLabels ? 1 : 0,
              }}
              role="img"
              aria-label={`${phase.label} icon`}
            >
              {phase.icon}
            </Typography>

            {/* Label */}
            {showLabels && (
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontSize: sizeConfig.labelSize,
                  fontWeight: 600,
                  color: 'white',
                  textAlign: 'center',
                  mb: 0.5,
                  lineHeight: 1.2,
                }}
              >
                {phase.label}
              </Typography>
            )}

            {/* Description */}
            {showLabels && size !== 'small' && (
              <Typography
                variant="body2"
                sx={{
                  fontSize: sizeConfig.descriptionSize,
                  color: 'rgba(255, 255, 255, 0.8)',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  maxWidth: '140px',
                }}
              >
                {phase.description}
              </Typography>
            )}
          </Box>

          {/* Arrow Connector */}
          {index < phases.length - 1 && (
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
              }}
              aria-hidden="true"
            >
              <ArrowForward
                sx={{
                  color: 'rgba(45, 250, 135, 0.8)',
                  fontSize: '1.5rem',
                }}
              />
            </Box>
          )}

          {/* Mobile Arrow */}
          {index < phases.length - 1 && (
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                alignItems: 'center',
                justifyContent: 'center',
                py: 1,
              }}
              aria-hidden="true"
            >
              <KeyboardArrowDown
                sx={{
                  color: 'rgba(45, 250, 135, 0.8)',
                  fontSize: '2rem',
                }}
              />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default CourseProgressionVisual; 