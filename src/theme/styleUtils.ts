/**
 * Style Utilities - Common Styling Patterns
 * 
 * Reusable styling patterns for components following the hybrid approach:
 * Theme + Utilities + Component Overrides
 */

import { SxProps, Theme } from '@mui/material/styles';
import { designTokens } from './designTokens';

/**
 * Section-level styling patterns
 */
export const sectionStyles = {
  container: {
    maxWidth: '1284px',
    margin: '0 auto',
    padding: designTokens.spacing.section,
    position: 'relative'
  } as SxProps<Theme>,
  
  background: {
    backgroundColor: designTokens.colors.semantic.background,
    position: 'relative',
    overflow: 'hidden'
  } as SxProps<Theme>,
  
  centeredContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: designTokens.spacing.component
  } as SxProps<Theme>,
  
  twoColumn: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    gap: designTokens.spacing.component,
    alignItems: 'center'
  } as SxProps<Theme>
};

/**
 * Component-level styling patterns
 */
export const componentStyles = {
  card: {
    backgroundColor: designTokens.colors.components.cardBackground,
    borderRadius: designTokens.borderRadius.card,
    padding: designTokens.spacing.component,
    boxShadow: designTokens.shadows.card,
    border: `1px solid ${designTokens.colors.components.cardBorder}`,
    transition: designTokens.transitions.spring,
    '&:hover': {
      boxShadow: designTokens.shadows.cardHover,
      transform: 'translateY(-2px)'
    }
  } as SxProps<Theme>,
  
  button: {
    primary: {
      backgroundColor: designTokens.colors.components.buttonPrimary,
      color: designTokens.colors.brand.white,
      borderRadius: designTokens.borderRadius.button,
      padding: '20px 40px',
      fontSize: '1.4rem',
      fontWeight: 800,
      textTransform: 'none',
      transition: designTokens.transitions.spring,
      '&:hover': {
        backgroundColor: designTokens.colors.components.buttonPrimaryHover,
        transform: 'translateY(-1px)',
        boxShadow: designTokens.shadows.medium
      }
    } as SxProps<Theme>,
    
    secondary: {
      backgroundColor: designTokens.colors.components.buttonSecondary,
      color: designTokens.colors.brand.white,
      borderRadius: designTokens.borderRadius.button,
      padding: '16px 32px',
      fontSize: '1.2rem',
      fontWeight: 600,
      textTransform: 'none',
      transition: designTokens.transitions.spring,
      '&:hover': {
        backgroundColor: designTokens.colors.components.buttonSecondaryHover,
        transform: 'translateY(-1px)'
      }
    } as SxProps<Theme>
  },
  
  banner: {
    background: {
      backgroundColor: designTokens.colors.semantic.bannerBg,
      color: designTokens.colors.semantic.bannerText,
      position: 'relative',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    } as SxProps<Theme>,
    
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 60, 60, 0.1)',
      zIndex: 0
    } as SxProps<Theme>
  }
};

/**
 * Typography styling patterns
 */
export const typographyStyles = {
  displayHeading: designTokens.typography.display,
  sectionHeading: designTokens.typography.heading,
  subheading: designTokens.typography.subheading,
  bodyText: designTokens.typography.body,
  bodyLarge: designTokens.typography.bodyLarge,
  caption: designTokens.typography.caption
};

/**
 * Layout utilities
 */
export const layoutStyles = {
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  } as SxProps<Theme>,
  
  flexColumn: {
    display: 'flex',
    flexDirection: 'column'
  } as SxProps<Theme>,
  
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  } as SxProps<Theme>,
  
  gridAutoFit: (minWidth: string = '300px') => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
    gap: designTokens.spacing.component
  } as SxProps<Theme>),
  
  absolutePositioned: {
    topLeft: (offset: number = 20) => ({
      position: 'absolute',
      top: offset,
      left: offset,
      zIndex: 2
    } as SxProps<Theme>),
    
    topRight: (offset: number = 20) => ({
      position: 'absolute',
      top: offset,
      right: offset,
      zIndex: 2
    } as SxProps<Theme>),
    
    center: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1
    } as SxProps<Theme>
  }
};

/**
 * Interactive state patterns
 */
export const interactionStyles = {
  hover: {
    card: {
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: designTokens.shadows.cardHover,
        transition: designTokens.transitions.spring
      }
    } as SxProps<Theme>,
    
    scale: {
      '&:hover': {
        transform: 'scale(1.02)',
        transition: designTokens.transitions.spring
      }
    } as SxProps<Theme>
  },
  
  focus: {
    button: {
      '&:focus': {
        outline: `2px solid ${designTokens.colors.brand.neonGreen}`,
        outlineOffset: '2px'
      }
    } as SxProps<Theme>
  }
};

/**
 * Responsive utilities
 */
export const responsiveStyles = {
  hideOnMobile: {
    display: { xs: 'none', md: 'block' }
  } as SxProps<Theme>,
  
  hideOnDesktop: {
    display: { xs: 'block', md: 'none' }
  } as SxProps<Theme>,
  
  stackOnMobile: {
    flexDirection: { xs: 'column', md: 'row' }
  } as SxProps<Theme>,
  
  responsivePadding: designTokens.spacing.section,
  
  responsiveText: {
    fontSize: { xs: '1rem', md: '1.2rem' },
    lineHeight: 1.5
  } as SxProps<Theme>
};

/**
 * Helper function to combine multiple style objects
 */
export const combineStyles = (...styles: Array<SxProps<Theme> | undefined>): SxProps<Theme> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {};
  styles.forEach(style => {
    if (style) {
      Object.assign(result, style);
    }
  });
  return result;
};

/**
 * Helper function to create conditional styles
 */
export const conditionalStyle = (
  condition: boolean, 
  trueStyle: SxProps<Theme>, 
  falseStyle: SxProps<Theme> = {}
): SxProps<Theme> => {
  return condition ? trueStyle : falseStyle;
}; 