
// Given an array X of multiple values (e.g. [-3,5,1,3,2,10]),
//  write a program that reverses the values in the array.
//   Once your program is done X should be in the reserved order.
//   Do this without creating a temporary array.  Also, do NOT use the reverse method
//    but find a way to reverse the values in the array (HINT: swap the first value with
// the last; second with the second to last and so forth).
var x =  [-3,5,1,3,2,10];
for(var i = 0; i < x.length/2; i++){
  var temp = x[i]
  x[i] = x[x.length-1-i]
  x[x.length-1-i] = temp
}
console.log(x);

// Assignment: Insert X in Y
// Write a program that inserts a new number X at an index Y. For example if array = [1, 3, 5, 7]
// and X = 10, and Y = 2, by the end of your program array should be [1, 3, 10, 5, 7] (in other words
//    we added '10' on index 2). Check the output of your
// array once your program is completed to make sure it's working correctly.
arr = [1,3,5,7]
x = 10;
y = 2

//arr = [1,3,5,7]

var i = arr.length - 1
while(true){
  if(i==y && i == arr.length -1){
    var temp = arr[i]
    arr[i] = x;
    arr[i +1] =temp;
    break;
  }
  if(i != y ){
    arr[i + 1] = arr[i];
    i--;
  } else {
    var temp = arr[i]
    arr[i] = x
    arr[i + 1] = temp
    break;
  }
}
console.log(arr);


// Assignment: Removing Negatives
// Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), write a program that removes any negative values in that array.  Once your program is done, the array should be composed of only the non-negative numbers, in their original order.  Do this without
// creating a temporary array; only use the pop() method to remove values from the array.
