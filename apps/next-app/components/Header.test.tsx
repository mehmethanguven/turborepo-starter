import React from 'react'
import Header from './Header'
import { render, screen } from '@testing-library/react'

describe('Header test', () => {
  it('should be in the document', () => {
    render(<Header />)
    expect(screen.getByText('Merkezsoft')).toBeInTheDocument()
  })
})
