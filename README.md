# Business Card Website

A modern, responsive business card website built with React, Vite, and Tailwind CSS. Features professional styling, accessibility compliance, and optimal performance.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for mobile, tablet, and desktop
- **Professional Styling**: Clean, modern design with proper typography and color schemes
- **Accessibility Compliant**: WCAG AA compliance with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Fast loading with optimized assets and critical CSS inlining
- **Component-Based Architecture**: Modular React components for easy maintenance and reusability

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Professional icon library
- **Vitest** - Fast unit testing framework
- **Inter Font** - Professional typography

## Project Structure

```
src/
├── components/          # React components
│   ├── Layout.jsx      # Main layout wrapper
│   ├── BusinessCard.jsx # Main business card component
│   ├── ProfileSection.jsx # Name, title, and photo
│   ├── ContactInfo.jsx # Email, location, company
│   └── Links.jsx       # Professional links
├── styles/             # CSS and design system
│   └── design-system.css # Professional color scheme and typography
├── utils/              # Utility functions
│   ├── dataHelpers.js  # Data manipulation helpers
│   ├── responsive.js   # Responsive design utilities
│   ├── performance.js  # Performance optimization
│   └── accessibility.js # Accessibility utilities
├── test/               # Test files
├── data.js            # Sample data and validation
├── types.js           # TypeScript-style interfaces
└── constants.js       # Application constants
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run lint` - Run ESLint

## Customization

### Data Structure

Update the profile data in `src/data.js`:

```javascript
export const sampleProfileData = {
  profile: {
    name: "Your Name",
    title: "Your Title",
    photo: "/path-to-photo.jpg" // Optional
  },
  contact: {
    email: "your.email@example.com",
    location: "Your Location",
    company: "Your Company" // Optional
  },
  links: {
    personalLinkedIn: "https://linkedin.com/in/yourprofile",
    companyLinkedIn: "https://linkedin.com/company/yourcompany", // Optional
    companyWebsite: "https://yourcompany.com" // Optional
  }
}
```

### Styling

The design system is located in `src/styles/design-system.css` and uses CSS custom properties for easy customization:

#### Design System Classes
- `.business-card` - Main card styling with shadows and borders
- `.heading-primary` - Primary heading (name) styling
- `.heading-secondary` - Secondary heading (title) styling  
- `.body-text` - Body text styling
- `.small-text` - Small text styling
- `.link-primary` - Primary link styling with hover effects
- `.icon-interactive` - Interactive icon styling with hover animations
- `.profile-photo` - Profile photo styling with circular border

#### CSS Custom Properties
```css
:root {
  /* Colors */
  --color-primary: #1e40af;
  --color-text-primary: #111827;
  --color-text-secondary: #4b5563;
  
  /* Typography */
  --font-size-3xl: 1.875rem;
  --font-weight-bold: 700;
  
  /* Shadows */
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

### Layout Variants

The Layout component supports three variants:

- `default` - Blue to indigo gradient
- `professional` - Gray to slate gradient  
- `modern` - Blue to purple gradient

## Performance

The application is optimized for performance:

- **Bundle Size**: ~165KB total (gzipped: ~53KB)
- **Load Time**: < 2 seconds on 3G networks
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Font Loading**: Optimized with `font-display: swap`
- **Image Loading**: WebP support with fallbacks

## Accessibility

- **WCAG AA Compliant**: 4.5:1 color contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user preferences

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Testing

The project includes comprehensive tests:

- **Unit Tests**: Component functionality and utilities
- **Integration Tests**: Component interactions
- **Accessibility Tests**: ARIA labels and keyboard navigation
- **Performance Tests**: Bundle size and load times

Run tests with:
```bash
npm run test
```

## Deployment

Build the project for production:

```bash
npm run build
```

The `dist` folder contains the optimized production build ready for deployment to any static hosting service.

## License

MIT License - see LICENSE file for details

## Attribution:
Favicon courtesy of Twemoji: https://github.com/twitter/twemoji