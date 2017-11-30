var removeElement = function(arr, val) {
	var index = 0;
	var count = 0
	for(var i=0; i < arr.length; i++){
		if(arr[i] != val){
			arr[index] = arr[i];
			index++;
		} else{
			count++
		}
	}
	arr.length -= count
	return arr.length

};
