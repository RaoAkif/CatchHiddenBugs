const reverseString = require('../src/reverse_string');

describe('reverseString', () => {
  it('reverses a string', () => {
    const string = 'Kepler';
    const expected = 'relpeK';
    expect(reverseString(string)).toBe(expected);
  });
});
