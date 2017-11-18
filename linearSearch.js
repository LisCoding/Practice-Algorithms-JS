var arr = [24, 8, 23, 3];
function linearSearch(num, arr) {
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == num){
      return true;
    }
  }
  return false
}

linearSearch(8, arr);   // => 1
linearSearch(-99, arr); // => false
