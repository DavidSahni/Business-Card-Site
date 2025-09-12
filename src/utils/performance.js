/**
 * Performance optimization utilities
 * 
 * Features:
 * - Image loading optimization with WebP support
 * - Font loading optimization
 * - Critical CSS inlining helpers
 * - Performance monitoring utilities
 */

/**
 * Optimized image loading with WebP fallback
 * @param {string} src - Original image source
 * @param {string} alt - Alt text for accessibility
 * @param {Object} options - Additional options
 * @returns {Object} - Optimized image props
 */
export function getOptimizedImageProps(src, alt, options = {}) {
	const { 
		width, 
		height, 
		loading = 'lazy',
		decoding = 'async',
		fetchpriority = 'auto'
	} = options;

	// Check if browser supports WebP
	const supportsWebP = () => {
		if (typeof window === 'undefined') return false;
		const canvas = document.createElement('canvas');
		canvas.width = 1;
		canvas.height = 1;
		return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
	};

	// Generate WebP source if supported
	const webpSrc = supportsWebP() && src.includes('.jpg') || src.includes('.png') 
		? src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
		: src;

	return {
		src: webpSrc,
		alt,
		width,
		height,
		loading,
		decoding,
		fetchpriority,
		onError: (e) => {
			// Fallback to original format if WebP fails
			if (webpSrc !== src) {
				e.target.src = src;
			}
		}
	};
}

/**
 * Preload critical resources
 * @param {Array} resources - Array of resource objects
 */
export function preloadCriticalResources(resources = []) {
	if (typeof document === 'undefined') return;

	resources.forEach(({ href, as, type, crossorigin }) => {
		const link = document.createElement('link');
		link.rel = 'preload';
		link.href = href;
		link.as = as;
		if (type) link.type = type;
		if (crossorigin) link.crossOrigin = crossorigin;
		document.head.appendChild(link);
	});
}

/**
 * Font loading optimization with font-display: swap
 */
export function optimizeFontLoading() {
	if (typeof document === 'undefined') return;

	// Add font-display: swap to Google Fonts
	const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
	fontLinks.forEach(link => {
		if (!link.href.includes('display=swap')) {
			link.href += link.href.includes('?') ? '&display=swap' : '?display=swap';
		}
	});
}

/**
 * Critical CSS inlining helper
 * @param {string} css - Critical CSS string
 */
export function inlineCriticalCSS(css) {
	if (typeof document === 'undefined') return;

	const style = document.createElement('style');
	style.textContent = css;
	style.setAttribute('data-critical', 'true');
	document.head.insertBefore(style, document.head.firstChild);
}

/**
 * Performance monitoring utilities
 */
export const performanceMonitor = {
	// Measure page load time
	getPageLoadTime() {
		if (typeof performance === 'undefined') return null;
		const navigation = performance.getEntriesByType('navigation')[0];
		return navigation ? navigation.loadEventEnd - navigation.fetchStart : null;
	},

	// Measure First Contentful Paint
	getFCP() {
		if (typeof performance === 'undefined') return null;
		const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
		return fcpEntry ? fcpEntry.startTime : null;
	},

	// Measure Largest Contentful Paint
	getLCP() {
		return new Promise((resolve) => {
			if (typeof PerformanceObserver === 'undefined') {
				resolve(null);
				return;
			}

			const observer = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				const lastEntry = entries[entries.length - 1];
				resolve(lastEntry.startTime);
				observer.disconnect();
			});

			observer.observe({ entryTypes: ['largest-contentful-paint'] });
		});
	},

	// Log performance metrics
	logMetrics() {
		if (typeof console === 'undefined') return;

		const loadTime = this.getPageLoadTime();
		const fcp = this.getFCP();

		console.group('Performance Metrics');
		console.log(`Page Load Time: ${loadTime ? Math.round(loadTime) + 'ms' : 'N/A'}`);
		console.log(`First Contentful Paint: ${fcp ? Math.round(fcp) + 'ms' : 'N/A'}`);
		
		this.getLCP().then(lcp => {
			console.log(`Largest Contentful Paint: ${lcp ? Math.round(lcp) + 'ms' : 'N/A'}`);
			console.groupEnd();
		});
	}
};

/**
 * Initialize performance optimizations
 */
export function initPerformanceOptimizations() {
	// Optimize font loading
	optimizeFontLoading();

	// Preload critical resources
	preloadCriticalResources([
		{
			href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
			as: 'style',
			crossorigin: 'anonymous'
		}
	]);

	// Log performance metrics in development
	if (import.meta.env.DEV) {
		setTimeout(() => performanceMonitor.logMetrics(), 2000);
	}
}