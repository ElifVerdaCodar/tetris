// http://jsfiddle.net/FloydPink/0fg4rLf9/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export var matrixSaatYonundeCevir = function (matrix: Array<Array<number>>) {
  // reverse the rows
  matrix = matrix.reverse();
  // swap the symmetric elements
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var matrixSaatYonuneTersCevir = function (matrix: Array<Array<number>>) {
  // reverse the individual rows
  matrix = matrix.map(function (row) {
    return row.reverse();
  });
  // swap the symmetric elements
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};
