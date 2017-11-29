// 4.  Stack - Write an object constructor for a stack. Give it a push method and a pop method.
// Use an array.

function stack(){
  this.dataStore = [];
  this.top = 0
}

stack.prototype.push = function(item){
  var i = this.dataStore.length
  this.dataStore[i] = item;
  this.top = item;
  return this;
}
stack.prototype.pop = function () {
  this.dataStore.length--;
  this.top = this.dataStore[this.dataStore.length-1];
  return this;
};

stack.prototype.display = function () {
  for(var i = 0; i < this.dataStore.length; i ++){
    console.log(this.dataStore[i]);
  }
};

var myStack = new stack()
console.log("this is my stack", myStack);
myStack.push(2).push(6)
console.log("my last value", myStack.top);
myStack.display()
myStack.pop()
myStack.display()
var stack = new stack()
stack.push("Bulbasaur");
stack.push("Charmander");
stack.push("Squirtle");
stack.display();
console.log("Taking out Squirtle");
stack.pop();
stack.display();
console.log("Adding Pikachu");
stack.push("Pikachu");
stack.display();
