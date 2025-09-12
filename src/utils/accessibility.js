/**
 * Accessibility utilities and helpers
 * 
 * Features:
 * - ARIA label management
 * - Color contrast validation
 * - Keyboard navigation helpers
 * - Screen reader optimization
 */

/**
 * ARIA label constants for consistent accessibility
 */
export const ARIA_LABELS = {
	// Navigation and links
	EMAIL_LINK: 'Send email',
	LINKEDIN_PERSONAL: 'Visit personal LinkedIn profile',
	LINKEDIN_COMPANY: 'Visit company LinkedIn page',
	WEBSITE_COMPANY: 'Visit company website',
	
	// Profile elements
	PROFILE_PHOTO: 'Profile photograph',
	BUSINESS_CARD: 'Business card information',
	
	// Interactive elements
	COPY_EMAIL: 'Copy email address to clipboard',
	COPY_PHONE: 'Copy phone number to clipboard',
	
	// Status messages
	EMAIL_COPIED: 'Email address copied to clipboard',
	PHONE_COPIED: 'Phone number copied to clipboard'
};

/**
 * Generate accessible link props
 * @param {string} url - Link URL
 * @param {string} ariaLabel - ARIA label for screen readers
 * @param {boolean} external - Whether link is external
 * @returns {Object} - Accessible link props
 */
export function getAccessibleLinkProps(url, ariaLabel, external = true) {
	const props = {
		href: url,
		'aria-label': ariaLabel,
		className: 'focus-ring'
	};

	if (external) {
		props.target = '_blank';
		props.rel = 'noopener noreferrer';
	}

	return props;
}

/**
 * Color contrast validation (WCAG AA compliance)
 * @param {string} foreground - Foreground color (hex)
 * @param {string} background - Background color (hex)
 * @returns {Object} - Contrast ratio and compliance info
 */
export function validateColorContrast(foreground, background) {
	// Convert hex to RGB
	const hexToRgb = (hex) => {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	};

	// Calculate relative luminance
	const getLuminance = (rgb) => {
		const { r, g, b } = rgb;
		const [rs, gs, bs] = [r, g, b].map(c => {
			c = c / 255;
			return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
		});
		return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
	};

	const fgRgb = hexToRgb(foreground);
	const bgRgb = hexToRgb(background);

	if (!fgRgb || !bgRgb) {
		return { error: 'Invalid color format' };
	}

	const fgLuminance = getLuminance(fgRgb);
	const bgLuminance = getLuminance(bgRgb);

	const ratio = (Math.max(fgLuminance, bgLuminance) + 0.05) / 
				  (Math.min(fgLuminance, bgLuminance) + 0.05);

	return {
		ratio: Math.round(ratio * 100) / 100,
		wcagAA: ratio >= 4.5,
		wcagAAA: ratio >= 7,
		wcagAALarge: ratio >= 3,
		wcagAAALarge: ratio >= 4.5
	};
}

/**
 * Keyboard navigation helpers
 */
export const keyboardNavigation = {
	// Handle Enter and Space key presses for custom interactive elements
	handleActivation(callback) {
		return (event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				callback(event);
			}
		};
	},

	// Handle arrow key navigation
	handleArrowNavigation(elements, currentIndex, callback) {
		return (event) => {
			let newIndex = currentIndex;
			
			switch (event.key) {
				case 'ArrowRight':
				case 'ArrowDown':
					newIndex = (currentIndex + 1) % elements.length;
					break;
				case 'ArrowLeft':
				case 'ArrowUp':
					newIndex = currentIndex === 0 ? elements.length - 1 : currentIndex - 1;
					break;
				case 'Home':
					newIndex = 0;
					break;
				case 'End':
					newIndex = elements.length - 1;
					break;
				default:
					return;
			}
			
			event.preventDefault();
			callback(newIndex);
		};
	}
};

/**
 * Screen reader utilities
 */
export const screenReader = {
	// Announce message to screen readers
	announce(message, priority = 'polite') {
		if (typeof document === 'undefined') return;

		const announcement = document.createElement('div');
		announcement.setAttribute('aria-live', priority);
		announcement.setAttribute('aria-atomic', 'true');
		announcement.className = 'sr-only';
		announcement.textContent = message;

		document.body.appendChild(announcement);

		// Remove after announcement
		setTimeout(() => {
			document.body.removeChild(announcement);
		}, 1000);
	},

	// Create visually hidden but screen reader accessible text
	createSROnlyText(text) {
		return {
			children: text,
			className: 'sr-only'
		};
	}
};

/**
 * Focus management utilities
 */
export const focusManagement = {
	// Trap focus within an element
	trapFocus(element) {
		const focusableElements = element.querySelectorAll(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
		);
		
		const firstElement = focusableElements[0];
		const lastElement = focusableElements[focusableElements.length - 1];

		const handleTabKey = (e) => {
			if (e.key === 'Tab') {
				if (e.shiftKey) {
					if (document.activeElement === firstElement) {
						lastElement.focus();
						e.preventDefault();
					}
				} else {
					if (document.activeElement === lastElement) {
						firstElement.focus();
						e.preventDefault();
					}
				}
			}
		};

		element.addEventListener('keydown', handleTabKey);
		
		// Return cleanup function
		return () => {
			element.removeEventListener('keydown', handleTabKey);
		};
	},

	// Set focus to element with fallback
	setFocus(element, fallback = null) {
		if (element && typeof element.focus === 'function') {
			element.focus();
		} else if (fallback && typeof fallback.focus === 'function') {
			fallback.focus();
		}
	}
};

/**
 * Initialize accessibility features
 */
export function initAccessibilityFeatures() {
	if (typeof document === 'undefined') return;

	// Add skip link for keyboard users
	const skipLink = document.createElement('a');
	skipLink.href = '#main-content';
	skipLink.textContent = 'Skip to main content';
	skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
	document.body.insertBefore(skipLink, document.body.firstChild);

	// Add main content landmark
	const main = document.querySelector('main') || document.querySelector('#root');
	if (main && !main.id) {
		main.id = 'main-content';
	}

	// Validate color contrasts in development
	if (import.meta.env.DEV) {
		setTimeout(() => {
			const textElements = document.querySelectorAll('h1, h2, h3, p, a, span');
			textElements.forEach(el => {
				const styles = window.getComputedStyle(el);
				const color = styles.color;
				const backgroundColor = styles.backgroundColor;
				
				// Only validate if we have both colors
				if (color && backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
					// Convert RGB to hex for validation (simplified)
					console.log(`Element: ${el.tagName}, Color: ${color}, Background: ${backgroundColor}`);
				}
			});
		}, 1000);
	}
}