// Given an array with multiple values (e.g. [-3, 3, 5, 7]), write a program that prints
// the maximum number in the array.
var arr = [-3, 3, 5, 11]
var max = arr[0];
for(var i= 0; i < arr.length; i++){
  if(arr[i] > max){
    max = arr[i];
  }
}
console.log(max);

// Given an array with multiple values (e.g. [1,3,5,7,20]), write a program that prints the average
// of the values in the array.

var arr = [-3, 3, 5, 11]
var sum =0;
var avg;
for(var i= 0; i < arr.length; i++){
  sum += arr[i]
}
avg = sum / arr.length
console.log(avg);
