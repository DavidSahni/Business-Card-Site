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
				<FaEnvelope className="small-text flex-shrink-0" style={{ color: 'var(--color-text-muted)' }} />
				<a
					href={generateMailtoLink(email)}
					className="link-primary selectable-text cursor-pointer body-text focus-ring"
					aria-label={`Send email to ${email}`}
				>
					{email}
				</a>
			</div>

			{/* Location */}
			<div className="flex items-center justify-center space-x-3">
				<FaMapMarkerAlt className="small-text flex-shrink-0" style={{ color: 'var(--color-text-muted)' }} />
				<span className="body-text selectable-text">
					{location}
				</span>
			</div>

			{/* Company (if provided) */}
			{company && (
				<div className="flex items-center justify-center space-x-3">
					<FaBuilding className="small-text flex-shrink-0" style={{ color: 'var(--color-text-muted)' }} />
					<span className="body-text selectable-text font-medium">
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