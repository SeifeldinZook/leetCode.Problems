/* 
566. Reshape the Matrix

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 

Example 1:


Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
Example 2:


Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
-1000 <= mat[i][j] <= 1000
1 <= r, c <= 300
 */

var matrixReshape = function (mat, r, c) {
  const originalRows = mat.length;
  const originalColumns = mat[0].length;

  if (originalRows * originalColumns !== r * c) return mat;

  // create a new array with r as row and c as column with values filled as 0s
  const reshapedMat = new Array(r).fill(0);
  for (let i = 0; i < reshapedMat.length; i++) {
    reshapedMat[i] = new Array(c).fill(0);
  }
  // Another way without values
  // let reshapedMat = Array.from({length: r}, i=>[])

  console.log(reshapedMat);
  let currentRow = 0;
  let currentColumn = 0;

  for (let i = 0; i < originalRows; i++) {
    for (let j = 0; j < originalColumns; j++) {
      //       reshapedMat[currentRow][currentColumn] = mat[i][j]
      //       currentColumn++;

      //       if (currentColumn === c) {
      //         currentRow++;
      //         currentColumn = 0;

      //       }
      if (r > 1) {
        reshapedMat[currentRow][currentColumn] = mat[i][j];
        if (currentColumn++ === c - 1) {
          currentRow++;
          currentColumn = 0;
        }
      } else {
        // calculate colIndex when new array's row is equal with 1
        currentColumn = i * mat[i].length + j;
        reshapedMat[currentRow][currentColumn] = mat[i][j];
      }
    }
  }

  return reshapedMat;
};
