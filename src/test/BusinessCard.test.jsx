import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BusinessCard from '../components/BusinessCard'
import { sampleProfileData, minimalProfileData } from '../data'

describe('BusinessCard Component', () => {
  it('renders all sections with valid data', () => {
    render(<BusinessCard data={sampleProfileData} />)
    
    // Check profile section
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(sampleProfileData.profile.name)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(sampleProfileData.profile.title)
    
    // Check contact info
    expect(screen.getByText(sampleProfileData.contact.email)).toBeInTheDocument()
    expect(screen.getByText(sampleProfileData.contact.location)).toBeInTheDocument()
    expect(screen.getByText(sampleProfileData.contact.company)).toBeInTheDocument()
    
    // Check links
    expect(screen.getByLabelText('Visit personal LinkedIn profile')).toBeInTheDocument()
    expect(screen.getByLabelText('Visit company LinkedIn page')).toBeInTheDocument()
    expect(screen.getByLabelText('Visit company website')).toBeInTheDocument()
  })

  it('renders with minimal data', () => {
    render(<BusinessCard data={minimalProfileData} />)
    
    expect(screen.getByText(minimalProfileData.profile.name)).toBeInTheDocument()
    expect(screen.getByText(minimalProfileData.profile.title)).toBeInTheDocument()
    expect(screen.getByText(minimalProfileData.contact.email)).toBeInTheDocument()
  })

  it('shows error message for invalid data', () => {
    const invalidData = { profile: { name: 'Test' } } // Missing required fields
    render(<BusinessCard data={invalidData} />)
    
    expect(screen.getByText('Invalid Data')).toBeInTheDocument()
    expect(screen.getByText(/missing required fields/i)).toBeInTheDocument()
  })

  it('handles email link clicks', async () => {
    const user = userEvent.setup()
    render(<BusinessCard data={sampleProfileData} />)
    
    const emailLink = screen.getByLabelText('Send email to sarah.johnson@techcorp.com')
    expect(emailLink).toHaveAttribute('href', 'mailto:sarah.johnson@techcorp.com')
    
    await user.click(emailLink)
    // Email link should be clickable (actual email client opening is browser behavior)
  })

  it('opens external links in new tabs', () => {
    render(<BusinessCard data={sampleProfileData} />)
    
    const linkedInLink = screen.getByLabelText('Visit personal LinkedIn profile')
    expect(linkedInLink).toHaveAttribute('target', '_blank')
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    const websiteLink = screen.getByLabelText('Visit company website')
    expect(websiteLink).toHaveAttribute('target', '_blank')
    expect(websiteLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has proper accessibility attributes', () => {
    render(<BusinessCard data={sampleProfileData} />)
    
    // Check ARIA labels
    expect(screen.getByLabelText('Visit personal LinkedIn profile')).toBeInTheDocument()
    expect(screen.getByLabelText('Visit company LinkedIn page')).toBeInTheDocument()
    expect(screen.getByLabelText('Visit company website')).toBeInTheDocument()
    
    // Check heading hierarchy
    const h1 = screen.getByRole('heading', { level: 1 })
    const h2 = screen.getByRole('heading', { level: 2 })
    expect(h1).toBeInTheDocument()
    expect(h2).toBeInTheDocument()
  })

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup()
    render(<BusinessCard data={sampleProfileData} />)
    
    // Tab through interactive elements
    await user.tab()
    expect(screen.getByLabelText(/send email/i)).toHaveFocus()
    
    await user.tab()
    expect(screen.getByLabelText(/visit personal linkedin/i)).toHaveFocus()
    
    await user.tab()
    expect(screen.getByLabelText(/visit company linkedin/i)).toHaveFocus()
    
    await user.tab()
    expect(screen.getByLabelText(/visit company website/i)).toHaveFocus()
  })
})