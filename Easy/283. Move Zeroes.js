/* 283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  /*  
  Space Complexity : O(1)O(1). Only constant space is used.

  Time Complexity: O(n)O(n). However, the total number of operations are still sub-optimal. 
  The total operations (array writes) that code does is nn (Total number of elements).
  */

  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let tmp = nums[lastNonZeroFoundAt];
      nums[lastNonZeroFoundAt] = nums[i];
      nums[i] = tmp;
      lastNonZeroFoundAt++;
    }
  }

  return nums;
};
