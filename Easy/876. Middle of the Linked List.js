/* 
876. Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  /*
  let A = [head];
  while (A[A.length - 1].next != null)
      A.push(A[A.length - 1].next);

  console.log(A)
  return A[Math.trunc(A.length / 2)];
  
  //   Another Solution
  slow = fast = head;
  while (fast && fast.next) {
    console.log(slow, fast)
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
  */

  let currentHead = head;
  let count = 0;
  let i = 0;
  while (currentHead) {
    count++;
    currentHead = currentHead.next;
  }

  while (i < Math.floor(count / 2)) {
    head = head.next;
    i++;
  }

  return head;
};
