import { describe, it, expect } from 'vitest'
import { 
  generateMailtoLink, 
  formatExternalLink, 
  getValidLinks, 
  formatContactDisplay 
} from '../utils/dataHelpers'
import { validateBusinessCardData } from '../data'
import { validateColorContrast } from '../utils/accessibility'

describe('Data Helper Utilities', () => {
  describe('generateMailtoLink', () => {
    it('generates basic mailto link', () => {
      const result = generateMailtoLink('test@example.com')
      expect(result).toBe('mailto:test@example.com')
    })

    it('generates mailto link with subject', () => {
      const result = generateMailtoLink('test@example.com', 'Hello World')
      expect(result).toBe('mailto:test@example.com?subject=Hello%20World')
    })

    it('handles special characters in subject', () => {
      const result = generateMailtoLink('test@example.com', 'Hello & Welcome!')
      expect(result).toBe('mailto:test@example.com?subject=Hello%20%26%20Welcome!')
    })
  })

  describe('formatExternalLink', () => {
    it('formats external link props', () => {
      const result = formatExternalLink('https://example.com')
      expect(result).toEqual({
        href: 'https://example.com',
        target: '_blank',
        rel: 'noopener noreferrer'
      })
    })
  })

  describe('getValidLinks', () => {
    it('filters out empty links', () => {
      const links = {
        personalLinkedIn: 'https://linkedin.com/in/test',
        companyLinkedIn: '',
        companyWebsite: 'https://example.com'
      }
      
      const result = getValidLinks(links)
      expect(result).toHaveLength(2)
      expect(result[0].type).toBe('personalLinkedIn')
      expect(result[1].type).toBe('companyWebsite')
    })

    it('returns empty array for null links', () => {
      const result = getValidLinks(null)
      expect(result).toEqual([])
    })

    it('includes display names', () => {
      const links = {
        personalLinkedIn: 'https://linkedin.com/in/test'
      }
      
      const result = getValidLinks(links)
      expect(result[0].displayName).toBe('LinkedIn Profile')
    })
  })

  describe('formatContactDisplay', () => {
    it('formats contact with all fields', () => {
      const contact = {
        email: 'test@example.com',
        location: 'New York, NY',
        company: 'Test Corp'
      }
      
      const result = formatContactDisplay(contact)
      expect(result.email).toBe('test@example.com')
      expect(result.emailLink).toBe('mailto:test@example.com')
      expect(result.location).toBe('New York, NY')
      expect(result.company).toBe('Test Corp')
      expect(result.hasCompany).toBe(true)
    })

    it('handles missing company', () => {
      const contact = {
        email: 'test@example.com',
        location: 'New York, NY'
      }
      
      const result = formatContactDisplay(contact)
      expect(result.company).toBe(null)
      expect(result.hasCompany).toBe(false)
    })
  })
})

describe('Data Validation', () => {
  describe('validateBusinessCardData', () => {
    it('validates complete data', () => {
      const validData = {
        profile: { name: 'John Doe', title: 'Developer' },
        contact: { email: 'john@example.com', location: 'NYC' },
        links: {}
      }
      
      expect(validateBusinessCardData(validData)).toBe(true)
    })

    it('rejects missing profile name', () => {
      const invalidData = {
        profile: { title: 'Developer' },
        contact: { email: 'john@example.com', location: 'NYC' },
        links: {}
      }
      
      expect(validateBusinessCardData(invalidData)).toBe(false)
    })

    it('rejects invalid email format', () => {
      const invalidData = {
        profile: { name: 'John Doe', title: 'Developer' },
        contact: { email: 'invalid-email', location: 'NYC' },
        links: {}
      }
      
      expect(validateBusinessCardData(invalidData)).toBe(false)
    })

    it('validates LinkedIn URLs', () => {
      const validData = {
        profile: { name: 'John Doe', title: 'Developer' },
        contact: { email: 'john@example.com', location: 'NYC' },
        links: { personalLinkedIn: 'https://linkedin.com/in/johndoe' }
      }
      
      expect(validateBusinessCardData(validData)).toBe(true)
    })

    it('rejects invalid LinkedIn URLs', () => {
      const invalidData = {
        profile: { name: 'John Doe', title: 'Developer' },
        contact: { email: 'john@example.com', location: 'NYC' },
        links: { personalLinkedIn: 'https://facebook.com/johndoe' }
      }
      
      expect(validateBusinessCardData(invalidData)).toBe(false)
    })
  })
})

describe('Accessibility Utilities', () => {
  describe('validateColorContrast', () => {
    it('validates high contrast colors', () => {
      const result = validateColorContrast('#000000', '#ffffff')
      expect(result.wcagAA).toBe(true)
      expect(result.wcagAAA).toBe(true)
      expect(result.ratio).toBeGreaterThan(4.5)
    })

    it('validates medium contrast colors', () => {
      const result = validateColorContrast('#666666', '#ffffff')
      expect(result.wcagAA).toBe(true)
      expect(result.ratio).toBeGreaterThanOrEqual(4.5)
    })

    it('rejects low contrast colors', () => {
      const result = validateColorContrast('#cccccc', '#ffffff')
      expect(result.wcagAA).toBe(false)
      expect(result.ratio).toBeLessThan(4.5)
    })

    it('handles invalid color formats', () => {
      const result = validateColorContrast('invalid', '#ffffff')
      expect(result.error).toBe('Invalid color format')
    })
  })
})