/**
 * ContactInfo component - Displays email, location, and company information
 * 
 * Features:
 * - Clickable email with mailto: links
 * - Optimized text selection and copying with CSS user-select properties
 * - Professional styling and spacing
 * - Responsive design for different screen sizes
 * - Company information display when available
 */

import PropTypes from 'prop-types';
import { FaEnvelope, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import { generateMailtoLink } from '../utils/dataHelpers';

function ContactInfo({ contact, className = '' }) {
	const { email, location, company } = contact;

	return (
		<div className={`space-y-3 mb-6 ${className}`}>
			{/* Email */}
			<div className="flex items-center justify-center space-x-3">
				<FaEnvelope className="text-gray-500 text-sm flex-shrink-0" />
				<a
					href={generateMailtoLink(email)}
					className="text-gray-700 hover:text-blue-600 transition-colors duration-200 select-all cursor-pointer text-sm sm:text-base"
					aria-label={`Send email to ${email}`}
				>
					{email}
				</a>
			</div>

			{/* Location */}
			<div className="flex items-center justify-center space-x-3">
				<FaMapMarkerAlt className="text-gray-500 text-sm flex-shrink-0" />
				<span className="text-gray-700 select-all text-sm sm:text-base">
					{location}
				</span>
			</div>

			{/* Company (if provided) */}
			{company && (
				<div className="flex items-center justify-center space-x-3">
					<FaBuilding className="text-gray-500 text-sm flex-shrink-0" />
					<span className="text-gray-700 select-all font-medium text-sm sm:text-base">
						{company}
					</span>
				</div>
			)}
		</div>
	);
}

ContactInfo.propTypes = {
	contact: PropTypes.shape({
		email: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		company: PropTypes.string
	}).isRequired,
	className: PropTypes.string
};

export default ContactInfo;