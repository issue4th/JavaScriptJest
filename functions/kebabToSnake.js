function kebabToSnake(kebabCase) {
  return kebabCase.replace(/-/g, '_');
}

module.exports = { kebabToSnake };
