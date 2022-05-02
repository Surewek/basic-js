const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let resultArr = []
  let countOfCurrentChar = 1;
  
  for(let i = 1; i <= str.length; i++){
    if(str[i] == str[i - 1]){
      countOfCurrentChar++
    } else {
      resultArr.push(`${countOfCurrentChar == 1 ? '' : countOfCurrentChar}${str[i-1]}`);
      countOfCurrentChar = 1;
    }
  }

  return resultArr.join('')
}

module.exports = {
  encodeLine
};
