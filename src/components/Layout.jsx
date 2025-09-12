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
		default: "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100",
		professional: "bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100",
		modern: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
	};

	// Card styling with enhanced responsive design
	const cardClasses = `
    bg-white 
    rounded-xl 
    shadow-xl 
    shadow-slate-200/50
    hover:shadow-2xl
    hover:shadow-slate-300/30
    transition-all
    duration-300
    ease-in-out
    p-4 
    sm:p-6 
    md:p-8
    lg:p-10
    max-w-xs
    sm:max-w-sm
    md:max-w-md 
    lg:max-w-lg
    w-full 
    mx-auto
    border 
    border-slate-100/50
    backdrop-blur-sm
    relative
    overflow-hidden
  `.replace(/\s+/g, ' ').trim();

	return (
		<div className={`${containerClasses} ${backgroundVariants[variant] || backgroundVariants.default}`}>
			<div className={`${cardClasses} ${className}`}>
				{/* Subtle decorative element */}
				<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60"></div>

				{/* Main content */}
				<div className="relative z-10">
					{children}
				</div>
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