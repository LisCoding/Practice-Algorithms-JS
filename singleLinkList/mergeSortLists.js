function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  if(!l1 && !l2){
    return []
  }
  var l3 = new ListNode();
  var runner = l3;
  while(l1 && l2){
    if(l2.val < l1.val){
      runner.val = l2.val
      runner.next = new ListNode();
      runner = runner.next
      l2 = l2.next
    } else {
      runner.val = l1.val
      runner.next = new ListNode();
      runner = runner.next
      l1 = l1.next
    }
  }
  while(l1 || l2) {
    if(l1){
      runner.val = l1.val
      if(l1.next){
        runner.next = new ListNode();
      }
      runner = runner.next
      l1 = l1.next
    } else if(l2) {
      runner.val = l2.val
      if(l2.next){
        runner.next = new ListNode();
      }
      runner = runner.next
      l2 = l2.next
    }
  }
  return l3
};

//Solution II
var mergeTwoLists = function(l1, l2) {
    const dummy = new ListNode();
    let ptr = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            ptr.next = l1;
            ptr = ptr.next;
            l1 = l1.next;
        } else {
            ptr.next = l2;
            ptr = ptr.next;
            l2 = l2.next;
        }
    }
    if (l1) {
        ptr.next = l1;
    }
    if (l2) {
        ptr.next = l2;
    }
    return dummy.next;
};
