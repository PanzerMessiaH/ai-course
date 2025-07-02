# System Patterns

This document outlines the system patterns used in the project.

## Content Management Patterns

### Content Transcription & Integration Workflow
**Pattern**: Structured content extraction and component integration
**Implementation**: 
- Extract content from React components into logical, editable blocks
- Organize content with clear block numbering and component file mapping
- Provide user-friendly editing interface via markdown files
- Apply content changes back to source components
- Document both transcription deliverable and applied changes

**Files**: 
- Content transcription: `landing-page-content-blocks.md`
- Source components: `src/components/sections/*.tsx`
- Archive: Comprehensive task documentation with applied changes

### Component-Content Separation
**Pattern**: Maintainable content editing without direct code changes
**Benefits**:
- Non-technical users can edit content via markdown files
- Clear mapping between content blocks and component locations
- Version control friendly content management
- Reduced risk of breaking component functionality during content updates

## Architecture Patterns

### Next.js 15 + React 19 Modern Stack
**Framework**: Next.js 15 with App Router
**UI Library**: Material UI v7 with comprehensive theming
**TypeScript**: Full type safety across application
**Deployment**: Static export optimized for GitHub Pages

### Component Architecture
**Pattern**: Modular section-based components
**Structure**:
```
src/components/
├── sections/          # Page section components
│   ├── HeroSection.tsx
│   ├── AuthoritySection.tsx
│   ├── ProblemSolutionSection.tsx
│   ├── ProgramDetailsSection.tsx
│   └── BenefitsSection.tsx
└── shared/            # Reusable components
    ├── CTAButton.tsx
    ├── MaxWidth.tsx
    ├── Section.tsx
    └── index.ts
```

### Design System Patterns
**Theme Provider**: Centralized Material UI theme management
**Responsive Design**: Mobile-first approach with breakpoint-based responsive grid
**Component Variants**: Consistent styling patterns across components
**Color System**: Semantic color tokens for primary, secondary, and status colors

## Development Workflow Patterns

### Memory Bank System
**Pattern**: Persistent context and task management
**Structure**:
- `tasks.md`: Active task tracking and status
- `activeContext.md`: Current focus and immediate context
- `progress.md`: Historical completion tracking
- `archive/`: Comprehensive task documentation
- Task lifecycle: Active → Complete → Archived

### Level-Based Task Classification
**Level 1**: Quick bug fixes and minor enhancements
**Level 2**: Simple enhancements requiring planning
**Level 3**: Intermediate features with design decisions
**Level 4**: Complex system changes with architecture impact

### VAN Mode Operations
**Pattern**: Structured initialization and validation
**Checkpoints**:
- Platform Detection: OS compatibility and command adaptation
- Memory Bank Verification: File structure and content validation
- Complexity Determination: Task routing based on scope and impact
- Technical Validation: Pre-implementation verification (VAN QA mode)

## Deployment Patterns

### GitHub Pages Static Export
**Configuration**: Next.js static export with GitHub Actions CI/CD
**Asset Management**: Public directory optimization for static hosting
**SEO Integration**: Dynamic robots.txt and sitemap.xml generation
**PWA Support**: Manifest and service worker configuration

### Performance Optimization
**Bundle Optimization**: Strategic code splitting and dynamic imports
**Asset Optimization**: SVG icons and optimized image formats
**Accessibility**: WCAG 2.1 AA compliance with semantic HTML and ARIA labels

## Quality Assurance Patterns

### Four-Point Validation System
1. **Dependency Verification**: Package compatibility and installation
2. **Configuration Validation**: File format and platform compatibility  
3. **Environment Validation**: Build tools and permissions verification
4. **Minimal Build Test**: Core functionality validation

### Documentation Standards
**Archive Pattern**: Complete task documentation with:
- Implementation details and code changes
- Reflection on process and lessons learned
- Performance metrics and success criteria
- Integration with existing system patterns

**Memory Bank Updates**: Synchronized documentation reflecting:
- Current project state and recent changes
- Applied content modifications and file updates
- Process improvements and pattern evolution 