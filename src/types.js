/**
 * TypeScript-style interfaces defined as JSDoc for the business card data structure
 * These interfaces define the shape of data used throughout the application
 */

/**
 * @typedef {Object} ProfileData
 * @property {string} name - Full name of the person
 * @property {string} title - Professional title/job position
 * @property {string} [photo] - Optional URL to profile photo
 */

/**
 * @typedef {Object} ContactData
 * @property {string} email - Email address for contact
 * @property {string} location - Geographic location (city, state/country)
 * @property {string} [company] - Company name (optional)
 */

/**
 * @typedef {Object} LinksData
 * @property {string} [personalLinkedIn] - Personal LinkedIn profile URL
 * @property {string} [companyLinkedIn] - Company LinkedIn page URL
 * @property {string} [companyWebsite] - Company website URL
 */

/**
 * @typedef {Object} BusinessCardData
 * @property {ProfileData} profile - Personal profile information
 * @property {ContactData} contact - Contact information
 * @property {LinksData} links - Professional and social media links
 */

// Export types for use in other modules
export const Types = {};