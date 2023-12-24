/*5. make a function who reverce a string (by use of for-loop)
==>Example
- if i give "Hello World...!"  i want "!...dlroW olleH"
*/
function reverseString(str) {
    let reversed = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  
    return reversed;
  }
  let originalString = "Hello World...!";
  let reversedString = reverseString(originalString);
  
  console.log(reversedString);
  