/**
 * ProfileSection component - Displays name, title, and optional profile photo
 * 
 * Features:
 * - Proper heading hierarchy (h1 for name, h2 for title)
 * - Responsive typography scaling
 * - Optional circular profile photo
 * - Professional styling and spacing
 * - Accessibility-compliant structure
 */

import PropTypes from 'prop-types';

function ProfileSection({ profile, className = '' }) {
	const { name, title, photo } = profile;

	return (
		<div className={`text-center mb-6 ${className}`}>
			{/* Profile Photo */}
			{photo && (
				<div className="mb-4">
					<img
						src={photo}
						alt={`${name}'s profile photo`}
						className="profile-photo w-20 h-20 sm:w-24 sm:h-24 mx-auto"
						onError={(e) => {
							// Hide image if it fails to load
							e.target.style.display = 'none';
						}}
					/>
				</div>
			)}

			{/* Name - Primary heading */}
			<h1 className="heading-primary mb-2">
				{name}
			</h1>

			{/* Title - Secondary heading */}
			<h2 className="heading-secondary">
				{title}
			</h2>
		</div>
	);
}

ProfileSection.propTypes = {
	profile: PropTypes.shape({
		name: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		photo: PropTypes.string
	}).isRequired,
	className: PropTypes.string
};

export default ProfileSection;