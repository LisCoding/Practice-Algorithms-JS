//Implement selectionSort

function selectionSort(arr) {
  var min;
  var index;
  for(var i = 0; i < arr.length-1; i++){
    min = arr[i];
    for(var j = i+1; j < arr.length; j++){
      if( arr[j]< min ){
        min = arr[j]
        index = j
      }
      if(min != arr[i]){
        var temp = arr[i]
        arr[i] = min
        arr[j] = temp
      }
    }
  }
  return arr
}
var arr= [2, 7, 1, 5, 4]
var arr1 = [9, -1, 4,2, 0]
console.log(selectionSort(arr));
console.log(selectionSort(arr1));
