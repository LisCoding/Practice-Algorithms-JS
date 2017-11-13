// Assignment: Square the Values
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that squares
//  each value in the array.  When the program is done x should have values that have
 // been squared (e.g. [1, 25, 100, 4]).
// You're not to use any of the pre-built function in Javascript.

var x = [1,5, 10, -2]
for (var i = 0; i < x.length; i++){
  x[i] = x[i] * x[i];
}
console.log(x);


// Assignment: Eliminate Negative Numbers
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that replaces
// any negative number with the value of 0. When the program is done x should have
// no negative values (e.g. [1, 5, 10, 0]).

var x = [1,5, 10, -2]
for (var i = 0; i < x.length; i++){
  if(x[i] < 0){
    x[i] = 0
  }
}
console.log(x);

// Assignment: Max, Min, and Average
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions)
// that prints the maximum number in the array, minimum value in the array as well as the
// average values in the array.

var y = [1,5, 10, -2]
var max = [0];
var min = [0];
var sum;
var avg = 0;

for (var i = 0; i < y.length; i++){
  if(y[i] > max ){
    max = y[i]
    sum += y[i]
  }else {
    min = y[i]
    sum += y[i];
  }
}
console.log(sum);
avg = sum / y.length

console.log(max);
console.log(min);
console.log(avg);
