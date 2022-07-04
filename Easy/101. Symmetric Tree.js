/* 101. Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const queue1 = [root.left];
  const queue2 = [root.right];

  if (!root.left && !root.right) return true;
  if (!root.left || !root.right) return false;

  while (queue1.length && queue2.length) {
    console.log("====> queues", queue1, queue2);
    const node1 = queue1.shift();
    const node2 = queue2.pop();
    console.log("====> nodes", node1, node2);
    if (!node1 || !node2) {
      if (node1 !== node2) return false;
      else continue;
    }
    if (node1.val !== node2.val) return false;
    if (node1.left || node1.right || node2.right || node2.left) {
      queue1.push(node1.left);
      queue1.push(node1.right);
      queue2.unshift(node2.right);
      queue2.unshift(node2.left);
    }
  }
  return true;
};
