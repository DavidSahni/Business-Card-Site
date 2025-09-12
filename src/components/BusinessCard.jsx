/**
 * BusinessCard component - Main component that combines all sections
 * 
 * Features:
 * - Combines ProfileSection, ContactInfo, and Links components
 * - Proper component composition and data flow
 * - Consistent spacing and alignment
 * - Responsive design
 * - Data validation and error handling
 */

import PropTypes from 'prop-types';
import ProfileSection from './ProfileSection';
import ContactInfo from './ContactInfo';
import Links from './Links';
import { validateBusinessCardData } from '../data';

function BusinessCard({ data, className = '' }) {
	// Validate data structure
	if (!validateBusinessCardData(data)) {
		return (
			<div className={`text-center text-red-600 p-4 ${className}`}>
				<p className="text-lg font-semibold mb-2">Invalid Data</p>
				<p className="text-sm">The business card data is missing required fields or is malformed.</p>
			</div>
		);
	}

	const { profile, contact, links } = data;

	return (
		<div className={`business-card space-y-6 p-6 ${className}`}>
			{/* Profile Section - Name, title, and photo */}
			<ProfileSection profile={profile} />

			{/* Contact Information - Email, location, company */}
			<ContactInfo contact={contact} />

			{/* Professional Links - LinkedIn and website */}
			<Links links={links} />
		</div>
	);
}

BusinessCard.propTypes = {
	data: PropTypes.shape({
		profile: PropTypes.shape({
			name: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			photo: PropTypes.string
		}).isRequired,
		contact: PropTypes.shape({
			email: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			company: PropTypes.string
		}).isRequired,
		links: PropTypes.shape({
			personalLinkedIn: PropTypes.string,
			companyLinkedIn: PropTypes.string,
			companyWebsite: PropTypes.string
		}).isRequired
	}).isRequired,
	className: PropTypes.string
};

export default BusinessCard;