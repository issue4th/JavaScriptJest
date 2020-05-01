function isEven(x) {
  return x % 2 === 0;
}

const isOdd = (x) => !isEven(x);

module.exports = { isEven, isOdd };
