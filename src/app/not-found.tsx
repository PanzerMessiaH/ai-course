'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '24px',
      fontFamily: 'var(--font-source-sans-3), sans-serif',
    }}>
      <h1 style={{ 
        fontSize: '6rem', 
        fontWeight: 700, 
        margin: '0 0 16px 0',
        background: 'linear-gradient(135deg, #00cb75 0%, #2dfa87 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        404
      </h1>
      <h2 style={{ 
        margin: '0 0 16px 0',
        fontSize: '2rem',
        fontWeight: 600,
        color: '#333',
      }}>
        Page Not Found
      </h2>
      <p style={{ 
        margin: '0 0 32px 0', 
        maxWidth: '500px',
        color: '#666',
        fontSize: '1.1rem',
        lineHeight: 1.6,
      }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/" 
        style={{
          background: 'linear-gradient(135deg, #00cb75 0%, #2dfa87 100%)',
          color: '#003c3c',
          fontWeight: 600,
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
          display: 'inline-block',
        }}
      >
        Return Home
      </Link>
    </div>
  );
} 