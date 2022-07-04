/* 102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

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
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*  * @param {TreeNode} root
 * @return {number[][]} */

/* var levelOrder = function(root) {
    let result = [];
    root && traverse(root, 0);
    return result;

    function traverse(node, level) {
        result[level] && result[level].push(node.val) || (result[level] = [node.val]);
        node.left && traverse(node.left, level + 1);
        node.right && traverse(node.right, level + 1);
    };
}; */

var levelOrder = function (root) {
  let output = [];
  currentLevelNodes = [];

  if (root) currentLevelNodes.push(root);

  while (currentLevelNodes.length > 0) {
    current = [];
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
    }
    output.push(current);
  }
  return output;
};
