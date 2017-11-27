//implement insertion sort

function insertionSort(arr) {
  for(var i=0; i< arr.length; i++){
    var j = i + 1
    var value = arr[j]
    while( j!= 0 && arr[j-1] > value){
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = value
  }
  return arr
}

var a = [5, 9, 2, 1]
console.log(insertionSort(a));
