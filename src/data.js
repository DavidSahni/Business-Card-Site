/**
 * Sample profile data for the business card website
 * This data structure follows the interfaces defined in types.js
 * and includes all required fields as specified in the requirements
 */

/**
 * @type {import('./types.js').BusinessCardData}
 */
export const davidProfileData = {
  profile: {
    name: "David Sahni",
    title: "Senior Software Engineer",
  },
    contact: {
      email: "David.Sahni@levrum.com",
      location: "Portland, OR",
      company: "Levrum"
    },
    links: {
      personalLinkedIn: "https://www.linkedin.com/in/david-sahni-849b5a15a/",
      companyLinkedIn: "https://www.linkedin.com/company/levrum/posts/?feedView=all",
      companyWebsite: "https://levrum.com"
    }
  };


/**
 * @type {import('./types.js').BusinessCardData}
 */
export const sampleProfileData = {
  profile: {
    name: "Sarah Johnson",
    title: "Senior Software Engineer",
    photo: "/profile-photo.jpg" // Optional profile photo
  },
  contact: {
    email: "sarah.johnson@techcorp.com",
    location: "San Francisco, CA",
    company: "TechCorp Solutions"
  },
  links: {
    personalLinkedIn: "https://linkedin.com/in/sarahjohnson",
    companyLinkedIn: "https://linkedin.com/company/techcorp-solutions",
    companyWebsite: "https://techcorp-solutions.com"
  }
};

/**
 * Alternative sample data without optional fields to demonstrate flexibility
 * @type {import('./types.js').BusinessCardData}
 */
export const minimalProfileData = {
  profile: {
    name: "Alex Chen",
    title: "Product Manager"
    // No photo provided
  },
  contact: {
    email: "alex.chen@startup.io",
    location: "Austin, TX"
    // No company provided
  },
  links: {
    personalLinkedIn: "https://linkedin.com/in/alexchen",
    companyWebsite: "https://startup.io"
    // No company LinkedIn provided
  }
};

/**
 * Validation function to ensure data structure integrity
 * @param {import('./types.js').BusinessCardData} data - Data to validate
 * @returns {boolean} - True if data structure is valid
 */
export function validateBusinessCardData(data) {
  // Check required profile fields
  if (!data.profile || !data.profile.name || !data.profile.title) {
    return false;
  }

  // Check required contact fields
  if (!data.contact || !data.contact.email || !data.contact.location) {
    return false;
  }

  // Check that links object exists (even if empty)
  if (!data.links || typeof data.links !== 'object') {
    return false;
  }

  // Validate email format (basic check)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.contact.email)) {
    return false;
  }

  // Validate LinkedIn URLs if provided
  if (data.links.personalLinkedIn && !data.links.personalLinkedIn.includes('linkedin.com/in/')) {
    return false;
  }

  if (data.links.companyLinkedIn && !data.links.companyLinkedIn.includes('linkedin.com/company/')) {
    return false;
  }

  // Validate website URL if provided
  if (data.links.companyWebsite && !data.links.companyWebsite.startsWith('http')) {
    return false;
  }

  return true;
}