function factorial(x) {
  return x === 0 ? 1 : x * factorial(x - 1);
}

function fastFactorial(x) {}

module.exports = { factorial, fastFactorial };
