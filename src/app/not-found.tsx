import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        p: 3,
      }}
    >
      <Typography variant="h1" component="h1" sx={{ mb: 2, fontSize: '6rem', fontWeight: 700 }}>
        404
      </Typography>
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '500px' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Typography>
      <Button
        component={Link}
        href="/"
        variant="contained"
        size="large"
        sx={{
          background: 'linear-gradient(135deg, #00cb75 0%, #2dfa87 100%)',
          color: '#003c3c',
          fontWeight: 600,
          '&:hover': {
            background: 'linear-gradient(135deg, #018e53 0%, #00cb75 100%)',
          },
        }}
      >
        Return Home
      </Button>
    </Box>
  );
} 