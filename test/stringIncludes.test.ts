import { stringIncludes } from '../src'

describe('Function: stringIncludes', () => {
  it('should work with perfect match', () => {
    expect(stringIncludes('a', 'a')).toEqual(true)
    expect(stringIncludes('potato', 'potato')).toEqual(true)
    expect(
      stringIncludes('A string with spaces', 'A string with spaces'),
    ).toEqual(true)
  })
  it('should work with partial match', () => {
    expect(stringIncludes('potato', 'pot')).toEqual(true)
    expect(stringIncludes('A string with spaces', 'string')).toEqual(true)
  })
  it('should work with no match', () => {
    expect(stringIncludes('potato', 'potato1')).toEqual(false)
    expect(stringIncludes('A string with spaces', 'Not a match')).toEqual(false)
  })
  it('should ignore accents', () => {
    expect(stringIncludes('é', 'e')).toEqual(true)
    expect(stringIncludes('érable', 'erable')).toEqual(true)
    expect(stringIncludes('à', 'a')).toEqual(true)
  })
})
