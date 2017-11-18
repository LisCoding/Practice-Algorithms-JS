// find the factorial of n

function ifactorial(num) {
  var factorial = 1;
  while(num >1 ){
    factorial *= num;
    num--;
  }
  return factorial;
}
console.log(ifactorial(5))

//recursion Version
function ifactorialRecursion(num) {
  if(num == 1){
    return 1
  }
  else {
    return num * ifactorial(num -1)
  }
}
ifactorialRecursion(5)
