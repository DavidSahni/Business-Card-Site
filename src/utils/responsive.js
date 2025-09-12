/**
 * Responsive design utilities and breakpoint management
 * 
 * Breakpoints:
 * - Mobile: < 640px
 * - Tablet: 640px - 1024px  
 * - Desktop: > 1024px
 */

// Breakpoint constants
export const BREAKPOINTS = {
	MOBILE: 640,
	TABLET: 1024,
	DESKTOP: 1280
};

// Responsive class utilities
export const RESPONSIVE_CLASSES = {
	// Typography scaling
	HEADING_PRIMARY: 'text-2xl sm:text-3xl lg:text-4xl',
	HEADING_SECONDARY: 'text-lg sm:text-xl lg:text-2xl',
	BODY_TEXT: 'text-sm sm:text-base lg:text-lg',
	SMALL_TEXT: 'text-xs sm:text-sm lg:text-base',

	// Spacing
	SECTION_SPACING: 'space-y-4 sm:space-y-6 lg:space-y-8',
	PADDING_CARD: 'p-4 sm:p-6 lg:p-8',
	MARGIN_BOTTOM: 'mb-4 sm:mb-6 lg:mb-8',

	// Layout
	CARD_WIDTH: 'max-w-sm sm:max-w-md lg:max-w-lg',
	ICON_SIZE: 'text-xl sm:text-2xl lg:text-3xl',
	PROFILE_PHOTO: 'w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24',

	// Flex and grid
	FLEX_SPACING: 'space-x-4 sm:space-x-6 lg:space-x-8',
	GRID_COLS: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
};

// Media query helpers for JavaScript
export const useMediaQuery = (query) => {
	if (typeof window === 'undefined') return false;
	return window.matchMedia(query).matches;
};

export const isMobile = () => useMediaQuery(`(max-width: ${BREAKPOINTS.MOBILE - 1}px)`);
export const isTablet = () => useMediaQuery(`(min-width: ${BREAKPOINTS.MOBILE}px) and (max-width: ${BREAKPOINTS.TABLET - 1}px)`);
export const isDesktop = () => useMediaQuery(`(min-width: ${BREAKPOINTS.TABLET}px)`);

// Viewport transition utilities
export const TRANSITION_CLASSES = {
	SMOOTH: 'transition-all duration-300 ease-in-out',
	FAST: 'transition-all duration-150 ease-in-out',
	SLOW: 'transition-all duration-500 ease-in-out'
};