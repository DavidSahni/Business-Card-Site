/**
 * Constants and configuration for the business card website
 * Defines supported link types and other application constants
 */

/**
 * Supported professional link types
 * Only these three types are supported as per requirements 2.6
 */
export const SUPPORTED_LINK_TYPES = {
  PERSONAL_LINKEDIN: 'personalLinkedIn',
  COMPANY_LINKEDIN: 'companyLinkedIn',
  COMPANY_WEBSITE: 'companyWebsite'
};

/**
 * Link validation patterns
 */
export const LINK_PATTERNS = {
  [SUPPORTED_LINK_TYPES.PERSONAL_LINKEDIN]: /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/,
  [SUPPORTED_LINK_TYPES.COMPANY_LINKEDIN]: /^https:\/\/(www\.)?linkedin\.com\/company\/[a-zA-Z0-9-]+\/?$/,
  [SUPPORTED_LINK_TYPES.COMPANY_WEBSITE]: /^https?:\/\/.+/
};

/**
 * Icon mappings for different link types
 * These correspond to React Icons that will be used in the Links component
 */
export const LINK_ICONS = {
  [SUPPORTED_LINK_TYPES.PERSONAL_LINKEDIN]: 'FaLinkedin',
  [SUPPORTED_LINK_TYPES.COMPANY_LINKEDIN]: 'FaLinkedin',
  [SUPPORTED_LINK_TYPES.COMPANY_WEBSITE]: 'FaGlobe'
};

/**
 * Default values and configuration
 */
export const DEFAULTS = {
  PROFILE_PHOTO_ALT: 'Profile photo',
  EMAIL_SUBJECT: 'Contact from Business Card',
  MAX_CARD_WIDTH: '400px',
  MOBILE_BREAKPOINT: '640px',
  TABLET_BREAKPOINT: '1024px'
};

/**
 * Accessibility labels for screen readers
 */
export const ARIA_LABELS = {
  [SUPPORTED_LINK_TYPES.PERSONAL_LINKEDIN]: 'Visit personal LinkedIn profile',
  [SUPPORTED_LINK_TYPES.COMPANY_LINKEDIN]: 'Visit company LinkedIn page',
  [SUPPORTED_LINK_TYPES.COMPANY_WEBSITE]: 'Visit company website',
  EMAIL_LINK: 'Send email',
  PROFILE_PHOTO: 'Profile photograph'
};