import React from 'react'
import add from './add'

describe('add test', () => {
  it('add result should be 10', () => {
    expect(add(2, 8)).toBe(10)
  })
})
