/**
 * Layout component - Main wrapper for the business card website
 * Provides centered card design with responsive background and styling
 * 
 * Features:
 * - Responsive gradient background
 * - Centered card layout with proper spacing
 * - Professional shadow effects and borders
 * - Mobile-first responsive design
 * - Optimized for different screen sizes
 */

import PropTypes from 'prop-types';

function Layout({ children, className = '', variant = 'default' }) {
	// Base classes for the outer container
	const containerClasses = "min-h-screen flex items-center justify-center p-4 font-inter";

	// Background variants for different themes
	const backgroundVariants = {
		default: "bg-slate-100",
		professional: "dark-background",
		modern: "bg-blue-50"
	};

	// Simplified container for the business card
	const cardClasses = `
    flex
    items-center
    justify-center
    w-full
    h-full
  `.replace(/\s+/g, ' ').trim();

	return (
		<div className={`${containerClasses} ${backgroundVariants[variant] || backgroundVariants.default}`}>
			<div className={cardClasses}>
				{children}
			</div>
		</div>
	);
}

/**
 * LayoutContainer - Alternative layout for different use cases
 * Provides a simpler container without the card styling
 */
function LayoutContainer({ children, className = '' }) {
	return (
		<div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-inter ${className}`}>
			<div className="container mx-auto px-4 py-8">
				{children}
			</div>
		</div>
	);
}

/**
 * CenteredLayout - Utility component for centering content
 * Useful for loading states, error messages, etc.
 */
function CenteredLayout({ children, className = '' }) {
	return (
		<div className={`min-h-screen flex items-center justify-center p-4 font-inter ${className}`}>
			{children}
		</div>
	);
}

// PropTypes definitions
Layout.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'professional', 'modern'])
};

LayoutContainer.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
};

CenteredLayout.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
};

// Export all layout components
export default Layout;
export { LayoutContainer, CenteredLayout };