'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  Divider,
  InputAdornment,
  Chip,
  FormHelperText
} from '@mui/material';
import {
  Person,
  Email,
  Phone,
  Business,
  Work,
  School,
  CheckCircle,
  Error as ErrorIcon
} from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userRegistrationSchema, type UserRegistrationData } from '../../../lib/auth';

const courseInterests = [
  'AI Fundamentals',
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing',
  'Computer Vision',
  'Data Science',
  'Python Programming',
  'TensorFlow/PyTorch',
  'AI Ethics',
  'Business Applications'
];

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm<UserRegistrationData>({
    resolver: zodResolver(userRegistrationSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
      experience: undefined,
      interests: '',
      source: ''
    }
  });

  const watchedInterests = watch('interests') || '';
  const selectedInterests = watchedInterests ? watchedInterests.split(',').filter(Boolean) : [];

  const handleInterestToggle = (interest: string, currentValue: string, onChange: (value: string) => void) => {
    const interests = currentValue ? currentValue.split(',').filter(Boolean) : [];
    const isSelected = interests.includes(interest);
    
    let newInterests;
    if (isSelected) {
      newInterests = interests.filter(i => i !== interest);
    } else {
      newInterests = [...interests, interest];
    }
    
    onChange(newInterests.join(','));
  };

  const onSubmit = async (data: UserRegistrationData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }

      setSubmitStatus('success');
      setSubmitMessage('Registration successful! Thank you for your interest in our AI course.');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            Course Registration
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Join our comprehensive AI-Native Development course
          </Typography>
        </Box>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <Alert severity="success" icon={<CheckCircle />} sx={{ mb: 3 }}>
            {submitMessage}
          </Alert>
        )}

        {submitStatus === 'error' && (
          <Alert severity="error" icon={<ErrorIcon />} sx={{ mb: 3 }}>
            {submitMessage}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Section 1: Personal Information */}
          <Box mb={4}>
            <Typography variant="h5" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Person />
              Personal Information
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="First Name"
                      required
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person color={errors.firstName ? 'error' : 'action'} />
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Last Name"
                      required
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person color={errors.lastName ? 'error' : 'action'} />
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email Address"
                      type="email"
                      required
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email color={errors.email ? 'error' : 'action'} />
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Phone Number (Optional)"
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone color={errors.phone ? 'error' : 'action'} />
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </Box>
            </Box>
          </Box>

          {/* Section 2: Professional Background */}
          <Box mb={4}>
            <Typography variant="h5" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Business />
              Professional Background
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Controller
                  name="company"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Company (Optional)"
                      error={!!errors.company}
                      helperText={errors.company?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Business color={errors.company ? 'error' : 'action'} />
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Controller
                  name="jobTitle"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Job Title (Optional)"
                      error={!!errors.jobTitle}
                      helperText={errors.jobTitle?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Work color={errors.jobTitle ? 'error' : 'action'} />
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Controller
                  name="experience"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth error={!!errors.experience}>
                      <InputLabel>Experience Level</InputLabel>
                      <Select
                        {...field}
                        label="Experience Level"
                        startAdornment={
                          <InputAdornment position="start">
                            <School color={errors.experience ? 'error' : 'action'} />
                          </InputAdornment>
                        }
                      >
                        <MenuItem value="beginner">Beginner - New to AI/Programming</MenuItem>
                        <MenuItem value="intermediate">Intermediate - Some programming experience</MenuItem>
                        <MenuItem value="advanced">Advanced - Experienced developer</MenuItem>
                        <MenuItem value="expert">Expert - AI/ML background</MenuItem>
                      </Select>
                      {errors.experience && (
                        <FormHelperText>{errors.experience.message}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                />
              </Box>
            </Box>
          </Box>

          {/* Section 3: Course Interests */}
          <Box mb={4}>
            <Typography variant="h5" gutterBottom color="primary">
              Course Interests
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Controller
              name="interests"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Select the topics you&rsquo;re most interested in learning:
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {courseInterests.map((interest) => (
                      <Chip
                        key={interest}
                        label={interest}
                        clickable
                        color={selectedInterests.includes(interest) ? 'primary' : 'default'}
                        variant={selectedInterests.includes(interest) ? 'filled' : 'outlined'}
                        onClick={() => handleInterestToggle(interest, value || '', onChange)}
                      />
                    ))}
                  </Box>

                  {selectedInterests.length > 0 && (
                    <Typography variant="body2" color="text.secondary">
                      Selected: {selectedInterests.join(', ')}
                    </Typography>
                  )}
                </Box>
              )}
            />
          </Box>

          {/* Section 4: Additional Information */}
          <Box mb={4}>
            <Typography variant="h5" gutterBottom color="primary">
              Additional Information
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Controller
              name="source"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="How did you hear about this course? (Optional)"
                  multiline
                  rows={2}
                  error={!!errors.source}
                  helperText={errors.source?.message}
                  placeholder="e.g., Social media, colleague recommendation, web search..."
                />
              )}
            />
          </Box>

          {/* Submit Button */}
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting || !isValid}
              sx={{ 
                minWidth: 200, 
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              {isSubmitting ? (
                <>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                  Registering...
                </>
              ) : (
                'Register for Course'
              )}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}