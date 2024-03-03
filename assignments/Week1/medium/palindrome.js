/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, "");
  let i = 0;
  let j = str.length - 1;
  while(i <= j){
    if(str[i].toLowerCase() != str[j].toLowerCase()){
      //console.log(str[i] + " ," + str[j])
      return false;
    }
    else{
      i++;
      j--; 
    }
  }
  return true;
}

// let a = isPalindrome("aNnA")
// console.log(a)


module.exports = isPalindrome;
