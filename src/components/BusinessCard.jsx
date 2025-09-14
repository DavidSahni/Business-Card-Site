/**
 * BusinessCard component - Modern business card design that looks like an actual card
 * 
 * Features:
 * - Realistic business card proportions and styling
 * - Name and title positioned in top left
 * - Contact info below name section
 * - Links positioned at bottom border
 * - Space reserved for company logo
 * - Strong contrast from background
 * - Professional shadow and elevation
 */

import PropTypes from 'prop-types';
import { FaEnvelope, FaMapMarkerAlt, FaBuilding, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { validateBusinessCardData } from '../data';
import { generateMailtoLink } from '../utils/dataHelpers';
import logo from '../assets/levrum-logo.png';

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
		<div className={`modern-business-card ${className}`}>
			{/* Top Section - Name and Title (Top Left) */}
			<div className="card-header">
				<h1 className="card-name">{profile.name}</h1>
				<h2 className="card-title">{profile.title}</h2>
			</div>

			{/* Middle Section - Contact Information */}
			<div className="card-contact">
				{/* Email */}
				<div className="contact-item">
					<FaEnvelope className="contact-icon" />
					<a
						href={generateMailtoLink(contact.email)}
						className="contact-link"
						aria-label={`Send email to ${contact.email}`}
					>
						{contact.email}
					</a>
				</div>

				{/* Company */}
				{contact.company && (
					<div className="contact-item">
						<FaBuilding className="contact-icon" />
						<span className="contact-text">{contact.company}</span>
					</div>
				)}

				{/* Location */}
				<div className="contact-item">
					<FaMapMarkerAlt className="contact-icon" />
					<span className="contact-text">{contact.location}</span>
				</div>
			</div>

			{/* Bottom Section - Logo Space and Links */}
			<div className="card-footer">
				{/* Logo Space */}
				<div className="logo-space">
					<a href="https://levrum.com">
						<img className="logo" src={logo} alt="Levrum Logo" />
					</a>
				</div>

				{/* Professional Links */}
				<div className="card-links">
					{links.personalLinkedIn && (
						<a
							href={links.personalLinkedIn}
							target="_blank"
							rel="noopener noreferrer"
							className="card-link"
							aria-label="Visit personal LinkedIn profile"
							title="LinkedIn Profile"
						>
							<FaLinkedin />
						</a>
					)}
					{links.companyLinkedIn && (
						<a
							href={links.companyLinkedIn}
							target="_blank"
							rel="noopener noreferrer"
							className="card-link"
							aria-label="Visit company LinkedIn page"
							title="Company LinkedIn"
						>
							<FaLinkedin />
						</a>
					)}
					{links.companyWebsite && (
						<a
							href={links.companyWebsite}
							target="_blank"
							rel="noopener noreferrer"
							className="card-link"
							aria-label="Visit company website"
							title="Company Website"
						>
							<FaGlobe />
						</a>
					)}
				</div>
			</div>
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