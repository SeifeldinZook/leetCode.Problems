/* 
118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
  let output = [];

  for (let i = 0; i < numRows; i++) {
    let currentRow = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currentRow.push(1);
      } else {
        currentRow.push(output[i - 1][j] + output[i - 1][j - 1]);
      }
    }
    output.push(currentRow);
  }

  /*
  output.push([1]);
    
  for (let i = 1; i < numRows; i++) {
    let prevRow = output[i - 1];
    let newRow = [];
        
    newRow.push(1);
       
    for (let j = 1; j < prevRow.length; j++) {    
      newRow.push(prevRow[(j - 1)] + prevRow[j]);
    }
        
    newRow.push(1);
    output.push(newRow);   
  }
  */
  return output;
};
