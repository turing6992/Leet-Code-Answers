/**


Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6


 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var arr = []
    if(lists.length != 0 ){
           for(var i=0;i<lists.length;i++){
        if(lists[i]!=null){
            while( lists[i].next!=null){
            arr.push(lists[i].val)
            lists[i] = lists[i].next
        }

        arr.push(lists[i].val)

        }
            }

        arr.sort(function(a,b){return a-b})
        return arr.reduceRight((next, val) => ({val, next}), null)
    }else{
        return arr.reduceRight((next, val) => ({val, next}), null)
    }

};