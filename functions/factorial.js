function factorial(x) {
  if (x < 0) {
    throw RangeError();
  }

  return x <= 0 ? 1 : x * factorial(x - 1);
}

function fastFactorial(x) {}

module.exports = { factorial, fastFactorial };
