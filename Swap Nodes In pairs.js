/**

    Given a linked list, swap every two adjacent nodes and return its head.

    You may not modify the values in the list's nodes, only nodes itself may be changed.

    Example:

    Given 1->2->3->4, you should return the list as 2->1->4->3.

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var arr = []
    while(head!=null &&head.hasOwnProperty("next")){
        arr.push(head.val);
        head = head.next;
    }
    for(var i=0;i<arr.length;i++){
        if(i%2!=0){
            temp = arr[i];
            arr[i]=arr[i-1];
            arr[i-1]=temp
        }

    }
    return arr.reduceRight((next, val) => ({val, next}), null)

};