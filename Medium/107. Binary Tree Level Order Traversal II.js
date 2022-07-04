/* 107. Binary Tree Level Order Traversal II

Given the root of a binary tree, return the bottom-up level order traversal of 
its nodes' values. (i.e., from left to right, level by level from leaf to root).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []


Constraints:
The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
 */

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
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
 * @return {number[][]}
 */

var levelOrderBottom = function (root) {
  let output = [];
  let currentLevelNodes = [];

  if (root) currentLevelNodes.push(root);

  while (currentLevelNodes.length > 0) {
    let currentNode = [];
    let length = currentLevelNodes.length;

    for (let i = 0; i < length; i++) {
      let node = currentLevelNodes.shift();
      currentNode.push(node.val);

      if (node.left) currentLevelNodes.push(node.left);
      if (node.right) currentLevelNodes.push(node.right);
    }

    output.unshift(currentNode);
  }
  return output;
};
