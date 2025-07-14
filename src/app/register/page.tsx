'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  InputAdornment,
  Chip,
  FormHelperText,
  Card,
  CardContent
} from '@mui/material';
import {
  Person,
  Email,
  Phone,
  Business,
  Work,
  School,
  CheckCircle,
  Error as ErrorIcon,
  ArrowBack
} from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userRegistrationSchema, type UserRegistrationData } from '../../../lib/auth';
import { useRouter } from 'next/navigation';

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

// Logo Components
const AccsoLogo = () => (
  <Box
    component="svg"
    viewBox="0 0 280.63 63.9"
    role="img"
    aria-label="ACCSO Company Logo"
    sx={{
      width: { xs: '120px', sm: '140px', md: '160px' },
      height: { xs: '27px', sm: '32px', md: '36px' },
      display: 'block',
      '& .cls-1': {
        fill: '#2dfa87',
      },
    }}
  >
    <title>ACCSO Logo</title>
    <path className="cls-1" d="M63.9,63.9H0V0h63.9v63.9ZM2.24,61.66h59.42V2.24H2.24v59.42Z"/>
    <path className="cls-1" d="M120.27,18.64l-4.54,15.56h11.56l-4.36-15.56-1.21-4.78h-.18l-1.27,4.78ZM129.71,42.73h-16.47l-2.54,8.84h-10.78l15.68-45.4h12.17l15.86,45.4h-11.38l-2.54-8.84Z"/>
    <g>
      <path className="cls-1" d="M173.24,21.3c-2.18-.85-5.02-1.39-8.23-1.39-7.51,0-9.93,2.91-9.93,11.87,0,9.44,2.54,12.35,10.05,12.35,3.15,0,5.93-.67,8.23-1.63l1.03,7.57c-2.91,1.33-6.84,2.24-10.53,2.24-12.53,0-18.71-6.78-18.71-20.58,0-12.95,5.93-20.16,19.37-20.16,3.39,0,7.2.79,9.75,1.69l-1.03,8.05Z"/>
      <path className="cls-1" d="M205.81,21.3c-2.18-.85-5.02-1.39-8.23-1.39-7.51,0-9.93,2.91-9.93,11.87,0,9.44,2.54,12.35,10.05,12.35,3.15,0,5.93-.67,8.23-1.63l1.03,7.57c-2.91,1.33-6.84,2.24-10.53,2.24-12.53,0-18.71-6.78-18.71-20.58,0-12.95,5.93-20.16,19.37-20.16,3.39,0,7.2.79,9.75,1.69l-1.03,8.05Z"/>
      <path className="cls-1" d="M224.51,52.29c-4.9,0-9.32-1.09-12.95-2.97l1.21-8.05c3.69,1.94,7.51,3.03,11.68,3.03,4.42,0,6.36-1.51,6.36-3.99,0-5.87-19.07-2.97-19.07-16.47,0-6.66,4.42-12.23,15.01-12.23,4.06,0,8.48.73,11.75,2.12l-1.09,7.81c-3.63-1.09-7.02-1.76-10.23-1.76-5.02,0-6.36,1.63-6.36,3.57,0,5.81,19.07,2.66,19.07,16.28,0,7.75-5.75,12.65-15.38,12.65"/>
      <path className="cls-1" d="M262.23,19.91c-6.3,0-8.54,2.54-8.54,12.05s2.24,12.05,8.54,12.05,8.41-2.66,8.41-12.05-2.06-12.05-8.41-12.05M262.23,52.29c-12.96,0-18.46-6.72-18.46-20.34s5.39-20.28,18.46-20.28,18.4,6.6,18.4,20.28-5.33,20.34-18.4,20.34"/>
    </g>
    <g>
      <polygon className="cls-1" points="92.16 20.18 41.5 20.18 44.2 12.33 94.86 12.33 92.16 20.18"/>
      <polygon className="cls-1" points="86.76 35.87 36.09 35.87 38.8 28.03 89.46 28.03 86.76 35.87"/>
      <polygon className="cls-1" points="81.36 51.57 30.7 51.57 33.4 43.72 84.06 43.72 81.36 51.57"/>
    </g>
  </Box>
);

const DominicSystemsLogo = () => (
  <Box
    component="img"
    src="/dominic-systems-logo.svg"
    alt="Dominic Systems Limited Logo"
    role="img"
    aria-label="Dominic Systems Limited - CRM Integration and ERP Solutions Partner"
    sx={{
      width: { xs: '180px', sm: '200px', md: '220px' },
      height: { xs: '41px', sm: '45px', md: '50px' },
      display: 'block',
      objectFit: 'contain',
      filter: 'brightness(1.1) contrast(1.05)',
    }}
  />
);

export default function RegisterPage() {
  const router = useRouter();
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
    <Box
      sx={{
        minHeight: '100vh',
        background: 'var(--dark-green)',
        position: 'relative',
        overflow: 'hidden',

      }}
    >
      {/* Header with Logos */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          pt: { xs: 2, md: 3 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          {/* Back Button and Dominic Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => router.push('/')}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Back to Home
            </Button>
            <DominicSystemsLogo />
          </Box>

          {/* ACCSO Logo */}
          <AccsoLogo />
        </Box>
      </Box>

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, pb: 6 }}>
        {/* Main Registration Card */}
        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <CardContent sx={{ p: { xs: 4, md: 6 } }}>
            {/* Header */}
            <Box textAlign="center" mb={6}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  mb: 2,
                  color: 'var(--neon-green-on-white)',
                }}
              >
                Register for Training
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: '#444444',
                  fontWeight: 400,
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.4,
                }}
              >
                Transform Your Enterprise Team Into AI-Native Engineers
              </Typography>
            </Box>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <Alert 
                severity="success" 
                icon={<CheckCircle />} 
                sx={{ 
                  mb: 4,
                  borderRadius: 2,
                  '& .MuiAlert-message': {
                    fontSize: '1.1rem',
                  }
                }}
              >
                {submitMessage}
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert 
                severity="error" 
                icon={<ErrorIcon />} 
                sx={{ 
                  mb: 4,
                  borderRadius: 2,
                  '& .MuiAlert-message': {
                    fontSize: '1.1rem',
                  }
                }}
              >
                {submitMessage}
              </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Section 1: Personal Information */}
              <Card 
                variant="outlined" 
                sx={{ 
                  mb: 4, 
                  border: '2px solid rgba(0, 203, 117, 0.3)',
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1.5,
                      color: 'var(--neon-green-on-white)',
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    <Person />
                    Personal Information
                  </Typography>

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
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                              },
                              '& .MuiInputLabel-root': {
                                color: '#666666',
                              },
                              '& .MuiOutlinedInput-input': {
                                color: '#333333',
                              },
                            }}
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
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                              },
                              '& .MuiInputLabel-root': {
                                color: '#666666',
                              },
                              '& .MuiOutlinedInput-input': {
                                color: '#333333',
                              },
                            }}
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
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                              },
                              '& .MuiInputLabel-root': {
                                color: '#666666',
                              },
                              '& .MuiOutlinedInput-input': {
                                color: '#333333',
                              },
                            }}
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
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                              },
                              '& .MuiInputLabel-root': {
                                color: '#666666',
                              },
                              '& .MuiOutlinedInput-input': {
                                color: '#333333',
                              },
                            }}
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
                </CardContent>
              </Card>

              {/* Section 2: Professional Background */}
              <Card 
                variant="outlined" 
                sx={{ 
                  mb: 4, 
                  border: '2px solid rgba(0, 203, 117, 0.3)',
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1.5,
                      color: 'var(--neon-green-on-white)',
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    <Business />
                    Professional Background
                  </Typography>

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
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                              },
                              '& .MuiInputLabel-root': {
                                color: '#666666',
                              },
                              '& .MuiOutlinedInput-input': {
                                color: '#333333',
                              },
                            }}
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
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                              },
                              '& .MuiInputLabel-root': {
                                color: '#666666',
                              },
                              '& .MuiOutlinedInput-input': {
                                color: '#333333',
                              },
                            }}
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
                              sx={{
                                borderRadius: 2,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                              }}
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
                </CardContent>
              </Card>

              {/* Section 3: Course Interests */}
              <Card 
                variant="outlined" 
                sx={{ 
                  mb: 4, 
                  border: '2px solid rgba(0, 203, 117, 0.3)',
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: 'var(--neon-green-on-white)',
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    Course Interests
                  </Typography>

                  <Controller
                    name="interests"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Box>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            mb: 3,
                            color: '#555555',
                            fontWeight: 500,
                          }}
                        >
                          Select the topics you&apos;re most interested in learning:
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3 }}>
                          {courseInterests.map((interest) => (
                            <Chip
                              key={interest}
                              label={interest}
                              clickable
                              color={selectedInterests.includes(interest) ? 'primary' : 'default'}
                              variant={selectedInterests.includes(interest) ? 'filled' : 'outlined'}
                              onClick={() => handleInterestToggle(interest, value || '', onChange)}
                              sx={{
                                fontSize: '0.9rem',
                                height: 40,
                                backgroundColor: selectedInterests.includes(interest) 
                                  ? 'var(--neon-green-on-white)' 
                                  : 'rgba(255, 255, 255, 0.9)',
                                color: selectedInterests.includes(interest) 
                                  ? '#ffffff' 
                                  : '#333333',
                                border: selectedInterests.includes(interest) 
                                  ? '1px solid var(--neon-green-on-white)' 
                                  : '1px solid #cccccc',
                                '&:hover': {
                                  transform: 'translateY(-1px)',
                                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                                  backgroundColor: selectedInterests.includes(interest) 
                                    ? '#009e5e' 
                                    : 'rgba(255, 255, 255, 1)',
                                },
                                transition: 'all 0.2s ease-in-out',
                              }}
                            />
                          ))}
                        </Box>

                        {selectedInterests.length > 0 && (
                          <Typography 
                            variant="body2" 
                            sx={{
                              color: '#666666',
                              fontWeight: 500,
                            }}
                          >
                            Selected: {selectedInterests.join(', ')}
                          </Typography>
                        )}
                      </Box>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Section 4: Additional Information */}
              <Card 
                variant="outlined" 
                sx={{ 
                  mb: 6, 
                  border: '2px solid rgba(0, 203, 117, 0.3)',
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: 'var(--neon-green-on-white)',
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    Additional Information
                  </Typography>

                  <Controller
                    name="source"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="How did you hear about this course? (Optional)"
                        multiline
                        rows={3}
                        error={!!errors.source}
                        helperText={errors.source?.message}
                        placeholder="e.g., Social media, colleague recommendation, web search..."
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          },
                          '& .MuiInputLabel-root': {
                            color: '#666666',
                          },
                          '& .MuiOutlinedInput-input': {
                            color: '#333333',
                          },
                        }}
                      />
                    )}
                  />
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Box textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting || !isValid}
                  sx={{ 
                    minWidth: 280, 
                    py: 2,
                    px: 4,
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    background: 'var(--neon-green-on-white)',
                    color: '#fff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                    '&:hover': {
                      background: 'var(--techno-green)',
                      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                      transform: 'translateY(-2px)',
                    },
                    '&:active': {
                      transform: 'translateY(0)',
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <CircularProgress size={24} sx={{ mr: 2, color: '#003c3c' }} />
                      Registering Your Team...
                    </>
                  ) : (
                    'Register Your Team Now'
                  )}
                </Button>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 3,
                    color: '#666666',
                    fontStyle: 'italic',
                    fontWeight: 500,
                  }}
                >
                  Transform your enterprise team into AI-Native engineers in just 2-3 days
                </Typography>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}