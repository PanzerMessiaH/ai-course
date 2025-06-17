# AI-Native Agentic Coding Bootcamp Landing Page

A professional, responsive landing page for the AI-Native Agentic Coding Bootcamp - Enterprise Software Development Training program. Built with modern web technologies and optimized for performance and conversion.

## 🚀 Project Overview

This single-page application serves as the primary marketing and enrollment portal for ACCSO's enterprise AI training program. The page features a comprehensive user journey from initial value proposition through detailed course information to enrollment conversion.

### Key Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern SCSS Architecture**: Modular, maintainable stylesheets with CSS custom properties
- **Performance Optimized**: Compressed CSS, optimized fonts, and minimal dependencies
- **Professional UI/UX**: Enterprise-focused design with clear conversion flow
- **Accessible**: Semantic HTML and proper accessibility considerations

## 🛠 Technology Stack

- **HTML5**: Semantic markup with proper SEO optimization
- **SCSS/CSS3**: Modern CSS with custom properties and responsive design
- **Vite**: Modern build tool with HMR (Hot Module Replacement)
- **Sass**: CSS preprocessing for modular, maintainable styles
- **Node.js**: Build tooling and dependency management
- **Legacy Support**: Automatic legacy browser compatibility via @vitejs/plugin-legacy

## 📦 Installation & Setup

### Prerequisites

- Node.js (version 14.0.0 or higher)
- npm (version 6.0.0 or higher)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-course.git
   cd ai-course
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8080`
   - Enjoy instant Hot Module Replacement (HMR) for development

## 🔧 Development Workflow

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Vite development server with HMR |
| `npm run dev` | Alias for `npm start` (Vite dev server) |
| `npm run build` | Create production build with Vite |
| `npm run preview` | Preview production build locally |
| `npm run start:legacy` | Legacy development server (live-server + SCSS watch) |
| `npm run build:legacy` | Legacy build process (SCSS compilation + file copy) |
| `npm run build:css` | Compile SCSS to CSS only (legacy) |
| `npm run watch:css` | Watch SCSS files and recompile on changes (legacy) |
| `npm run clean` | Clean the dist directory |

### Development Process

1. **CSS Development**: Edit SCSS files in `src/scss/` - changes appear instantly with HMR
2. **HTML Changes**: Modify `index.html` in project root - hot reloaded automatically
3. **JavaScript**: Entry point at `src/main.js` imports SCSS and handles module loading
4. **Testing**: Use responsive design mode to test different screen sizes

### Project Structure

```
ai-course/
├── src/
│   ├── main.js         # Vite entry point (imports SCSS)
│   └── scss/           # SCSS source files
│       ├── app/        # Main application styles
│       └── components/ # Individual component styles
├── dist/               # Build output (auto-generated)
│   ├── index.html      # Production HTML
│   ├── styles.css      # Compiled CSS
│   ├── main.js         # Compiled JavaScript
│   └── *-legacy.js     # Legacy browser support files
├── memory-bank/        # Project documentation and planning
├── index.html          # Source HTML file
├── vite.config.js      # Vite configuration
├── package.json        # Project configuration
└── README.md          # This file
```

## 🚀 Deployment

### Production Build

Create a production-ready build:

```bash
npm run build
```

This will:
- Clean the `dist/` directory
- Compile and optimize all assets with Vite
- Generate modern JavaScript with legacy fallbacks
- Create a complete deployment package with optimal performance

### Deployment Package

After running the build command, the `dist/` directory contains everything needed for deployment:

- `index.html` - Main HTML file with optimized asset references
- `styles.css` - Compiled and compressed CSS
- `main.js` - Modern JavaScript bundle
- `*-legacy.js` - Legacy browser compatibility files

### Hosting Options

The site can be deployed to any static hosting service:

- **Netlify**: Connect repository for automatic deployments
- **Vercel**: Zero-config deployment with Git integration
- **GitHub Pages**: Free hosting for GitHub repositories
- **AWS S3**: Static website hosting with CloudFront CDN
- **Traditional Web Hosting**: Upload `dist/` contents via FTP

### Manual Upload

For manual deployment:
1. Run `npm run build`
2. Upload contents of `dist/` directory to your web server
3. Ensure `index.html` is set as the default document

## 🎨 Customization

### Styling

- **Colors**: Modify CSS custom properties in `src/scss/base/_colors.scss`
- **Typography**: Update font settings in `src/scss/base/_typography.scss`
- **Layout**: Adjust spacing and layout in `src/scss/base/_layout.scss`
- **Components**: Individual component styles in `src/scss/components/`

### Content

- **Main Content**: Edit `index.html` directly
- **Meta Tags**: Update SEO information in HTML head section
- **Images**: Replace placeholder images with your assets

### Responsive Breakpoints

| Breakpoint | Screen Size | Description |
|------------|-------------|-------------|
| Mobile | 320-767px | Phone devices |
| Tablet | 768-1023px | Tablet devices |
| Desktop | 1024px+ | Desktop and laptop screens |
| XL Desktop | 1200px+ | Large desktop displays |

## 🔍 Performance Optimization

### Current Optimizations

- **CSS Compression**: Production builds use compressed CSS
- **Font Loading**: Optimized Google Fonts loading with preconnect
- **No JavaScript**: Pure HTML/CSS for maximum performance
- **Semantic HTML**: Proper markup for accessibility and SEO

### Recommended Enhancements

- **Image Optimization**: Compress and serve images in modern formats
- **CDN Implementation**: Serve assets from a Content Delivery Network
- **Caching Headers**: Configure proper cache headers for static assets
- **Minification**: Further HTML minification for production

## 🧪 Testing

### Manual Testing Checklist

- [ ] Test on different screen sizes (mobile, tablet, desktop)
- [ ] Verify all links and buttons work correctly
- [ ] Check form functionality and validation
- [ ] Test in different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Validate HTML and CSS
- [ ] Check loading performance

### Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

This is a private project. For internal team contributions:

1. Create a feature branch from `main`
2. Make your changes following the established patterns
3. Test thoroughly across different screen sizes
4. Submit a pull request with a clear description

## 📞 Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team
- Refer to the project documentation in `memory-bank/`

---

**Built with ❤️ for enterprise AI training excellence**
