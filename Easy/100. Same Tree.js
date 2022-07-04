/* 100. Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, 
and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
 

Constraints:

The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {
  console.log("====isSameTree====", p, q);

  if (!p && !q) return true;
  if (!p || !q) return false;
  // RECURSIVE SOLUTION
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );

  // ITERATIVE SOLUTION
  /*
  const queueP = [p];
  const queueQ = [q];
  while (queueP.length && queueQ.length) {
      console.log("====> queues", queueP, queueQ);
      const node1 = queueP.shift();
      const node2 = queueQ.shift();
      console.log("====> nodes", node1, node2);
      if (node1.val !== node2.val) return false;
      if ((node1.right === null || node2.right === null) && node1.right !== node2.right) return false;
      if ((node1.left === null || node2.left === null) && node1.left !== node2.left) return false;

      if (node1.left !== null && node2.left !== null) {
          console.log("====> nodes.left", node1.left, node2.left);
          queueP.push(node1.left);
          queueQ.push(node2.left);
      }
      if (node1.right !== null && node2.right !== null) {
          console.log("====> nodes.right", node1.right, node2.right);
          queueP.push(node1.right);
          queueQ.push(node2.right);
      }
  }
  return true;
  */
};

// Time Complexity: O(N) as we will have to iterate through all the nodes in the tree
// Space Complexity: O(N) to keep track of the nodes in the queue.
