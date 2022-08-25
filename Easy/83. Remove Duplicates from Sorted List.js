/* 
83. Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
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

var deleteDuplicates = function (head) {
  let noDuplicates = new ListNode();
  let noDuplicatesHead = noDuplicates;

  while (head) {
    let currentNode = new ListNode(head.val);

    if (!head.next || head.val !== head.next.val) {
      noDuplicates.next = currentNode;
      noDuplicates = noDuplicates.next;
    }

    head = head.next;
  }
  return noDuplicatesHead.next;
};
/* 
var deleteDuplicates = function (head) {
  let noDuplicates = head;
  while (noDuplicates) {
    while (noDuplicates.next && noDuplicates.val === noDuplicates.next.val) {
      noDuplicates.next = noDuplicates.next.next;
    }
    noDuplicates = noDuplicates.next;
  }
  return head;
};
 */
