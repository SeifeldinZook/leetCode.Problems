/* 
144. Binary Tree Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */

/* 
STEPS:  1- define an array to store arrays of each level
        2- define a stack the includes the trees of the same level
          ==> at the begining it will be initilaized to the root
        3- loop until there's no elements in the stack  (while loop)
            ==> get the node
            ==> add it to the output array
            ==> if there's right subtree
              ==> add it to the current level trees array
            ==> if there's left subtree
              ==> add it to the current level trees array
*/

var preorderTraversal = function (root) {
  let output = [];
  let currentLevelTrees = []; // stack

  if (root) currentLevelTrees.push(root);

  while (currentLevelTrees.length > 0) {
    let node = currentLevelTrees.pop(); // LIFO

    if (node.right) currentLevelTrees.push(node.right);
    if (node.left) currentLevelTrees.push(node.left);

    output.push(node.val);
  }

  console.log(output);
  return output;
};
