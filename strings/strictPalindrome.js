/*1.  IsPalindrome - Create a function that returns a boolean whether the string is a strict palindrome. Do not ignore spaces, punctuation, or capitalization.

    Examples:
    Input: “a x a” or “racecar”,
    Output: return true.

    Input: “Dud” or “oho !”
    Output: return false.
*/
function strictPalindrome(str){
  for(var i = 0; i < Math.floor(str.length/2); i++){
    var j = str.length-1
    if(str[i] != str[j-i]){
      return false;
    }
  }
  return true
}

//test cases
var str1 = "a x a"
var str2 = "'wow'"
var str3 = "racecar!"
var str4 = "Mamam"
console.log(strictPalindrome(str1))
console.log(strictPalindrome(str2))
console.log(strictPalindrome(str3))
console.log(strictPalindrome(str4))
