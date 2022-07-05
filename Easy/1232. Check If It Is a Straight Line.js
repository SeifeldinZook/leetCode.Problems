/* 1232. Check If It Is a Straight Line

You are given an array coordinates, coordinates[i] = [x, y], 
where [x, y] represents the coordinate of a point. 
Check if these points make a straight line in the XY plane.

Example 1:
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Example 2:
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

Constraints:
2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point. 
*/

var checkStraightLine = function (coordinates) {
  let length = coordinates.length;
  if (length === 0) return false;
  if (length <= 2) return true;

  let x1 = coordinates[0][0];
  let y1 = coordinates[0][1];
  let x2 = coordinates[1][0];
  let y2 = coordinates[1][1];

  let slope = (y2 - y1) / (x2 - x1);

  for (let i = 1; i < length - 1; i++) {
    let x1_1 = coordinates[i][0];
    let y1_1 = coordinates[i][1];
    let x2_2 = coordinates[i + 1][0];
    let y2_2 = coordinates[i + 1][1];

    let currentSlope = (y2_2 - y1_1) / (x2_2 - x1_1);

    if (
      (currentSlope === Infinity || currentSlope === -Infinity) &&
      (slope === Infinity || slope === -Infinity)
    )
      continue;

    if (currentSlope !== slope) return false;
  }

  return true;
};
