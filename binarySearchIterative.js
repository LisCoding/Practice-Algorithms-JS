//***Solve binarySearch iterative *******
// 1. Set lower bound to first position of array
//
// 2. Set upper bound to last position of array
//
// 3. While lower bound is less than or equal to the upper bound do the following steps:
//
// Set midpoint as upper bound plus lower bound divided by 2
// If midpoint element is less than the data being searched for, set new lower bound to midpoint + 1
// If midpoint element is greater than the data being searched for, set new upper bound to the midpoint - 1
// else midpoint is the found element

function iBsearch(arr, target) {
  if(arr.length=== 0){
    return false;
  }
  var max = arr.length-1;
  var min = 0;
  var midpoint = max + min / 2
  while(min <= max){
    if(arr[midpoint]== target){
      return midpoint
    } else if(arr[midpoint] < target){
      min = midpoint + 1
      midpoint = max + min / 2
    } else {
      max = midpoint - 1
      midpoint = max + min / 2
    }
  }
  return false
}
var arr = [1,2,4,5,6,8]
var t = 8
console.log(iBsearch(arr, t))
