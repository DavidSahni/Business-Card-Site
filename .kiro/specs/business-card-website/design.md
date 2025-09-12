# Design Document

## Overview

The business card website will be a single-page React application featuring a centered card layout with clean typography and modern styling. The design emphasizes simplicity, professionalism, and responsive behavior across all devices. The site will use Tailwind CSS for styling and focus on fast loading times with optimized assets.

## Architecture

### Component Structure
```
App
├── BusinessCard (main container)
│   ├── ProfileSection (name, title, photo)
│   ├── ContactInfo (email, phone, location)
│   └── Links (professional and portfolio links)
└── Layout (background, centering)
```

### Technology Stack
- **Frontend Framework**: React with Vite
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: React Icons library for link icons
- **Fonts**: Google Fonts (Inter or similar modern font)
- **Build Tool**: Vite for fast development and optimized builds

## Components and Interfaces

### BusinessCard Component
**Purpose**: Main container component that orchestrates the business card layout

**Props**: 
```typescript
interface BusinessCardProps {
  profile: {
    name: string;
    title: string;
    photo?: string;
  };
  contact: {
    email: string;
    location: string;
    company?: string;
  };
  links: {
    personalLinkedIn?: string;
    companyLinkedIn?: string;
    companyWebsite?: string;
  };
}
```

### ProfileSection Component
**Purpose**: Displays name, professional title, and optional profile photo

**Features**:
- Responsive typography scaling
- Optional circular profile image
- Proper heading hierarchy (h1 for name, h2 for title)

### ContactInfo Component
**Purpose**: Shows contact details with interactive elements

**Features**:
- Clickable email (mailto: links) to open default email client
- Location display with appropriate icon
- Company information display (integrated with title or as separate field)
- Copy-friendly text formatting with easy text selection and optimized user-select CSS properties
- Clear visual separation between different contact information

### Links Component
**Purpose**: Displays professional and portfolio links

**Features**:
- Icon-based links with hover effects and visual feedback
- Opens links in new tabs for external navigation
- Accessible with proper ARIA labels
- Responsive icon sizing
- Includes personal LinkedIn, company LinkedIn, and company website links

## Data Models

### Profile Data Structure
```javascript
const profileData = {
  profile: {
    name: "John Doe",
    title: "Full Stack Developer",
    photo: "/profile-photo.jpg" // optional
  },
  contact: {
    email: "john.doe@example.com",
    location: "San Francisco, CA",
    company: "Acme Corporation"
  },
  links: {
    personalLinkedIn: "https://linkedin.com/in/johndoe",
    companyLinkedIn: "https://linkedin.com/company/acme-corp",
    companyWebsite: "https://acme-corp.com"
  }
};
```

## Visual Design

### Layout
- **Card Design**: Centered card with subtle shadow and rounded corners
- **Dimensions**: Max width of 400px on desktop, full width with margins on mobile
- **Spacing**: Consistent 1.5rem (24px) padding throughout
- **Alignment**: Center-aligned text with left-aligned contact details
- **Text Selection**: Optimized user-select CSS properties for easy copying of contact information
- **Information Hierarchy**: Logical grouping of name, title, company, and contact details

### Color Scheme
- **Background**: Light gray gradient (gray-50 to gray-100)
- **Card Background**: Pure white with subtle shadow
- **Primary Text**: Dark gray (gray-900)
- **Secondary Text**: Medium gray (gray-600)
- **Accent Color**: Blue (blue-600) for links and interactive elements

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Name**: 2xl font size, font-bold
- **Title**: lg font size, font-medium, gray-600
- **Contact Info**: base font size, font-normal with clear formatting for easy copying
- **Company Info**: sm font size, font-medium, positioned near title or contact section
- **Hierarchy**: Clear visual hierarchy with appropriate font weights and logical information grouping

### Responsive Breakpoints
- **Mobile** (< 640px): Full width with 1rem margins, stacked layout
- **Tablet** (640px - 1024px): Centered card, optimized spacing
- **Desktop** (> 1024px): Centered card with maximum width constraint

## Error Handling

### Missing Data Handling
- **Optional Fields**: Gracefully hide missing links or profile photo
- **Required Fields**: Display placeholder text for missing required information
- **Image Loading**: Fallback to initials or default avatar if profile photo fails

### Network Issues
- **Font Loading**: Fallback to system fonts if Google Fonts fail to load
- **Icon Loading**: Fallback to text labels if icons fail to load

## Testing Strategy

### Unit Testing
- **Component Rendering**: Test that all components render with provided props
- **Link Functionality**: Verify mailto: links are generated correctly (Requirement 5.1)
- **External Links**: Test that social/professional links open in new tabs (Requirement 2.2)
- **Hover Effects**: Verify visual feedback on social icons (Requirement 2.3)
- **Responsive Behavior**: Test component behavior at different viewport sizes (Requirement 3)
- **Accessibility**: Test keyboard navigation and screen reader compatibility

### Integration Testing
- **Data Flow**: Test that profile data flows correctly through component hierarchy
- **User Interactions**: Test click events on links and contact information (Requirements 2.2, 5.1)
- **Responsive Layout**: Test layout behavior across breakpoints (Requirements 3.1-3.4)
- **Professional Links**: Verify personal LinkedIn, company LinkedIn, and company website display correctly (Requirement 2.6)

### Performance Testing
- **Load Time**: Ensure page loads within 2 seconds (Requirement 1.4)
- **Asset Optimization**: Verify images and fonts are properly optimized (Requirement 4.3)
- **Bundle Size**: Keep JavaScript bundle under 100KB
- **Responsive Performance**: Test smooth layout adaptation across viewport changes (Requirement 3.4)

## Accessibility Considerations

### WCAG Compliance
- **Color Contrast**: Ensure 4.5:1 contrast ratio for all text
- **Focus Indicators**: Visible focus states for all interactive elements
- **Alt Text**: Proper alt text for profile images
- **Semantic HTML**: Use proper heading hierarchy and semantic elements

### Screen Reader Support
- **ARIA Labels**: Descriptive labels for professional links
- **Landmark Roles**: Proper use of main, navigation, and complementary roles
- **Skip Links**: Consider skip navigation for keyboard users

## Performance Optimization

### Asset Optimization
- **Image Compression**: Optimize profile photos for web delivery (WebP format with fallbacks)
- **Font Loading**: Use font-display: swap for Google Fonts to prevent layout shift
- **CSS Purging**: Remove unused Tailwind classes in production build
- **Code Splitting**: Minimal JavaScript bundle with Vite optimization
- **Load Time Target**: Ensure complete page load within 2 seconds (Requirement 1.4)
- **Critical CSS**: Inline critical styles to prevent render-blocking

### Caching Strategy
- **Static Assets**: Long-term caching for images and fonts
- **HTML/CSS/JS**: Appropriate cache headers for core files
- **Service Worker**: Consider for offline functionality (optional enhancement)