/* 
404. Sum of Left Leaves

Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
Example 2:

Input: root = [1]
Output: 0
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-1000 <= Node.val <= 1000
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let breadths = [];
  let currentLevelNodes = [];
  let SumOfLeftLeaves = 0;

  if (root) currentLevelNodes.push(root);

  while (currentLevelNodes.length > 0) {
    let current = [];
    let len = currentLevelNodes.length;
    for (let i = 0; i < len; i++) {
      let node = currentLevelNodes.shift();

      current.push(node.val);
      if (node.left) {
        currentLevelNodes.push(node.left);
      }
      if (node.right) {
        currentLevelNodes.push(node.right);
      }
      if (node.left && !node.left.left && !node.left.right) {
        // left leaf defination
        SumOfLeftLeaves += node.left.val;
      }
    }
    breadths.push(current);
  }

  return SumOfLeftLeaves;
};
