// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize);

int main() {
  int number[] = {2, 4, 11, 3};
  int rs;
  int* sub = twoSum(number, 4, 6, &rs);
  
  printf("\n");
  for (int i = 0; sub[i] != '\0'; i++) {
    printf("%d", sub[i]);
  }
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
  int *answer = (int *) malloc(2 * sizeof(int));
  if (answer == NULL || nums == NULL || numsSize < 2) {
    *returnSize = 0;
    return NULL;
  }
  
  for (int i = 0; i < numsSize; i++) {
    for (int j = i + 1; j < numsSize; j++) {
      if (nums[i] + nums[j] == target) {
        *returnSize = 2;
        answer[0] = i;
        answer[1] = j;
        return answer;
      }
    }
  }

  *returnSize = 0;
  free(answer);
  return NULL;
}