'use client';

import { Box, Typography } from '@mui/material';
import { ArrowForward, KeyboardArrowDown, MenuBook, Build, Rocket } from '@mui/icons-material';

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
      icon: MenuBook,
      label: 'Theory',
      description: 'Learn fundamental concepts',
      color: 'rgba(0, 203, 117, 0.2)',
      activeColor: 'rgba(0, 203, 117, 0.35)',
      borderColor: 'rgba(0, 203, 117, 0.4)',
      activeBorderColor: 'rgba(0, 203, 117, 0.7)',
    },
    {
      id: 'practice',
      icon: Build,
      label: 'Practice', 
      description: 'Apply skills through exercises',
      color: 'rgba(0, 203, 117, 0.35)',
      activeColor: 'rgba(0, 203, 117, 0.5)',
      borderColor: 'rgba(0, 203, 117, 0.5)',
      activeBorderColor: 'rgba(0, 203, 117, 0.8)',
    },
    {
      id: 'application',
      icon: Rocket,
      label: 'Application',
      description: 'Build real-world solutions',
      color: 'rgba(45, 250, 135, 0.5)',
      activeColor: 'rgba(45, 250, 135, 0.65)',
      borderColor: 'rgba(45, 250, 135, 0.6)',
      activeBorderColor: 'rgba(45, 250, 135, 0.9)',
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
        gap: { xs: 2, md: sizeConfig.spacing },
        py: { xs: 2, md: sizeConfig.spacing },
        px: { xs: 1, md: 2 },
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        maxWidth: { xs: '100%', md: 'none' },
      }}
      role="region"
      aria-label="Course learning progression from theory to practice to application"
    >
      {phases.map((phase, index) => (
        <Box key={phase.id} sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: { xs: 1, md: sizeConfig.spacing },
          width: { xs: '100%', md: 'auto' },
        }}>
          {/* Phase Card */}
                      <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: sizeConfig.containerHeight,
                padding: { xs: 2, md: 2.5 },
                borderRadius: '8px 0px 8px 0px',
                background: currentPhase === phase.id ? phase.activeColor : phase.color,
                border: '2px solid',
                borderColor: currentPhase === phase.id 
                  ? phase.activeBorderColor 
                  : phase.borderColor,
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                width: { xs: '170px', md: '220px' },
                height: { xs: 'auto', md: '220px' },
                margin: { xs: '0 auto', md: '0' },
                boxShadow: currentPhase === phase.id
                  ? '0 4px 16px rgba(45, 250, 135, 0.25)'
                  : '0 2px 8px rgba(0, 203, 117, 0.15)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '8px 0px 8px 0px',
                  background: currentPhase === phase.id 
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(255, 255, 255, 0.05)',
                  zIndex: -1,
                },
                '&:hover': {
                  borderColor: phase.activeBorderColor,
                  background: phase.activeColor,
                  transform: 'translateY(-3px)',
                  boxShadow: currentPhase === phase.id
                    ? '0 8px 24px rgba(45, 250, 135, 0.35)'
                    : '0 6px 20px rgba(0, 203, 117, 0.25)',
                },
              }}
              role="button"
              tabIndex={0}
              aria-label={`${phase.label}: ${phase.description}`}
            >
            {/* Icon */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: showLabels ? 1 : 0,
              }}
              role="img"
              aria-label={`${phase.label} icon`}
            >
              <phase.icon
                sx={{
                  fontSize: sizeConfig.iconSize === '1.5rem' ? '2rem' : 
                           sizeConfig.iconSize === '2rem' ? '2.5rem' : '3rem',
                  color: '#1a1a1a',
                  filter: 'drop-shadow(0 1px 2px rgba(255, 255, 255, 0.8))',
                }}
              />
            </Box>

            {/* Label */}
            {showLabels && (
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontSize: sizeConfig.labelSize,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  textAlign: 'center',
                  mb: 0.5,
                  lineHeight: 1.2,
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
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
                  color: '#2a2a2a',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  maxWidth: { xs: '120px', md: '140px' },
                  fontWeight: 500,
                  textShadow: '0 1px 1px rgba(255, 255, 255, 0.6)',
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
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': { opacity: 0.6 },
                  '50%': { opacity: 1 },
                  '100%': { opacity: 0.6 },
                },
              }}
              aria-hidden="true"
            >
              <ArrowForward
                sx={{
                  color: '#00cb75',
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 203, 117, 0.3))',
                }}
              />
            </Box>
          )}

          {/* Mobile Arrow - Hidden */}
          {index < phases.length - 1 && (
            <Box
              sx={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                py: 1,
                animation: 'bounce 2s infinite',
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                  '40%': { transform: 'translateY(-5px)' },
                  '60%': { transform: 'translateY(-2px)' },
                },
              }}
              aria-hidden="true"
            >
              <KeyboardArrowDown
                sx={{
                  color: '#00cb75',
                  fontSize: '2.2rem',
                  fontWeight: 'bold',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 203, 117, 0.3))',
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