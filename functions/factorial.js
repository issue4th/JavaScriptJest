function factorial(x) {
  if (x < 0) {
    throw RangeError();
  }

  return x <= 0 ? 1 : x * factorial(x - 1);
}

function fastFactorial(x) {
  let total = 1;
  let factor = x;

  while (factor > 1) {
    total = total * factor;
    factor -= 1;
  }

  return total;
}

module.exports = { factorial, fastFactorial };
