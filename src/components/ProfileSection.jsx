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
						className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover border-2 border-slate-200 shadow-sm"
						onError={(e) => {
							// Hide image if it fails to load
							e.target.style.display = 'none';
						}}
					/>
				</div>
			)}

			{/* Name - Primary heading */}
			<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
				{name}
			</h1>

			{/* Title - Secondary heading */}
			<h2 className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed">
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