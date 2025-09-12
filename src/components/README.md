# Layout Components

This directory contains the layout components for the business card website.

## Layout Component

The main `Layout` component provides a centered card design with responsive background and styling.

### Features

- **Responsive gradient background** - Beautiful gradient backgrounds that adapt to different themes
- **Centered card layout** - Professional card design with proper spacing and alignment
- **Professional shadow effects** - Subtle shadows and borders for depth
- **Mobile-first responsive design** - Optimized for all screen sizes
- **Theme variants** - Support for different visual themes

### Usage

```jsx
import Layout from './components/Layout';

function App() {
  return (
    <Layout variant="professional">
      <div>Your content here</div>
    </Layout>
  );
}
```

### Props

- `children` (required) - The content to be rendered inside the layout
- `className` (optional) - Additional CSS classes to apply to the card
- `variant` (optional) - Theme variant: 'default', 'professional', or 'modern'

### Variants

- **default** - Blue to indigo gradient background
- **professional** - Gray to slate gradient background  
- **modern** - Blue to purple gradient background

## Additional Components

### LayoutContainer

A simpler container layout without card styling, useful for full-page layouts.

### CenteredLayout

A utility component for centering content, useful for loading states and error messages.

## Requirements Satisfied

- ✅ **Requirement 1.1** - Main layout wrapper with centered card design
- ✅ **Requirement 3.3** - Responsive background with gradient styling
- ✅ **Requirement 4.1** - Proper spacing and card shadow effects
- ✅ **Requirement 4.4** - Professional visual design with consistent styling