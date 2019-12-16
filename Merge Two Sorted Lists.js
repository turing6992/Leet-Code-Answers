/**

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var l1arr = [];
    while(l1!=null && l1.hasOwnProperty("next")){
        l1arr.push(l1.val)
        l1 = l1.next;
    }
    while(l2!=null && l2.hasOwnProperty("next")){
        l1arr.push(l2.val)
        l2 = l2.next;
    }

    l1arr = l1arr.sort(function(a,b){return a-b;})
    return (l1arr.reduceRight((next, val) => ({val, next}), null));

};