import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Header test', () => {
  it('should be in the document', () => {
    render(<Footer />)
    expect(screen.getByText('Powered by')).toBeInTheDocument()
  })
})
