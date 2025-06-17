'use client';

import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';

interface MaxWidthProps extends Omit<BoxProps, 'maxWidth'> {
  children: ReactNode;
  size?: 'default' | 'narrow' | 'wide';
}

const MaxWidth: React.FC<MaxWidthProps> = ({ 
  children, 
  size = 'default',
  sx = {},
  ...props 
}) => {
  const getMaxWidth = () => {
    switch (size) {
      case 'narrow':
        return '800px';
      case 'wide':
        return '1400px';
      case 'default':
      default:
        return '1200px';
    }
  };

  return (
    <Box
      sx={{
        maxWidth: getMaxWidth(),
        margin: '0 auto',
        padding: { xs: '0 20px', sm: '0 32px', lg: '0 40px' },
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default MaxWidth; 