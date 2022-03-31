const capitalize = require('../src/capitalize');

describe('capitalize', () => {
  it('takes a string and returns string with first letter capitalized', () => {
    const string = 'hello';
    const expected = 'Hello';
    const result = capitalize(string);
    expect(result).toBe(expected);
  });
});
