// Assignment: iFibonacci
// Write a function iFibonacci that behaves like the following:
// iFibonacci(0) = 0           => 0
// iFibonacci(1) = 1           => 1
// iFibonacci(2) = 1           => 1
// iFibonacci(3) = 1 + 1       => 2
// iFibonacci(4) = 1 + 2       => 3
// iFibonacci(5) = 2 + 3       => 5
// iFibonacci(6) = 3 + 5       => 8

function iFibonacci(num) {
  var fibs = [0, 1];
  if (num < 2){
    return fibs[num];
  }
  while(fibs.length != num +1){
    fibs.push(fibs[fibs.length-2] + fibs[fibs.length-1])
  }
  return fibs[fibs.length-1]
}


iFibonacci(6)

//recursion metthod
function iFibonacciRecursion(num, arr =[0, 1]) {
  if(num < 2){
    return arr[num]
  }
  if(num+ 1 == arr.length){
    return arr[arr.length-1]
  } else {
    newArray = arr.push(arr[arr.length-2] + arr[arr.length-1])
    return iFibonacciRecursion(num, newArray)
  }
}

iFibonacciRecursion(6)

//Other Solution


// rFibonacci(0) = 0                                  => 0
// rFibonacci(1) = 1                                  => 1
// rFibonacci(2) = rFibonacci(0) + rFibonacci(1)      => 1
// rFibonacci(3) = rFibonacci(1) + rFibonacci(2)      => 2
// rFibonacci(4) = rFibonacci(2) + rFibonacci(3)      => 3
// rFibonacci(5) = rFibonacci(3) + rFibonacci(4)      => 5
// rFibonacci(6) = rFibonacci(4) + rFibonacci(5)      => 8
