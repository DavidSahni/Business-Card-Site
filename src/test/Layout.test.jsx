import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Layout, { LayoutContainer, CenteredLayout } from '../components/Layout'

describe('Layout Component', () => {
  it('renders children correctly', () => {
    render(
      <Layout>
        <div data-testid="test-content">Test Content</div>
      </Layout>
    )
    
    expect(screen.getByTestId('test-content')).toBeInTheDocument()
  })

  it('applies default variant styling', () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    )
    
    const container = screen.getByText('Content').closest('div').parentElement.parentElement
    expect(container).toHaveClass('bg-gradient-to-br', 'from-slate-50', 'via-blue-50', 'to-indigo-100')
  })

  it('applies professional variant styling', () => {
    render(
      <Layout variant="professional">
        <div>Content</div>
      </Layout>
    )
    
    const container = screen.getByText('Content').closest('div').parentElement.parentElement
    expect(container).toHaveClass('bg-gradient-to-br', 'from-gray-50', 'via-slate-50', 'to-gray-100')
  })

  it('applies modern variant styling', () => {
    render(
      <Layout variant="modern">
        <div>Content</div>
      </Layout>
    )
    
    const container = screen.getByText('Content').closest('div').parentElement.parentElement
    expect(container).toHaveClass('bg-gradient-to-br', 'from-blue-50', 'via-indigo-50', 'to-purple-50')
  })

  it('accepts custom className', () => {
    render(
      <Layout className="custom-class">
        <div>Content</div>
      </Layout>
    )
    
    const card = screen.getByText('Content').closest('div').parentElement
    expect(card).toHaveClass('custom-class')
  })

  it('has proper responsive classes', () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    )
    
    const card = screen.getByText('Content').closest('div').parentElement
    expect(card).toHaveClass('p-4', 'sm:p-6', 'md:p-8', 'lg:p-10')
    expect(card).toHaveClass('max-w-xs', 'sm:max-w-sm', 'md:max-w-md', 'lg:max-w-lg')
  })
})

describe('LayoutContainer Component', () => {
  it('renders children in container layout', () => {
    render(
      <LayoutContainer>
        <div data-testid="container-content">Container Content</div>
      </LayoutContainer>
    )
    
    expect(screen.getByTestId('container-content')).toBeInTheDocument()
  })

  it('applies container styling', () => {
    render(
      <LayoutContainer>
        <div>Content</div>
      </LayoutContainer>
    )
    
    const container = screen.getByText('Content').closest('div').parentElement
    expect(container).toHaveClass('container', 'mx-auto', 'px-4', 'py-8')
  })
})

describe('CenteredLayout Component', () => {
  it('renders children in centered layout', () => {
    render(
      <CenteredLayout>
        <div data-testid="centered-content">Centered Content</div>
      </CenteredLayout>
    )
    
    expect(screen.getByTestId('centered-content')).toBeInTheDocument()
  })

  it('applies centering classes', () => {
    render(
      <CenteredLayout>
        <div>Content</div>
      </CenteredLayout>
    )
    
    const container = screen.getByText('Content').parentElement
    expect(container).toHaveClass('min-h-screen', 'flex', 'items-center', 'justify-center')
  })
})