function kebabToSnake(kebabCase) {
  return kebabCase.replace(/-/g, '_').toLowerCase();
}

module.exports = { kebabToSnake };
