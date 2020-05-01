const { factorial, fastFactorial } = require('./factorial.js');

describe('factorial test cases', () => {
  test('Returns a number', () => {
    expect(factorial(0)).toBeDefined();
  });
  test('0! is 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('1! is 1', () => {
    expect(factorial(1)).toBeDefined(1);
  });

  test('5! is 5x4x3x2x1', () => {
    expect(factorial(0)).toBe(5 * 4 * 3 * 2 * 1);
  });
});
