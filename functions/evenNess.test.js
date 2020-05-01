const { isEven, isOdd } = require('./evenNess.js');

describe('iEven test cases', () => {
  test('1 is not even', () => {
    expect(isEven(1)).not.toBeTruthy();
  });

  test('2 is even', () => {
    expect(isEven(2)).toBeTruthy();
  });

  test.each([
    [-3, false],
    [-2, true],
    [-1, false],
    [0, true],
    [1, false],
    [2, true],
    [3, false],
    [100, true],
  ])('Expanded evenness cases', (x, expected) => {
    expect(isEven(x)).toBe(expected);
  });
});

describe('isOdd test cases', () => {
  test('1 is odd', () => {
    expect(isOdd(1)).toBeTruthy();
  });

  test('2 is not odd', () => {
    expect(isOdd(2)).not.toBeTruthy();
  });

  test.each([
    [-3, true],
    [-2, false],
    [-1, true],
    [0, false],
    [1, true],
    [2, false],
    [3, true],
    [100, false],
  ])('Expanded oddness cases', (x, expected) => {
    expect(isOdd(x)).toBe(expected);
  });
});
