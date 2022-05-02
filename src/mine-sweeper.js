const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  throw new NotImplementedError('Not implemented');
  const directions = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ]

let numberArr = matrix;

const matrixWidth = matrix.length;
const matrixHeigth = matrix[0].length;
let counter = 0;

for(let i = 0; i < matrixWidth; i++){
  for(let j = 0; j < matrixHeigth; j++){
    
    if(matrix[i][j]){
      numberArr[i][j] = 1;
    } else {
      

      for(let k = 0; k < directions.length; k++){

        if(i == 0 && [0, 1, 2].includes(k)) continue;
        if(i == matrixWidth - 1 && [5, 6, 7].includes(k)) continue;
        if(j == 0 && [0, 3, 5].includes(k)) continue;
        if(j == matrixHeigth - 1 && [2, 4, 7].includes(k)) continue;


         let currentItem = matrix[i + directions[k][1]][j + directions[k][0]];

         console.log(currentItem, i, j)

        if(currentItem === true){
          counter++
          
        }
        console.log(counter)
        numberArr[i][j] = counter;

        
      }
        counter = 0;

    }

  }
}

  return numberArr;

}

module.exports = {
  minesweeper
};
