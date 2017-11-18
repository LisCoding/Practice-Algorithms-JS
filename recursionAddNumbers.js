//recursion version

//add all the number from 1 to n

function sumNumbers(n){
  console.log(n)
  if(n== 1){
    return 1
  }else{
    return  n + sumNumbers(n-1)
  }

}

sumNumbers(3)

//iteratiion version
function sumNumbers1(n){
  sum = 0
  if(n== 1){
    return 1
  }
  while(n>0){
    sum += n;
    n--;
  }
  return sum
}

sumNumbers1(3)
