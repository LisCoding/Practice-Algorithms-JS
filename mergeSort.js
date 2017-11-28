//implement merge Sort

//implement merge sort in two sorted arrays
// function mergeSort(arr1, arr2) {
//   var sorted = [];
//   var i = 0
//   var j = 0
//   while(i < arr1.length || j < arr2.length){
//     if(arr1[i] <= arr2[j]){
//       sorted.push(arr1[i]);
//       i++;
//     } else {
//       sorted.push(arr2[j])
//       j++
//     }
//   }
//   return sorted
// }
// var a = [3]
// var b = [1, 2,3, 8 ]
// console.log(mergeSort(a, b));

//implement merge sort in unsorted array with recursion


function mergeSorting(arr) {
  if (arr.length < 2){
    return arr;
  }
  var middle = Math.floor(arr.length/2)
  var left = arr.slice(0, middle)
  var right = arr.slice(middle, arr.length)
  return merge(mergeSorting(left), mergeSorting(right))

}

function merge(arr1, arr2){
  var sorted = []; //1, 2, 3
  var i = 0
  var j = 0
  while(i < arr1.length || j < arr2.length){
    if(arr1[i] <= arr2[j] || !arr2[j]){
      sorted.push(arr1[i]);
      i++;
    } else {
      sorted.push(arr2[j])
      j++;
    }
  }
  return sorted
}

// a = [3,6, 7]
// b = [1,2,5]
// console.log(merge(a, b));
var b = [3,6,7,1,2,5, -2]
console.log(mergeSorting(b));
