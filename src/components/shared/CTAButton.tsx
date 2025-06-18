'use client';

import { Button, ButtonProps, Box, styled } from '@mui/material';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface CTAButtonProps extends Omit<ButtonProps, 'variant'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: ReactNode;
  pulse?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  href?: string;
}

const PrimaryButton = styled(Button)(() => ({
  background: 'linear-gradient(135deg, #00cb75 0%, #2dfa87 100%)',
  color: '#003c3c',
  fontWeight: 600,
  fontSize: '1.1rem',
  padding: '16px 32px',
  borderRadius: '8px',
  textTransform: 'none',
  boxShadow: '0 4px 14px rgba(0, 203, 117, 0.3)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '@media (min-width: 768px)': {
    fontSize: '1.2rem',
    padding: '18px 36px',
  },
  '&:hover': {
    background: 'linear-gradient(135deg, #018e53 0%, #00cb75 100%)',
    boxShadow: '0 6px 20px rgba(0, 203, 117, 0.4)',
    transform: 'translateY(-2px)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}));

const SecondaryButton = styled(Button)(() => ({
  background: 'transparent',
  color: 'white',
  fontWeight: 600,
  fontSize: '1.1rem',
  padding: '16px 32px',
  borderRadius: '8px',
  textTransform: 'none',
  border: '2px solid',
  borderColor: 'white',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '@media (min-width: 768px)': {
    fontSize: '1.2rem',
    padding: '18px 36px',
  },
  '&:hover': {
    backgroundColor: 'white',
    color: '#003c3c',
    borderColor: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(255, 255, 255, 0.3)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}));

const OutlineButton = styled(Button)(({ theme }) => ({
  background: 'transparent',
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: '1.1rem',
  padding: '16px 32px',
  borderRadius: '8px',
  textTransform: 'none',
  border: '2px solid',
  borderColor: theme.palette.text.primary,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '@media (min-width: 768px)': {
    fontSize: '1.2rem',
    padding: '18px 36px',
  },
  '&:hover': {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.paper,
    borderColor: theme.palette.text.primary,
    transform: 'translateY(-2px)',
    boxShadow: `0 6px 20px ${theme.palette.text.primary}33`,
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}));

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  ariaLabel,
  ariaDescribedBy,
  href,
  onClick,
  ...props
}) => {
  const router = useRouter();
  
  const ButtonComponent = 
    variant === 'primary' ? PrimaryButton : 
    variant === 'secondary' ? SecondaryButton : 
    OutlineButton;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      event.preventDefault();
      if (href.startsWith('/')) {
        // Internal navigation
        router.push(href);
      } else if (href.startsWith('#')) {
        // Scroll to anchor
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // External link
        window.open(href, '_blank', 'noopener,noreferrer');
      }
    } else if (onClick) {
      onClick(event);
    }
  };

  return (
    <ButtonComponent 
      {...props} 
      onClick={handleClick}
      aria-label={ariaLabel} 
      aria-describedby={ariaDescribedBy}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {children}
        {icon && <Box component="span">{icon}</Box>}
      </Box>
    </ButtonComponent>
  );
};

export default CTAButton; 