// Write a program that would print all the numbers from 1 to 255
  for( var i= 1; i< 256; i++){
    console.log(i);
  }
// Write a program that would print all the odd numbers from 1 to 1000
  for( var i= 1; i< 1000; i++){
    if(i % 2 == 1){
      console.log(i);
    }

  }
// Write a program that would print the sum of all the odd numbers from 1 to 5000
  var sum = 0;
  for( var i= 1; i< 5000; i++){
    if(i % 2 == 1){
      sum += i;
    }
  }
  console.log(sum);

// Given an array X say [1,3,5,7,9,13], write a program that would iterate through each member
 // of the array and print each value on the screen
  x = [1,3,5,7,9,13]
  for(var i = 0; i< x.length; i++){
    console.log(x[i]);
  }
