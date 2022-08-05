/* 
350. Intersection of Two Arrays II

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 

Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */

var intersect = function (nums1, nums2) {
  /*
  nums1.sort()
  nums2.sort()
  
  let result = []
  console.log(nums1, nums2)
  
  let currentNum1Index = 0;
  let currentNum2Index = 0;
  while (currentNum1Index < nums1.length && currentNum2Index < nums2.length){
    if (nums1[currentNum1Index] < nums2[currentNum2Index]) {
      currentNum1Index++;
    } else if (nums1[currentNum1Index] > nums2[currentNum2Index]) {
      currentNum2Index++;
    } else {
      result.push(nums1[currentNum1Index])
      currentNum1Index++;
      currentNum2Index++; 
    }
  }
  
  return result;
  */

  // Another Solution
  let map = new Map();
  let result = [];
  for (let i = 0; i < nums2.length; i++) {
    map[nums2[i]] = map[nums2[i]] ? map[nums2[i]] + 1 : 1;
  }
  for (let j = 0; j < nums1.length; j++) {
    if (map[nums1[j]] > 0) {
      result.push(nums1[j]);
      map[nums1[j]]--;
    }
  }
  return result;
};
