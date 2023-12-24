/*6. make a function who reverce a string by word
==>Example
- if i give "Hello World Test User"  i want "User Test World Hello"
*/
function reverseStringByWords(str) {
    let words = str.split(" ");
    let reversedWords = [];
  
    for (let i = words.length - 1; i >= 0; i--) {
      reversedWords.push(words[i]);
    }
  
    let reversedString = reversedWords.join(" ");
    return reversedString;
  }
  
  let originalString = "Hello World Test User";
  let reversedStringByWords = reverseStringByWords(originalString);
  
  console.log(reversedStringByWords); 
  
  