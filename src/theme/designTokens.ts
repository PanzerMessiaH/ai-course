/**
 * Design Tokens - CSS Variable Mappings
 * 
 * This file provides structured access to design system values through CSS variables.
 * Based on the hybrid approach decision from creative phase: CSS Variables + Material UI Theme Integration
 */

export const designTokens = {
  colors: {
    brand: {
      darkGreen: 'var(--dark-green)',
      technoGreen: 'var(--techno-green)',
      neonGreen: 'var(--neon-green)',
      neonGreenOnWhite: 'var(--neon-green-on-white)',
      violet: 'var(--violet)',
      orange: 'var(--orange)',
      black: 'var(--swart)',
      white: 'var(--wit)',
      lightGrey: 'var(--light-grey)'
    },
    semantic: {
      background: 'var(--page-background)',
      text: 'var(--text-color)',
      heading: 'var(--heading-text-color)',
      link: 'var(--link-color)',
      bannerBg: 'var(--banner-bg-color)',
      bannerText: 'var(--banner-text-color)'
    },
    components: {
      cardBackground: 'var(--card-background)',
      cardBorder: 'var(--card-border)',
      buttonPrimary: 'var(--button-primary)',
      buttonPrimaryHover: 'var(--button-primary-hover)',
      buttonSecondary: 'var(--button-secondary)',
      buttonSecondaryHover: 'var(--button-secondary-hover)'
    }
  },
  spacing: {
    section: { xs: 3, sm: 4, md: 5, lg: 6 },
    component: { xs: 2, sm: 3, md: 4 },
    element: { xs: 1, sm: 1.5, md: 2 },
    container: { xs: 2, sm: 3, md: 4, lg: 6 }
  },
  typography: {
    display: {
      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
      fontWeight: 700,
      lineHeight: 1.1,
      color: 'var(--neon-green)',
      letterSpacing: '-0.02em'
    },
    heading: {
      fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
      fontWeight: 600,
      lineHeight: 1.2,
      color: 'var(--heading-text-color)',
      letterSpacing: '-0.01em'
    },
    subheading: {
      fontSize: { xs: '1.5rem', md: '2rem' },
      fontWeight: 600,
      lineHeight: 1.3,
      color: 'var(--heading-text-color)'
    },
    body: {
      fontSize: { xs: '1rem', md: '1.2rem' },
      lineHeight: 1.5,
      color: 'var(--text-color)'
    },
    bodyLarge: {
      fontSize: { xs: '1.2rem', md: '1.5rem' },
      lineHeight: 1.4,
      color: 'var(--text-color)'
    },
    caption: {
      fontSize: { xs: '0.875rem', md: '1rem' },
      lineHeight: 1.4,
      color: 'var(--text-color)',
      opacity: 0.8
    }
  },
  borderRadius: {
    small: '0 8px 0 8px',
    medium: '0 12px 0 12px', 
    large: '0 20px 0 20px',
    button: '0 20px 0 20px',
    card: '0 20px 0 20px'
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
    large: '0 8px 12px rgba(0, 0, 0, 0.15)',
    card: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cardHover: '0 8px 12px rgba(0, 0, 0, 0.15)'
  },
  transitions: {
    fast: '0.15s ease-out',
    normal: '0.3s ease-out',
    slow: '0.5s ease-out',
    spring: '0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

/**
 * Responsive breakpoints matching Material UI
 */
export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1284
};

/**
 * Helper function to create responsive font sizes
 */
export const createResponsiveFontSize = (baseSize: number) => ({
  fontSize: { 
    xs: `${baseSize * 0.8}rem`, 
    md: `${baseSize}rem`,
    lg: `${baseSize * 1.1}rem`
  }
});

/**
 * Helper function to create responsive spacing
 */
export const createResponsiveSpacing = (baseSpacing: number) => ({
  xs: baseSpacing * 0.8,
  sm: baseSpacing * 0.9,
  md: baseSpacing,
  lg: baseSpacing * 1.2
});

export default designTokens; 