// http://jsfiddle.net/FloydPink/0fg4rLf9/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export var matrixSaatYonundeCevir = function (matrix: Array<Array<number>>) {
  // reverse the rows
  matrix = matrix.slice(0).reverse();
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
export var matrixSaatYonuneTersCevir = function (matrix: Array<Array<number>>) {
  // reverse the individual rows
  matrix = matrix.slice(0).map(function (row) {
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
  return matrix;
};

function noktaAralikta(min, p, max) {
  var result = false;

  if (min < max) {
    if (p > min && p < max) {
      result = true;
    }
  }

  if (min > max) {
    if (p > max && p < min) {
      result = true;
    }
  }

  if (p == min || p == max) {
    result = true;
  }

  return result;
}

export function noktaDikdortgeninIcinde(x, y, left, top, right, bottom) {
  var result = false;

  if (noktaAralikta(left, x, right) && noktaAralikta(top, y, bottom)) {
    result = true;
  }
  return result;
}
