const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error (`'arr' parameter must be an instance of the Array!`);

  return arr.filter((_element, index) => arr[index + 1] !== "--discard-prev" && arr[index - 1] !== "--discard-next")
            .map((element, index) => element === "--double-prev" && index > 0 ? element = arr[index - 1] : element)
            .map((element, index) => element === "--double-next" && index < arr.length - 1 ? element = arr[index + 1] : element)
            .filter(element => !["--discard-prev", "--discard-next", "--double-prev", "--double-next"].includes(element));
}

module.exports = {
  transform
};
