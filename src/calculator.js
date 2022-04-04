class Calculator {
  result = 0;

  add(...nums) {
    if (nums.length) {
      if (!nums.every((num) => typeof num === 'number')) {
        throw new Error('All arguments must be numbers');
      }
      this.result = nums.reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0);
    }
    return this.result;
  }

  subtract(mainNum, ...nums) {
    if (nums.length) {
      if (!nums.every((num) => typeof num === 'number')) {
        throw new Error('All arguments must be numbers');
      }
      this.result = nums.reduce((acc, curr) => {
        acc -= curr;
        return acc;
      }, mainNum);
    }
    return this.result;
  }

  multiply(...nums) {
    if (nums.length) {
      if (!nums.every((num) => typeof num === 'number')) {
        throw new Error('All arguments must be numbers');
      }
      this.result = nums.reduce((acc, curr) => {
        acc *= curr;
        return acc;
      }, 1);
    }
    return this.result;
  }

  divide(dividend, ...divisors) {
    if (!dividend) return 0;
    if (divisors.length) {
      if (!divisors.every((num) => typeof num === 'number')) {
        throw new Error('All arguments must be numbers');
      }
      this.result = divisors.reduce((acc, curr) => {
        acc /= curr;
        return acc;
      }, dividend);
      return this.result;
    }
    return this.dividend;
  }
}

module.exports = Calculator;
