// 6.  (Ninja Level/ Bonus) Braces Valid - Given a string that may contain parentheses, square brackets, and curly brackets, determine whether
//  the braces are valid.

//([)]){
//Use push and pop into the array Method (Stack)
var isValid = function(str) {
  var stack = [];
  for(var i = 0; i < str.length; i++){
    if(str[i] == "(" || str[i]=="[" || str[i] == "{"){
      stack.push(str[i])
      console.log(stack);
    } else {
        console.log("SSS");
        console.log(valid(str[i], stack));
        if(!valid(str[i], stack)){
          console.log("Str", str[i], "Stack",stack)
          return false
        }
        stack.pop()
      }
    console.log(stack);
    return stack.length == 0
  }
}

var valid = function(str, stack) {
  if (str ==")" && (stack[stack.length-1] != "(")){
    return false;
  } else if (str =="]" && (stack[stack.length-1] != "[")) {
    return false
  }else if (str =="}" && (stack[stack.length-1] != "{")) {
    return false
  }
  return true;
}


var str1 = "[{]()}"
var str = "(){[]}"
// console.log(isValid(str1))
console.log(isValid(str))

//SECOND APROACH
var map = {
    "(": ")",
    "[": "]",
    "{": "}"
}
//(){}
var isValid = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var el = s[i];
        if (map[el]) {
            stack.push(map[el]);
        } else {
            if (el !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
