const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const uniqueLetters = new Set(Array.from(s1));
    let result = 0;
  
    for (const letter of uniqueLetters) {
      firstString = (s1.match(new RegExp(`${letter}`, "g")) || []).length;
      secondString = (s2.match(new RegExp(`${letter}`, "g")) || []).length;
  
      let getMin = (a, b) => (a - b) <= 0 ? a : b;
      result += getMin(firstString, secondString);
    }
  
    return result;
}

module.exports = {
  getCommonCharacterCount
};
