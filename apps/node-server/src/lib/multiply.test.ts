import multiply from './multiply'

describe('Multiply test', () => {
  it('Result should be 16', () => {
    expect(multiply(2, 8)).toBe(16)
  })
})
