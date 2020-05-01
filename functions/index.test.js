const { isOdd } = require('./index.js');

test('1 is odd', () => {
  expect(isOdd(1)).toBe(true);
});
