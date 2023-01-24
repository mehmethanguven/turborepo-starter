import add from './add'

describe('testing add', () => {
  it('should be 10', () => {
    expect(add(7, 3)).toBe(10)
  })
})
