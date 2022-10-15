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

  let numberArr = JSON.parse(JSON.stringify(matrix));
  const matrixWidth = matrix[0].length;
  const matrixHeigth = matrix.length;

  for(let i = 0; i < matrixHeigth; i++){
    for(let j = 0; j < matrixWidth; j++){

      console.log(matrix[i][j])
      if(matrix[i][j] === true){
        numberArr[i][j] = 1;
      } else {
        let minesCounter = 0;
        directions.forEach(elem => {
          if((i + elem[0]) < 0 || (j + elem[1]) < 0 || (i + elem[0]) > matrixHeigth - 1 || (j + elem[1]) > matrixWidth - 1){
            minesCounter += 0;
          } else {
            if((matrix[(i + elem[0])][(j + elem[1])]) === true){
              minesCounter = minesCounter + 1;
            }
          }
        });

        numberArr[i][j] = minesCounter;
      }
    }
  }

  return numberArr;
}

module.exports = {
  minesweeper
};