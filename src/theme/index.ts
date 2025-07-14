'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

// Base theme configuration with CSS variable integration
const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Source Sans 3", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      '@media (max-width: 768px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      '@media (max-width: 768px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width: 768px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      '@media (min-width: 768px)': {
        fontSize: '1.2rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
      '@media (min-width: 768px)': {
        fontSize: '1rem',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1284,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '0 20px 0 20px',
          fontSize: '1rem',
          transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          backgroundColor: '#018e53',
          color: '#fff',
          padding: '12px 24px',
          '&:hover': {
            backgroundColor: '#00cb75',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        },
        containedSecondary: {
          backgroundColor: '#003c3c',
          color: '#fff',
          padding: '12px 24px',
          '&:hover': {
            backgroundColor: '#004d4d',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0 20px 0 20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          border: '1px solid #e5e5e5',
          transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'inherit', // Let parent components control color
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width: 768px)': {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
      },
    },
  },
};

// Light theme with CSS variable integration
export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#003c3c',
      light: '#004d4d',
      dark: '#002e2e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00cb75',
      light: '#2dfa87',
      dark: '#018e53',
      contrastText: '#fff',
    },
    success: {
      main: '#00cb75',
      light: '#2dfa87',
      dark: '#018e53',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
    divider: '#e5e5e5',
  },
});

export default lightTheme; 