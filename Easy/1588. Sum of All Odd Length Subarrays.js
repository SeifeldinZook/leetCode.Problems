/* 1588. Sum of All Odd Length Subarrays

Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66
 

Constraints:

1 <= arr.length <= 100
1 <= arr[i] <= 1000
 

Follow up:

Could you solve this problem in O(n) time complexity?
 */

/**
 * @param {number[]} arr
 * @return {number}
 */

// O(N) Approach
var sumOddLengthSubarrays = function (arr) {
  let count = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    // How many subarrays start at index, i
    let start = n - i;

    // How many subarrays end at index, i
    let end = i + 1;

    // Total number of subarrays
    let total = start * end;

    // Get odd subarrays
    let odd = Math.floor(total / 2);

    if (total % 2 == 1) odd += 1;
    console.log(start, end, total, odd);

    // Increment the sum of odd length subarrays
    count += odd * arr[i];
  }
  return count;
};

// O(N^2 * log n)
// var sumOddLengthSubarrays = function(arr) {
//     let result = 0;
//     for(let i = 0; i < arr.length; i++){
//         result += arr[i]
//     }

//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 2; j < arr.length; j += 2){
//             for(let t = i; t <= j; t++){
//                 result += arr[t];
//             }
//         }
//     }

//     return result;
// };
