/* 104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2


Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
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

/* 
STEPS:  1- define an array to store arrays of each level
        2- define a queue the includes the trees of the same level
          ==> at the begining it will be initilaized to the root
        3- loop until there's no elements in the queue (while loop)
          ==> define an array that will include the current level nodes
          ==> Loop on the current trees length 
              ==> get the node
              ==> add it to the current level nodes array
              ==> if there's left subtree
                ==> add it to the current level trees array
              ==> if there's right subtree
                ==> add it to the current level trees array
          add current level nodes to the output
*/

var maxDepth = function (root) {
  let output = [];
  let currentLevelTrees = []; // Queue

  if (root) currentLevelTrees.push(root);

  while (currentLevelTrees.length > 0) {
    let currentLevelNodes = [];
    let len = currentLevelTrees.length;
    for (let i = 0; i < len; i++) {
      let node = currentLevelTrees.shift(); // FIFO
      currentLevelNodes.push(node.val);
      if (node.left) {
        currentLevelTrees.push(node.left);
      }
      if (node.right) {
        currentLevelTrees.push(node.right);
      }
    }
    output.push(currentLevelNodes);
  }
  return output.length;
};
