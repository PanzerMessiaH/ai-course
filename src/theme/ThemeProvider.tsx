'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './index';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Create emotion cache for consistent styling
const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('dark'); // Default to dark theme
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only running theme detection after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load theme preference after component is mounted
  useEffect(() => {
    if (!mounted) return;
    
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      setMode(savedMode);
    }
    // If no saved mode, keep the default 'dark' theme - don't change it
  }, [mounted]);

  // Save theme preference to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme-mode', mode);
    }
  }, [mode, mounted]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Always use dark theme until explicitly switched to light
  const currentTheme = mode === 'light' ? lightTheme : darkTheme;
  
  // Create emotion cache
  const emotionCache = createEmotionCache();

  return (
    <CacheProvider value={emotionCache}>
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        <MuiThemeProvider theme={currentTheme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    </CacheProvider>
  );
}; 