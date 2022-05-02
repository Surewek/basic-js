const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(boxArr) {
  
  const catEars = '^^';
  let catsCount = 0;

  boxArr.forEach(element => {
    element.forEach(box => {
      if(box == catEars) catsCount++;
    });
  });

  return catsCount;  
}

module.exports = {
  countCats
};
