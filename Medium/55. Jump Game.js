/*
  # 55. Jump Game
  Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
  Each element in the array represents your maximum jump length at that position.
  Determine if you are able to reach the last index.
*/

function canJump(nums) {
  var canReachZero = false;
  if (nums.length > 1) {
    for (let zeroInd = nums.length-1; zeroInd >= 0 && !canReachZero; zeroInd--) {
      if (nums[zeroInd] === 0) {
        // console.log("===> zeroInd: ", zeroInd, " -  nums[zeroInd]: ", nums[zeroInd])
        var neededJumps = 1;
        canReachZero = true;
        for (let j = zeroInd-1; j <= nums.length && nums[j]!==undefined && canReachZero; j--) {
          // console.log("neededJumps", neededJumps)
          // console.log("j: ", j)
          // console.log("nums[j]: ", nums[j]);
          if (nums[j] <= neededJumps) {
            canReachZero = true;
            neededJumps++;
            if (zeroInd+1 === nums.length) {canReachZero = false;}
          } else {
            canReachZero = false;
          }
        }
      }
    }
  }
  return "# Return: " + !canReachZero
}



// Test Cases //
console.log(canJump([3,2,1,0,4]))         // false
console.log(canJump([0, 4, 1, 0, 4]))         // false
console.log(canJump([2,3,0,1,2,1,0,9]))       // false
console.log(canJump([0,1]));                  // false
console.log(canJump([2, 4, 1, 0, 4]))         // true
console.log(canJump([2,0,0]))                 // true
console.log(canJump([2,3,0,0]))               // true
console.log(canJump([2,3,0,2,5,0]))           // true
console.log(canJump([2, 3, 1, 1, 4]))         // true
console.log(canJump([0]))                     // true
