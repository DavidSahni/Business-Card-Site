/**
 * Utility functions for working with business card data
 * These helpers provide common operations and transformations
 */

/**
 * Generates a mailto link from an email address
 * @param {string} email - Email address
 * @param {string} [subject] - Optional email subject
 * @returns {string} - Formatted mailto URL
 */
export function generateMailtoLink(email, subject = '') {
  const encodedSubject = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${email}${encodedSubject}`;
}

/**
 * Formats a URL to ensure it opens in a new tab
 * @param {string} url - URL to format
 * @returns {Object} - Object with href and target properties
 */
export function formatExternalLink(url) {
  return {
    href: url,
    target: '_blank',
    rel: 'noopener noreferrer'
  };
}

/**
 * Gets the display name for a link type
 * @param {string} linkType - Type of link (personalLinkedIn, companyLinkedIn, companyWebsite)
 * @returns {string} - Human-readable link name
 */
export function getLinkDisplayName(linkType) {
  const linkNames = {
    personalLinkedIn: 'LinkedIn Profile',
    companyLinkedIn: 'Company LinkedIn',
    companyWebsite: 'Company Website'
  };
  
  return linkNames[linkType] || linkType;
}

/**
 * Filters out empty or undefined links from the links object
 * @param {import('../types.js').LinksData} links - Links object to filter
 * @returns {Array<{type: string, url: string, displayName: string}>} - Array of valid links
 */
export function getValidLinks(links) {
  if (!links) return [];
  
  return Object.entries(links)
    .filter(([_, url]) => url && url.trim() !== '')
    .map(([type, url]) => ({
      type,
      url: url.trim(),
      displayName: getLinkDisplayName(type)
    }));
}

/**
 * Creates a formatted display string for contact information
 * @param {import('../types.js').ContactData} contact - Contact data
 * @returns {Object} - Formatted contact display information
 */
export function formatContactDisplay(contact) {
  return {
    email: contact.email,
    emailLink: generateMailtoLink(contact.email),
    location: contact.location,
    company: contact.company || null,
    hasCompany: Boolean(contact.company)
  };
}