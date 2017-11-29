// 5.  Remove Duplicates - Given an array, create a new array that contains the same values,
 // but without duplicates. Do not alter the original array. This should be ‘stable’, in other words, the values in the resulting array should be in the original order as in the given array.
//
// 	Example:
//
//     Input: [1,2,1,3,4,2]
//     Output: [1,2,3,4]
//BRUTE FORCE SOLUTION
function removeDuplicates(array) {
  var uniqueArray = [array[0]];
  for (var i = 1; i < array.length; i++) {
    if (arrayUnique(array[i], uniqueArray)){
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;

}

function arrayUnique(num, arr) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] == num){
      return false;
    }
  }
  return true;

}

var a = [1,3,4,5,5, 5, 5]
// console.log(removeDuplicates(a));

//Eficient Solution
function removeDuplicatesA(arr) {
  if(arr.length < 2){
    return arr;
  }
  var value = arr[0]
  var uniqueValues = { value : true}
  var countDuplicates = 0
  for (var i = 1; i < arr.length; i++) {
    if(!uniqueValues[arr[i]]){
      uniqueValues[arr[i]] = true;
    }else {
      arr[i] = arr[i-1];
      countDuplicates ++;
    }
  }
  arr.length -= countDuplicates;
  return arr;
}

console.log(removeDuplicatesA(a));
