'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Alert,
  CircularProgress,
  InputAdornment,
  IconButton
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Security,
  Login as LoginIcon,
  AdminPanelSettings,
  Lock,
  Home
} from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { adminLoginSchema, type AdminLoginData } from '../../../../lib/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminLoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginStatus, setLoginStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loginMessage, setLoginMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<AdminLoginData>({
    resolver: zodResolver(adminLoginSchema),
    mode: 'onBlur',
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false
    }
  });

  const onSubmit = async (data: AdminLoginData) => {
    setIsSubmitting(true);
    setLoginStatus('idle');
    setLoginMessage('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Login failed');
      }

      setLoginStatus('success');
      setLoginMessage('Login successful! Redirecting to dashboard...');
      
      // Redirect to admin dashboard after successful login
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 1500);

    } catch (error) {
      setLoginStatus('error');
      setLoginMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(60px)',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(0, 203, 117, 0.2)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="sm">
        {/* Header with Logos and Navigation */}
        <Box sx={{ mb: 4 }}>
          {/* Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button
                startIcon={<Home />}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Back to Home
              </Button>
            </Link>
          </Box>

          {/* Company Logos */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
              mb: 4,
            }}
          >
            <Image
              src="/accso-logo.svg"
              alt="ACCSO company logo"
              width={220}
              height={50}
              priority
              style={{
                width: 'auto',
                height: '50px',
                filter: 'brightness(0) invert(1)',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 300,
                opacity: 0.8,
              }}
            >
              &
            </Typography>
            <Image
              src="/dominic-systems-logo.svg"
              alt="Dominic Systems company logo"
              width={280}
              height={64}
              priority
              style={{
                width: 'auto',
                height: '64px',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </Box>
        </Box>

        {/* Main Login Card */}
        <Paper 
          elevation={0}
          sx={{ 
            p: 6,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Header */}
          <Box textAlign="center" mb={4}>
            <Box sx={{ mb: 3 }}>
              <AdminPanelSettings 
                sx={{ 
                  fontSize: 72, 
                  color: '#00cb75',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 203, 117, 0.3))',
                }} 
              />
            </Box>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Admin Login
            </Typography>
            <Typography variant="h6" sx={{ color: '#555555', fontWeight: 400 }}>
              Secure access to course registration management
            </Typography>
          </Box>

          {/* Security Indicator */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              mb: 4,
              p: 2,
              background: 'linear-gradient(135deg, #00cb75 0%, #00a661 100%)',
              borderRadius: '12px',
              color: 'white',
              boxShadow: '0 4px 15px rgba(0, 203, 117, 0.3)',
            }}
          >
            <Security sx={{ mr: 1, fontSize: 20 }} />
            <Typography variant="body1" fontWeight="600">
              Secure HTTPS Connection
            </Typography>
          </Box>

          {/* Status Messages */}
          {loginStatus === 'success' && (
            <Alert 
              severity="success" 
              sx={{ 
                mb: 3,
                borderRadius: '12px',
                '& .MuiAlert-message': {
                  fontWeight: 500,
                },
              }}
            >
              {loginMessage}
            </Alert>
          )}

          {loginStatus === 'error' && (
            <Alert 
              severity="error" 
              sx={{ 
                mb: 3,
                borderRadius: '12px',
                '& .MuiAlert-message': {
                  fontWeight: 500,
                },
              }}
            >
              {loginMessage}
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Username Field */}
            <Box mb={3}>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Username"
                    required
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AdminPanelSettings color={errors.username ? 'error' : 'action'} />
                        </InputAdornment>
                      )
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: '12px',
                        '& fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00cb75',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00cb75',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#333333',
                        '&.Mui-focused': {
                          color: '#00cb75',
                        },
                      },
                      '& .MuiOutlinedInput-input': {
                        color: '#333333',
                      },
                    }}
                  />
                )}
              />
            </Box>

            {/* Password Field */}
            <Box mb={3}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color={errors.password ? 'error' : 'action'} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: '12px',
                        '& fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00cb75',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00cb75',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#333333',
                        '&.Mui-focused': {
                          color: '#00cb75',
                        },
                      },
                      '& .MuiOutlinedInput-input': {
                        color: '#333333',
                      },
                    }}
                  />
                )}
              />
            </Box>

            {/* Remember Me */}
            <Box mb={4}>
              <Controller
                name="rememberMe"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox 
                        {...field} 
                        checked={field.value || false}
                        sx={{
                          color: '#00cb75',
                          '&.Mui-checked': {
                            color: '#00cb75',
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ color: '#555555', fontWeight: 500 }}>
                        Remember me for 30 days
                      </Typography>
                    }
                  />
                )}
              />
            </Box>

            {/* Login Button */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={isSubmitting || !isValid}
              startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <LoginIcon />}
              sx={{ 
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 700,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                textTransform: 'none',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 35px rgba(102, 126, 234, 0.5)',
                },
                '&:disabled': {
                  background: 'rgba(0, 0, 0, 0.12)',
                  color: 'rgba(0, 0, 0, 0.26)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {isSubmitting ? 'Authenticating...' : 'Access Dashboard'}
            </Button>
          </form>

          {/* Footer Info */}
          <Box textAlign="center" mt={4}>
            <Typography variant="body2" sx={{ color: '#555555', mb: 1 }}>
              Default credentials: <strong>admin</strong> / <strong>admin123</strong>
            </Typography>
            <Typography variant="caption" sx={{ color: '#777777' }}>
              ⚠️ Please change the default password after first login
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}