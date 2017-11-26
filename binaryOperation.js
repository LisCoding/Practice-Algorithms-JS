//****ADD Binary******

a = 60
b = 13

//convert into binary
//perform addition on binary
//convert answer back into decimal notation
60 - 32 = 28
28 - 16 = 12
12 - 8  = 4

0000 0000 0011 1100
0000 0000 0000 1101
______________________
          0100 1001


//convert to decimal
1 + 8 + 64 = 73

//****SUBSTRACTION
//convert into binary
//perform substraction on binary
//convert answer back into decimal notation

0000 0000 0011 1100
0000 0000 0000 1101
-----------------------
//we borrow numbers from neigbors and the first opration becomes
              22212
0000 0000 0010 0000
0000 0000 0000 1101
______________________
          0010 1111

convert to decimal
1 + 2 + 4 + 8 + 32 = 47

//****AND *********
1. converr a and b to binary
2. then perform  & on each columns
0000 0000 0011 1100
0000 0000 0000 1101
-----------------------
          0000 1100
          decimal = 12
x y => x&y
0 0     0
0 1     0
1 0     0
1 1     1


//****OR | *********
1. convert a and b to binary
2. then perform  | on each columns
0000 0000 0011 1100
0000 0000 0000 1101
-----------------------
            11 1101
            decim = 1 + 4 + 8 + 16 + 32 = 61
x y => x|y
0 0     0
0 1     1
1 0     1
1 1     1

//****XOR ^ *********
1. convert a and b to binary
2. then perform ^ on each columns
0000 0000 0011 1100
0000 0000 0000 1101
-----------------------
            11 0001
            decimal = 1 + 16 + 32 = 49
x y => x^y
0 0     0
0 1     1
1 0     1
1 1     0

//****Shift <<  *********
a = 60
a << 2 // shift left
a >> 2 // shift right
1. convert a to binary
2. shift two bits two the right

0000 0000 0011 1100
-----------------------
0000 0000 0000 1111
decimal 1 + 2 + 4 + 8 = 15

// shift to the left 2 bits
0000 0000 0011 1100
-----------------------
0000 0000 1111 0000
decimal = 16 + 32 + 64 + 128 = 240

///**** Not
a~
//convert a into binary
//flip all of its digits
//convert to decimal notation
0000 0000 0011 1100
--------------------
1111 1111 1100 0011
//if the the first number is negative then means it a negative numbers
// to find the number we flip again and add 1 to it

0000 0000 0011 1100
0000 0000 0000 0001
--------------------
0000 0000 0011 1101
decimal = 1 + 4 _+ 8 + 16 + 32 == -61 negative value
