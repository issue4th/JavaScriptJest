const { isEven, isOdd } = require('./evenNess.js');

test('1 is not even', () => {
  expect(isEven(1)).not.toBe(true);
});

test('2 is even', () => {
  expect(isEven(2)).toBe(true);
});

test('1 is odd', () => {
  expect(isOdd(1)).toBe(true);
});

test('2 is not odd', () => {
  expect(isOdd(2)).not.toBe(true);
});
