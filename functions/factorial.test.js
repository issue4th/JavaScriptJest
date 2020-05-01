const { factorial, fastFactorial } = require('./factorial.js');

describe('factorial test cases', () => {
  test('Returns a number', () => {
    expect(factorial(0)).toBeDefined();
  });

  test('0! is 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('1! is 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('5! is 5x4x3x2x1', () => {
    expect(factorial(5)).toBe(5 * 4 * 3 * 2 * 1);
  });

  test('10! is 10x9x8x7x6x5x4x3x2x1', () => {
    expect(factorial(10)).toBe(10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1);
  });

  test('Expected handling of negatives', () => {
    try {
      factorial(-1);
    } catch (err) {
      expect(typeof err).toBe('RangeError');
    }
  });
});
