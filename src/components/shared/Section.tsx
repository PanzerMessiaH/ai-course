'use client';

import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';
import MaxWidth from './MaxWidth';

interface SectionProps extends Omit<BoxProps, 'component'> {
  children: ReactNode;
  background?: 'default' | 'secondary' | 'primary' | 'gradient';
  spacing?: 'small' | 'medium' | 'large';
  maxWidth?: 'default' | 'narrow' | 'wide';
  component?: React.ElementType;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  role?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  background = 'default',
  spacing = 'medium',
  maxWidth = 'default',
  component = 'section',
  ariaLabel,
  ariaLabelledBy,
  role,
  sx = {},
  ...props
}) => {
  const getBackgroundStyles = () => {
    switch (background) {
      case 'secondary':
        return {
          backgroundColor: 'background.paper',
        };
      case 'primary':
        return {
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
        };
      case 'gradient':
        return {
          background: 'var(--dark-green)',
          color: 'white',
        };
      case 'default':
      default:
        return {
          backgroundColor: 'background.default',
        };
    }
  };

  const getPaddingStyles = () => {
    switch (spacing) {
      case 'small':
        return { py: { xs: 3, md: 4 } };
      case 'medium':
        return { py: { xs: 5, md: 7 } };
      case 'large':
        return { py: { xs: 8, md: 12 } };
      default:
        return { py: { xs: 5, md: 7 } }; // Default to medium spacing
    }
  };

  // Build accessibility props
  const accessibilityProps: { 
    'aria-label'?: string; 
    'aria-labelledby'?: string; 
    role?: string; 
  } = {};
  if (ariaLabel) accessibilityProps['aria-label'] = ariaLabel;
  if (ariaLabelledBy) accessibilityProps['aria-labelledby'] = ariaLabelledBy;
  if (role) accessibilityProps.role = role;

  return (
    <Box
      component={component}
      sx={{
        ...getBackgroundStyles(),
        ...getPaddingStyles(),
        ...sx,
      }}
      {...accessibilityProps}
      {...props}
    >
      <MaxWidth size={maxWidth}>
        {children}
      </MaxWidth>
    </Box>
  );
};

export default Section;