const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  const digits = Array.from(n.toString());
  let combinations = []

  digits.forEach((_currentDigit, index) => {
    let combination = [];

    for (let i = 0; i < digits.length; i++) {
      if (i == index) continue;
      combination.push(digits[i]);
    }

    combinations.push(+combination.join(''))
  })

  return Math.max.apply(null, combinations);
}

module.exports = {
  deleteDigit
};
