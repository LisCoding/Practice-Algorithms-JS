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

// Write a program that creates an array 'Y' that contains all the odd numbers between 1 to 255.
//  When the program is done, 'y' should have the value of [1, 3, 5, 7, ... 255]
var myArray = [];
for(var i=1; i < 256; i++){
  if(i % 2 == 1){
    myArray.push(i)
  }
}
console.log(myArray);


// Write a program that takes an array and returns the number of values in
// that array whose value is greater than y. For example, if array = [1,3, 5, 7] and y = 3, after your program is run it will print 2 (since there are two values in the array whose value is greater than 3).
var arr = [-3, 3, 5, 11]
var num = 3
var count = 0
for(var i= 0; i < arr.length; i++){
  if(arr[i] > num){
    count++;
  console.log(arr[i]);
  }

}
console.log(count);
