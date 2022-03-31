const Calculator = require('../src/calculator');

describe('Calculator', () => {
  describe('.add', () => {
    it('returns the sum of numbers given as arguments', () => {
      const numbersToAdd = [1, 5, 7];
      const expectedSum = 13;
      const result = new Calculator().add(...numbersToAdd);
      expect(result).toEqual(expectedSum);
    });
    it('returns 0 if no arguments are passed', () => {
      const numbersToAdd = [];
      const expectedSum = 0;
      const result = new Calculator().add(...numbersToAdd);
      expect(result).toEqual(expectedSum);
    });
    it('throws an error if any argument is not a number', () => {
      const numbersToAdd = [1, 3, 4, '4'];
      expect(() => {
        new Calculator().add(...numbersToAdd);
      }).toThrow(/must be numbers/);
    });
  });
  describe('.subtract', () => {
    it('returns the sum of numbers given as arguments', () => {
      const number = 8;
      const numbersToSubtract = [3, 1];
      const expectedResult = 4;
      const result = new Calculator().subtract(number, ...numbersToSubtract);
      expect(result).toEqual(expectedResult);
    });
    it('throws an error if any argument is not a number', () => {
      const number = 8;
      const numbersToSubtract = [1, 3, 4, undefined];
      expect(() => {
        new Calculator().subtract(number, ...numbersToSubtract);
      }).toThrow(/must be numbers/);
    });
    it('returns a negative number if subtraction results negative', () => {
      const number = 8;
      const numbersToSubtract = [10];
      const expected = -2;
      const result = new Calculator().subtract(number, ...numbersToSubtract);
      expect(result).toBe(expected);
    });
    it('subtracts decimal numbers', () => {
      const number = 1.1;
      const numbersToSubtract = [0.2, 0.3];
      const expected = 0.6;
      const result = new Calculator().subtract(number, ...numbersToSubtract);
      expect(result).toBeCloseTo(expected);
    });
  });
  describe('.multiply', () => {
    it('it returns the result of multiplying the arguments', () => {
      const numbersToMultiply = [3, 5, 7];
      const expected = 105;
      const result = new Calculator().multiply(...numbersToMultiply);
      expect(result).toBe(expected);
    });
    it('throws an error if any argument is not a number', () => {
      const numbersToMultiply = [1, 3, 4, undefined];
      expect(() => {
        new Calculator().multiply(...numbersToMultiply);
      }).toThrow(/must be numbers/);
    });
    it('returns 0 if no arguments are passed', () => {
      const numbersToMultiply = [];
      const expected = 0;
      const result = new Calculator().multiply(...numbersToMultiply);
      expect(result).toEqual(expected);
    });
  });
  describe('.divide', () => {
    it('it returns the result of dividing a dividend by the divisors', () => {
      const dividend = 35;
      const divisors = [5];
      const expected = 7;
      const result = new Calculator().divide(dividend, ...divisors);
      expect(result).toBe(expected);
    });
    it('throws an error if any argument is not a number', () => {
      const dividend = 5;
      const divisors = [1, 3, 4, 'hello'];
      expect(() => {
        new Calculator().divide(dividend, ...divisors);
      }).toThrow(/must be numbers/);
    });
    it('returns 0 if no arguments are passed', () => {
      const expected = 0;
      const result = new Calculator().divide();
      expect(result).toEqual(expected);
    });
    it('returns the dividend if no divisors are passed', () => {
      const dividend = 55;
      const divisors = [];
      const result = new Calculator().divide(dividend, ...divisors);
    });
  });
});
