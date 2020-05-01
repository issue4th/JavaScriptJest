const { factorial, fastFactorial } = require('./factorial.js');

describe('factorial test cases', () => {
  test('Returns a number', () => {
    expect(factorial(0)).toBeDefined();
  });
});
