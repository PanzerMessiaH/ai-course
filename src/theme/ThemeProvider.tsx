'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from './index';

// Create emotion cache for consistent styling
const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Create emotion cache
  const emotionCache = createEmotionCache();

  return (
    <CacheProvider value={emotionCache}>
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
}; 