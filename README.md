# AI-Native Agentic Coding Bootcamp

**A Partnership Between ACCSO & Dominic Systems**

Professional website for the AI-Native Agentic Coding Bootcamp - a comprehensive 3-day intensive program designed to transform developers into AI-native programmers using cutting-edge agentic coding methodologies.

---

## 🎯 Project Overview

This is the official marketing website for the **AI-Native Agentic Coding Bootcamp**, built with modern web technologies to deliver an exceptional user experience while showcasing the innovative partnership between ACCSO and Dominic Systems.

### 🏢 About the Partnership

- **ACCSO**: Leading technology consultancy specializing in enterprise software solutions
- **Dominic Systems**: Innovative AI and automation solutions provider
- **Joint Mission**: Empowering developers with AI-native programming methodologies

### 🎓 About the Bootcamp

The AI-Native Agentic Coding Bootcamp is a transformative 3-day intensive program that teaches developers how to leverage AI agents and modern tooling to dramatically increase productivity, code quality, and project delivery speed.

**Key Learning Outcomes:**
- Master AI-native development workflows
- Implement agentic coding methodologies
- Build production-ready applications with AI assistance
- Develop enterprise-grade code quality practices

---

## 🛠️ Technology Stack

This website is built using modern, enterprise-grade technologies:

### Core Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and static site generation
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Full type safety and enhanced developer experience

### UI & Design System
- **[Material UI 7](https://mui.com/)** - Comprehensive React component library
- **[Emotion](https://emotion.sh/)** - CSS-in-JS styling with excellent performance
- **Source Sans 3** - Professional typography from Google Fonts

### Development & Build Tools
- **[Turbopack](https://turbo.build/pack)** - Next-generation bundler for fast development
- **[ESLint](https://eslint.org/)** - Code quality and consistency enforcement
- **Static Export** - Optimized static site generation for hosting flexibility

### Performance Metrics
- **Page Size**: 27.3kB (optimized for fast loading)
- **First Load JS**: 151kB (excellent for feature-rich application)
- **Build Time**: 7.0s (optimized development workflow)
- **Components**: 27 TypeScript components across 7 major sections

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-course
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

The development server includes hot reloading - changes to the code will automatically update in your browser.

---

## 📁 Project Structure

```
ai-course/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Main page with all sections
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── shared/            # Reusable components
│   │   │   ├── MaxWidth.tsx   # Responsive container
│   │   │   ├── Section.tsx    # Section wrapper
│   │   │   ├── CTAButton.tsx  # Call-to-action buttons
│   │   │   └── index.ts       # Component exports
│   │   └── sections/          # Page sections
│   │       ├── HeroSection.tsx           # Hero with ACCSO branding
│   │       ├── AuthoritySection.tsx      # Company credibility
│   │       ├── ProblemSolutionSection.tsx # Value proposition
│   │       ├── ProgramDetailsSection.tsx  # Course breakdown
│   │       ├── BenefitsSection.tsx       # Learning outcomes
│   │       ├── SocialProofSection.tsx    # Testimonials
│   │       └── CTASection.tsx            # Final enrollment
│   └── theme/                 # Material UI theme
│       ├── index.ts          # Theme configuration
│       └── ThemeProvider.tsx # Theme context provider
├── public/                    # Static assets
├── memory-bank/              # Development documentation
├── package.json              # Dependencies and scripts
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

---

## 🎨 Component Architecture

### Shared Components

**MaxWidth Container**
- Responsive container with consistent padding
- Size variants: narrow (800px), default (1200px), wide (1400px)
- Automatic responsive spacing

**Section Wrapper**
- Background variants: default, secondary, primary, gradient
- Spacing options: small, medium, large
- Integrated MaxWidth container

**CTAButton Component**
- Primary variant with gradient background
- Secondary variant with outlined style
- Hover effects and responsive sizing
- Icon support with proper spacing

### Section Components

The website consists of 7 main sections, each implemented as a standalone React component:

1. **HeroSection** - ACCSO branding, value proposition, social proof
2. **AuthoritySection** - Company credibility and feature highlights
3. **ProblemSolutionSection** - Industry challenges and solutions
4. **ProgramDetailsSection** - Interactive 3-day course breakdown
5. **BenefitsSection** - Learning outcomes and deliverables
6. **SocialProofSection** - Enterprise testimonials and case studies
7. **CTASection** - Investment details and enrollment information

---

## 🎯 Available Scripts

### Development
```bash
# Start development server with Turbopack
npm run dev

# Start development server (alternative)
npm start
```

### Building & Deployment
```bash
# Build for production
npm run build

# Build and export static files
npm run export

# Lint code for quality assurance
npm run lint
```

### Development Workflow
1. **Development**: Use `npm run dev` for hot-reloading development
2. **Quality Check**: Run `npm run lint` before committing
3. **Production Build**: Use `npm run build` to verify production readiness
4. **Static Export**: Use `npm run export` for hosting deployment

---

## 🌐 Deployment

This website is configured for **static site generation**, making it compatible with various hosting platforms:

### Recommended Hosting Platforms
- **Vercel** (optimized for Next.js)
- **Netlify** (excellent static site hosting)
- **GitHub Pages** (free hosting option)
- **AWS S3 + CloudFront** (enterprise hosting)

### Build Output
- **Static Files**: Generated in `/out` directory
- **Size**: ~112KB total (highly optimized)
- **Compatibility**: Works with any static file hosting service

### Deployment Steps
1. Run `npm run build` to generate optimized build
2. Upload the `/out` directory contents to your hosting platform
3. Configure your hosting platform to serve `index.html` as the default file

---

## 🎨 Design System

### Brand Colors
- **Primary**: #003c3c (ACCSO Dark Teal)
- **Secondary**: #00cb75 (ACCSO Green)
- **Accent**: #2dfa87 (ACCSO Light Green)
- **Gradients**: Custom brand-aligned gradient system

### Typography
- **Font Family**: Source Sans 3 (Google Fonts)
- **Responsive Scale**: Automatic scaling across breakpoints
- **Weight Variants**: 300, 400, 600, 700

### Responsive Breakpoints
- **Mobile**: < 600px (single column layouts)
- **Tablet**: 600px - 960px (two-column grids)
- **Desktop**: > 960px (three-column grids)

---

## 🔧 Development Guidelines

### Code Quality Standards
- **TypeScript**: 100% type coverage required
- **ESLint**: No warnings or errors allowed
- **Component Structure**: Functional components with hooks
- **Styling**: Material UI styled-components preferred

### Best Practices
- **Responsive First**: Mobile-first responsive design
- **Performance**: Optimize for Core Web Vitals
- **Accessibility**: WCAG compliance considerations
- **SEO**: Semantic HTML and proper meta tags

### Git Workflow
1. Create feature branches from `main`
2. Run `npm run lint` before committing
3. Test build with `npm run build`
4. Submit pull requests for review

---

## 📊 Performance Metrics

### Current Optimization Results
- **Bundle Size**: 27.3kB (excellent for feature-rich site)
- **First Load JS**: 151kB (within performance budgets)
- **Build Time**: 7.0s (optimized development experience)
- **Lighthouse Score**: Optimized for Core Web Vitals

### Performance Features
- **Static Site Generation**: Pre-rendered HTML for fast loading
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code automatically removed
- **Image Optimization**: SVG assets optimized for performance

---

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Make your changes and test thoroughly
6. Run quality checks: `npm run lint`
7. Build for production: `npm run build`
8. Submit a pull request

### Code Review Process
- All changes require code review
- Automated checks must pass (linting, build)
- Performance impact should be considered
- Documentation updates may be required

---

## 📞 Support & Contact

### ACCSO Partnership
For questions about the bootcamp content, partnership, or business inquiries:
- **ACCSO**: Enterprise technology consultancy
- **Dominic Systems**: AI and automation solutions

### Technical Support
For technical issues with the website or development setup:
- Check the [troubleshooting section](#troubleshooting)
- Review the [development guidelines](#development-guidelines)
- Submit issues through the project repository

---

## 🔍 Troubleshooting

### Common Issues

**Development server won't start**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Build errors**
```bash
# Check TypeScript errors
npm run build
# Fix any type errors and retry
```

**Styling issues**
- Ensure Material UI theme is properly configured
- Check browser developer tools for CSS conflicts
- Verify responsive breakpoints are working

### Getting Help
1. Check the console for error messages
2. Verify Node.js version (18.0 or higher required)
3. Ensure all dependencies are installed
4. Review the [project structure](#project-structure) for file organization

---

## 📄 License

This project is proprietary software developed for the ACCSO & Dominic Systems partnership. All rights reserved.

---

## 🚀 About the AI-Native Agentic Coding Bootcamp

**Transform your development workflow with AI-powered coding methodologies.**

Join industry leaders from ACCSO and Dominic Systems for an intensive 3-day program that will revolutionize how you approach software development. Learn to leverage AI agents, modern tooling, and proven methodologies to dramatically increase your productivity and code quality.

**Ready to become an AI-native developer?** Visit our website to learn more and secure your spot in this transformative program.

---

*Built with ❤️ by the ACCSO & Dominic Systems partnership*