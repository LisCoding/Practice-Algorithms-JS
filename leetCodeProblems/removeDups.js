// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function(arr){
    if(arr.length < 2){
        return arr.length
    }
	var index = 1;
	var count = 0
	for(var i=0; i < arr.length; i++){
		if(arr[i] != arr[i+1]){
			arr[index] = arr[i+1];
			index++;
		} else if ( arr[i]==arr[i+1]){
			count++
		}
	}
	arr.length -= count
	return arr.length
}
