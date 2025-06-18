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
  IconButton,
  Divider
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Security,
  Login as LoginIcon,
  AdminPanelSettings,
  Lock
} from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { adminLoginSchema, type AdminLoginData } from '../../../../lib/auth';
import { useRouter } from 'next/navigation';

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
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper 
        elevation={6} 
        sx={{ 
          p: 4,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          border: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Box sx={{ mb: 2 }}>
            <AdminPanelSettings 
              sx={{ 
                fontSize: 60, 
                color: 'primary.main',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }} 
            />
          </Box>
          <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
            Admin Login
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Secure access to course registration management
          </Typography>
        </Box>

        {/* Security Indicator */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 3,
            p: 1,
            bgcolor: 'success.light',
            borderRadius: 1,
            color: 'success.dark'
          }}
        >
          <Security sx={{ mr: 1, fontSize: 18 }} />
          <Typography variant="body2" fontWeight="medium">
            Secure HTTPS Connection
          </Typography>
        </Box>

        {/* Status Messages */}
        {loginStatus === 'success' && (
          <Alert severity="success" sx={{ mb: 3 }}>
            {loginMessage}
          </Alert>
        )}

        {loginStatus === 'error' && (
          <Alert severity="error" sx={{ mb: 3 }}>
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
                      bgcolor: 'white',
                      '&:hover': {
                        bgcolor: 'grey.50'
                      }
                    }
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
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'white',
                      '&:hover': {
                        bgcolor: 'grey.50'
                      }
                    }
                  }}
                />
              )}
            />
          </Box>

          {/* Remember Me */}
          <Box mb={3}>
            <Controller
              name="rememberMe"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox 
                      {...field} 
                      checked={field.value || false}
                      color="primary"
                    />
                  }
                  label="Remember me for 30 days"
                />
              )}
            />
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Login Button */}
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={isSubmitting || !isValid}
            startIcon={isSubmitting ? <CircularProgress size={20} /> : <LoginIcon />}
            sx={{ 
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                transform: 'translateY(-1px)',
                boxShadow: 3
              },
              transition: 'all 0.3s ease'
            }}
          >
            {isSubmitting ? 'Authenticating...' : 'Login to Dashboard'}
          </Button>
        </form>

        {/* Footer Info */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="text.secondary">
            Default credentials: admin / admin123
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            ⚠️ Please change the default password after first login
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}