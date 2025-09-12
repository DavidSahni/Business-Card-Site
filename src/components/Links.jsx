/**
 * Links component - Displays professional and social media links
 * 
 * Features:
 * - Icons for personal LinkedIn, company LinkedIn, and company website
 * - Hover effects with visual feedback
 * - Links open in new tabs with proper security attributes
 * - ARIA labels for accessibility
 * - Responsive design and spacing
 */

import PropTypes from 'prop-types';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import { getValidLinks, formatExternalLink } from '../utils/dataHelpers';
import { SUPPORTED_LINK_TYPES, ARIA_LABELS } from '../constants';

function Links({ links, className = '' }) {
	const validLinks = getValidLinks(links);

	// Don't render anything if no valid links
	if (validLinks.length === 0) {
		return null;
	}

	// Get the appropriate icon for each link type
	const getIcon = (linkType) => {
		switch (linkType) {
			case SUPPORTED_LINK_TYPES.PERSONAL_LINKEDIN:
			case SUPPORTED_LINK_TYPES.COMPANY_LINKEDIN:
				return FaLinkedin;
			case SUPPORTED_LINK_TYPES.COMPANY_WEBSITE:
				return FaGlobe;
			default:
				return FaGlobe;
		}
	};

	// Get the appropriate color for each link type
	const getIconColor = (linkType) => {
		switch (linkType) {
			case SUPPORTED_LINK_TYPES.PERSONAL_LINKEDIN:
			case SUPPORTED_LINK_TYPES.COMPANY_LINKEDIN:
				return 'text-blue-600 hover:text-blue-700';
			case SUPPORTED_LINK_TYPES.COMPANY_WEBSITE:
				return 'text-gray-600 hover:text-gray-700';
			default:
				return 'text-gray-600 hover:text-gray-700';
		}
	};

	return (
		<div className={`flex justify-center space-x-6 ${className}`}>
			{validLinks.map(({ type, url, displayName }) => {
				const IconComponent = getIcon(type);
				const iconColorClass = getIconColor(type);
				const linkProps = formatExternalLink(url);

				return (
					<a
						key={type}
						{...linkProps}
						className={`${iconColorClass} transition-all duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full p-1`}
						aria-label={ARIA_LABELS[type] || `Visit ${displayName}`}
						title={displayName}
					>
						<IconComponent className="text-2xl sm:text-3xl" />
					</a>
				);
			})}
		</div>
	);
}

Links.propTypes = {
	links: PropTypes.shape({
		personalLinkedIn: PropTypes.string,
		companyLinkedIn: PropTypes.string,
		companyWebsite: PropTypes.string
	}).isRequired,
	className: PropTypes.string
};

export default Links;