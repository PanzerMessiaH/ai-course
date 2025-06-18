import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { CustomThemeProvider } from "@/theme/ThemeProvider";
import "./globals.css";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-3",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: "AI-Native Agentic Programming Bootcamp | Enterprise Software Development Training",
    template: "%s | AI-Native Agentic Programming Bootcamp",
  },
  description: "Transform your enterprise team into AI-Native Engineers in just 2-3 days. Learn Agentic Programming methodologies from industry pioneers who've deployed AI-first systems at scale. Build enterprise-grade software without writing code.",
  keywords: [
    "AI-Native Programming",
    "Agentic Programming", 
    "Enterprise Software Development",
    "No-Code Development",
    "AI Programming Bootcamp",
    "ACCSO Training",
    "Software Engineering Training",
    "Enterprise AI Solutions",
    "AI-First Development",
    "Automated Programming",
    "Machine Learning Engineering",
    "Enterprise Training"
  ],
  authors: [{ name: "ACCSO & Dominic Systems", url: "https://accso.com" }],
  creator: "ACCSO & Dominic Systems",
  publisher: "ACCSO",
  
  // Robots and indexing directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph for social media sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-course.accso.com',
    siteName: 'AI-Native Agentic Programming Bootcamp',
    title: 'Transform Your Enterprise Team Into AI-Native Engineers in Just 2-3 Days',
    description: 'The definitive training in Agentic Programming - from the pioneers who\'ve deployed AI-first systems at scale. Build enterprise-grade software without writing code.',
    images: [
      {
        url: 'https://ai-course.accso.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-Native Agentic Programming Bootcamp - Transform Your Enterprise Team',
      },
    ],
  },
  
  // Twitter Cards for Twitter sharing
  twitter: {
    card: 'summary_large_image',
    site: '@accso',
    creator: '@accso',
    title: 'Transform Your Enterprise Team Into AI-Native Engineers',
    description: 'Learn Agentic Programming from industry pioneers. Build enterprise-grade software without writing code. 2-3 day intensive bootcamp.',
    images: ['https://ai-course.accso.com/twitter-image.jpg'],
  },
  
  // Category and classification
  category: 'Education',
  classification: 'Professional Training',
  
  // App-specific meta (for mobile)
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AI-Native Bootcamp',
  },
  
  // Additional SEO enhancements
  alternates: {
    canonical: 'https://ai-course.accso.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#003c3c" />
        <meta name="msapplication-TileColor" content="#003c3c" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/ai-course/manifest.json" />
      </head>
      <body className={sourceSans3.variable}>
        <CustomThemeProvider>
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
