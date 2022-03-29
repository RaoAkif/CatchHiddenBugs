const { expect } = require('@jest/globals');
const stringLength = require('./stringLength');

test('should give string length', () => { 
  expect(stringLength('hello')).toBe(5); 
})