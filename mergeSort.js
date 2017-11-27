//implement merge Sort


function mergeSort(arr1, arr2) {
  var sorted = [];
  var i = 0
  var j = 0
  while(i < arr1.length || j < arr2.length){
    if(arr1[i] < arr2[j]){
      sorted.push(arr1[i]);
      i++;
    } else {
      sorted.push(arr2[j]){
        j++
      }
    }
  }
  return sorted

}
var a = [3,5,7]
var b = [1, 2, 8]
console.log(mergeSort(a, b));
