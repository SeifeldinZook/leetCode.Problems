/* 
203. Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
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
 * @param {number} val
 * @return {ListNode}
 */

/* 
var removeElements = function(head, val) {
  let output = new ListNode(0);
  outputHead = output;

  while (head) {
    if (head.val !== val) {
      let currentNode = new ListNode(head.val);
      output.next = currentNode;
      output = output.next;
    }

    head = head.next
  }

  return outputHead.next;
};
 */

// Another Solution
var removeElements = function (head, val) {
  let pointer = head;
  let previousNode = null;

  while (pointer) {
    if (pointer.val === val) {
      if (pointer === head) {
        // same object
        head = head.next;
        pointer = head; //new head
      } else if (previousNode) {
        previousNode.next = pointer.next;
        pointer = pointer.next;
      }
    } else {
      previousNode = pointer;
      if (pointer) pointer = pointer.next;
    }
  }
  return head;
};
