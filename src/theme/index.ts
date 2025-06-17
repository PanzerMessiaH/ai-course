'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

// Color palette based on current SCSS system
const colors = {
  darkGreen: '#003c3c',
  technoGreen: '#00cb75',
  neonGreen: '#2dfa87',
  neonGreenOnWhite: '#018e53',
  violet: '#7878fa',
  orange: '#ff8228',
  black: '#000',
  white: '#fff',
  lightGrey: '#f5f5f5',
};

// Base theme configuration
const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Source Sans 3", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.3,
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
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
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
          borderRadius: 8,
          padding: '12px 24px',
          fontSize: '1rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
};

// Light theme
export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: colors.darkGreen,
      light: '#004d4d',
      dark: '#002e2e',
      contrastText: colors.white,
    },
    secondary: {
      main: colors.technoGreen,
      light: colors.neonGreen,
      dark: colors.neonGreenOnWhite,
      contrastText: colors.white,
    },
    success: {
      main: colors.technoGreen,
      light: colors.neonGreen,
      dark: colors.neonGreenOnWhite,
    },
    background: {
      default: colors.white,
      paper: colors.white,
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#6b7280',
    },
    divider: '#e5e7eb',
  },
});

// Dark theme
export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: colors.darkGreen,
      light: '#004d4d',
      dark: '#002e2e',
      contrastText: colors.white,
    },
    secondary: {
      main: colors.technoGreen,
      light: colors.neonGreen,
      dark: colors.neonGreenOnWhite,
      contrastText: colors.white,
    },
    success: {
      main: colors.technoGreen,
      light: colors.neonGreen,
      dark: colors.neonGreenOnWhite,
    },
    background: {
      default: colors.darkGreen,
      paper: '#1a1a1a',
    },
    text: {
      primary: colors.white,
      secondary: '#a1a1aa',
    },
    divider: '#404040',
  },
});

export default lightTheme; 