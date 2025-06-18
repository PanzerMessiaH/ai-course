# AI-Native Agentic Programming Bootcamp

A comprehensive landing page for the AI-Native Agentic Programming Bootcamp, showcasing modern web development practices with Next.js, React, and Material UI.

## 🚀 Live Demo

**Production Site**: [https://panzermessiah.github.io/ai-course/](https://panzermessiah.github.io/ai-course/)

The site is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the main branch.

## 🛠 Technology Stack

- **Framework**: Next.js 15.3.3 with App Router
- **UI Library**: Material UI v7.1.1
- **Language**: TypeScript 5.8.3
- **Styling**: Emotion (CSS-in-JS)
- **Build System**: Next.js static export
- **Deployment**: GitHub Pages with GitHub Actions
- **SEO**: Comprehensive optimization with structured data

## 📦 Features

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Material UI components
- **Atmospheric Effects**: Hero section with dynamic glow effects
- **Professional Typography**: Consistent design system
- **Accessibility**: WCAG compliant components

### 🔍 SEO Optimization
- **Meta Tags**: Comprehensive title templates and descriptions
- **Open Graph**: Full social media sharing optimization
- **Structured Data**: JSON-LD schemas for search engines
- **Sitemap**: Dynamic XML sitemap generation
- **Performance**: Optimized bundle sizes (14.2kB main page)

### 🏗 Technical Excellence
- **Static Export**: Pre-rendered for optimal performance
- **TypeScript**: Full type safety and developer experience
- **Build Optimization**: Efficient bundling and code splitting
- **CI/CD**: Automated deployment pipeline

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended: v18.17.0 or later)
- npm 9+ or yarn 1.22+

### Installation

```bash
# Clone the repository
git clone https://github.com/PanzerMessiaH/ai-course.git
cd ai-course

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in development mode.

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server (after build)
npm start

# Lint code
npm run lint
```

## 📁 Project Structure

```
ai-course/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with SEO
│   │   ├── page.tsx           # Home page
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   └── robots.ts          # SEO robots.txt
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AuthoritySection.tsx
│   │   │   ├── ProblemSolutionSection.tsx
│   │   │   ├── ProgramDetailsSection.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── shared/            # Reusable components
│   │       ├── CTAButton.tsx
│   │       ├── MaxWidth.tsx
│   │       ├── Section.tsx
│   │       └── StructuredData.tsx
│   ├── config/
│   │   └── seo.ts             # SEO configuration
│   └── theme/
│       ├── index.ts           # Material UI theme
│       └── ThemeProvider.tsx  # Theme context
├── public/                     # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment
└── out/                       # Static export output
```

## 🚀 Deployment

### Automatic Deployment

The site automatically deploys to GitHub Pages when:
- Changes are pushed to the `main` branch
- The GitHub Actions workflow runs successfully
- All build steps complete without errors

### Manual Deployment

To deploy manually:

```bash
# Build the static site
npm run build

# The output will be in the 'out' directory
# This directory is automatically deployed by GitHub Actions
```

### Deployment Configuration

The deployment is configured in `.github/workflows/deploy.yml`:
- **Trigger**: Push to main branch or manual dispatch
- **Build Environment**: Ubuntu latest with Node.js 18
- **Build Process**: `npm ci && npm run build`
- **Deployment Target**: GitHub Pages
- **Static Files**: Served from `/out` directory

## 🔧 Configuration

### Next.js Configuration

Key settings in `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',        // Static site generation
  trailingSlash: true,     // GitHub Pages compatibility
  images: {
    unoptimized: true,     // Static export compatibility
  },
};
```

### SEO Configuration

SEO settings are centralized in `src/config/seo.ts` and include:
- Meta tags and Open Graph data
- Structured data schemas
- Sitemap configuration
- Social media optimization

## 📊 Performance

Current performance metrics:
- **Page Size**: 14.2kB (main page)
- **First Load JS**: 152kB
- **Build Time**: ~1 second
- **SEO Score**: Optimized for search engines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Material UI components consistently
- Maintain responsive design principles
- Ensure accessibility compliance
- Test builds before submitting PRs

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For questions or support:
- Create an issue on GitHub
- Contact the development team
- Check the project documentation

---

**Built with ❤️ using Next.js, React, and Material UI**