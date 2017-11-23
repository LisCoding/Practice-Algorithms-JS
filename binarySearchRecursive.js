// Write a function rBS that behaves like the following:
// var arr = [-90,-19,0,2,12,29,33,190,320];
// rBS(arr, 5)              => false
// rBS(arr, 12)             => 4
// rBS(arr, 0)              => 2
// rBS(arr, 190)            => 7

//steps
/*1.  Find the midpoint length / 2, Min Max
  2. check if midpoint == target if so return midpoint
  3. else check if midpoint is < || < than target and according to that we move max. min
*/
function binarySearch(arr, target, min=0, max= arr.length-1){
    if (arr.length=== 0){
      return false;
    }
    if( min > max){
      return false
    }
    var midpoint = Math.floor((min + max )/ 2)
    if(arr[midpoint] === target){
      return  midpoint
    } else if( target > arr[midpoint]) {
      return binarySearch(arr, target, midpoint + 1)
    } else if (target < arr[midpoint]){
      return binarySearch(arr, target, 0, midpoint- 1)
    }

}

var arr = [1,2, 5, 6,6,7, 8, 9, 10, 12]
var t = 1
binarySearch(arr, t)
