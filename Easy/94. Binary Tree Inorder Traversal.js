/* 
# 94. Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
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
 * @return {number[]}
 */
/* 
STEPS:  1- declare an array to store arrays of each level
        2- declare a stack the includes the trees of the same level
          ==> at the begining it will be initilaized to the root
        3- loop until there's no elements in the stack  (while loop)
            ==> get the node
            ==> add it to the output array
            ==> if there's right subtree
              ==> add it to the current level trees array
            ==> if there's left subtree
              ==> add it to the current level trees array
*/

var inorderTraversal = function (root) {
  let output = [];
  let stack = [];
  let currentNode = root;

  while (currentNode !== null || stack.length > 0) {
    console.log("======", output, currentNode, stack);
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();
    output.push(currentNode.val);

    currentNode = currentNode.right;

    console.log("then currentNode: ", currentNode);
  }

  // console.log(stack, currentNode)
  return output;
};
