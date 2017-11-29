// 2.  Singly Linked List - Write the object constructor for a singly linked list.
 // Give it an add method and a remove value method.
// 	Examples:
// 	Input: mySLL.add(5).add(9).add(3)
// 	Output: 5 -> 9 -> 3

// 	Input: mySLL.remove(5)
// 	Output: 9 -> 3

function mySLL() {
  this.head = null;
}

function myNode(value) {
  this.value = value;
  this.next = null;
}

mySLL.prototype.add = function (value) {
  var node = new myNode(value)
  if(!this.head) {
    this.head = node;
    return this;
  }
  var runner = this.head;
  while(runner.next){
    runner = runner.next;
  }
  runner.next = node;
  return this
};

mySLL.prototype.remove = function (value) {
  if(!this.head){
    return false;
  }
  if(this.head.value == value){
    this.head = this.head.next;
    return this;
  }
  var runner = this.head;
  while(runner.next){
    if(runner.next.value == value){
      runner.next = runner.next.next;
      return this;
    } else {
      runner = runner.next
    }
  }
  return false
};

//test Cases
var mysingleLinkList = new mySLL();
console.log("this is my mySLL", mysingleLinkList);
mysingleLinkList.add(10)
mysingleLinkList.add(8)
mysingleLinkList.add(2)
console.log("this is my mySLL", mysingleLinkList);
console.log(mysingleLinkList.remove(5));
mysingleLinkList.remove(8)
console.log("this is my mySLL", mysingleLinkList);
