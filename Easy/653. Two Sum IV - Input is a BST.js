/* 
653. Two Sum IV - Input is a BST

Given the root of a binary search tree and an integer k, 
return true if there exist two elements in the BST 
such that their sum is equal to k, or false otherwise.

Example 1:
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

Example 2:
Input: root = [5,3,6,2,4,null,7], k = 28
Output: false

Constraints:
  The number of nodes in the tree is in the range [1, 104].
  -104 <= Node.val <= 104
  root is guaranteed to be a valid binary search tree.
  -105 <= k <= 105
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
 * @param {number} k
 * @return {boolean}
 */
function search(root, key) {
  // Base Cases: root is null or key is present at root
  if (root === null) return false;
  if (root.val === key) return true;
  // Key is greater than root's key
  console.log("inside search", root, root.left, root.right);
  if (root.val < key) return search(root.right, key);

  // Key is smaller than root's key
  return search(root.left, key);
}

var findTarget = function (root, k) {
  const nodes = new Set();
  let currentLevelNodes = []; //stack

  if (root) currentLevelNodes.push(root);

  while (currentLevelNodes.length > 0) {
    let currentNode = currentLevelNodes.pop();
    let complement = k - currentNode.val;

    if (nodes.has(complement)) return true;

    nodes.add(currentNode.val);

    if (currentNode.left) currentLevelNodes.push(currentNode.left);
    if (currentNode.right) currentLevelNodes.push(currentNode.right);
  }

  return false;
};
