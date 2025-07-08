'use client';

import { Box, Typography, Card, CardContent, Collapse, IconButton } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { CurriculumModule as CurriculumModuleType } from '../../data/curriculum';

interface CurriculumModuleProps {
  module: CurriculumModuleType;
  isOpen: boolean;
  onToggle: () => void;
}

const CurriculumModule: React.FC<CurriculumModuleProps> = ({
  module,
  isOpen,
  onToggle,
}) => {
  return (
    <Card
      sx={{
        mb: 2,
        border: '1px solid',
        borderColor: isOpen ? 'rgba(0, 203, 117, 0.4)' : 'rgba(0, 203, 117, 0.2)',
        bgcolor: isOpen ? 'rgba(0, 203, 117, 0.02)' : 'transparent',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          borderColor: 'rgba(0, 203, 117, 0.4)',
          bgcolor: 'rgba(0, 203, 117, 0.02)',
        },
      }}
    >
      {/* Module Header */}
      <Box
        onClick={onToggle}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            bgcolor: 'rgba(0, 203, 117, 0.03)',
          },
        }}
      >
        <Typography
          variant="h6"
          component="h4"
          sx={{
            fontWeight: 500,
            color: isOpen ? 'secondary.main' : 'text.primary',
            transition: 'color 0.3s ease',
            fontSize: '1.125rem',
            flex: 1,
          }}
        >
          {module.title}
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

      {/* Module Content */}
      <Collapse in={isOpen} timeout={300}>
        <CardContent sx={{ pt: 0, pb: 2 }}>
          <Typography
            variant="body1"
            sx={{
              color: 'text.primary',
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            {module.description}
          </Typography>

          {/* Key Highlights */}
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                mb: 1.5,
                color: 'secondary.main',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: '0.75rem',
              }}
            >
              What You&apos;ll Learn
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                p: 0,
                m: 0,
                '& li': {
                  position: 'relative',
                  pl: 2.5,
                  mb: 1,
                  color: 'text.primary',
                  lineHeight: 1.5,
                  fontSize: '0.9rem',
                  '&:before': {
                    content: '"✓"',
                    position: 'absolute',
                    left: 0,
                    color: 'secondary.main',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                  },
                },
              }}
            >
              {/* Show only the first 3-4 most important skills/outcomes */}
              {module.skillsGained.slice(0, 3).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
              {module.practicalOutcomes.slice(0, 1).map((outcome, index) => (
                <li key={`outcome-${index}`}>{outcome}</li>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CurriculumModule; 