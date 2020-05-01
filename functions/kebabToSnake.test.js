const { kebabToSnake } = require('./kebabToSnake.js');

describe('kebabToSnake test cases', () => {
  test.each([
    ['', ''],
    ['-', '_'],
    ['--', '__'],
    ['blah', 'blah'],
    ['hello-world', 'hello_world'],
    ['dogs-are-awesome', 'dogs_are_awesome'],
    ['DOGS-are-AweSome', 'dogs_are_awesome'],
  ])('Conversions are correct!', (kebabCase, snakeCase) => {
    expect(kebabToSnake(kebabCase)).toBe(snakeCase);
  });
});
