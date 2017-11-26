//implement Bubble Sort

function bubbleSort(arr) {
  var sorted = false
  while(!sorted){
    sorted = true
    for(var i = 0; i < arr.length; i++){
      if(arr[i] > arr[i+1]){
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i+1] = temp;
        sorted = false
      }
    }
  }
  return arr

}
arr = [3,6,1,2,5,7]
arr1 = [9, -1, 4, 2, 5]
console.log(bubbleSort(arr))
console.log(bubbleSort(arr1));
