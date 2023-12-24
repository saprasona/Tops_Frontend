/*7. make a function who reverce a string by wordand also need to reverce each word 
==>Example
- if i give "Hello World Test User"  i want "resU tseT dlroW olleH"
*/
function reverseStringByWordsAndChars(str) {
    let words = str.split(" ");
    let reversedWords = [];
  
    for (let i = words.length - 1; i >= 0; i--) {
      let reversedChars = words[i].split("").reverse().join("");
      reversedWords.push(reversedChars);
    }
  
    let reversedString = reversedWords.join(" ");
    return reversedString;
  }
  
  let originalString = "Hello World Test User";
  let result = reverseStringByWordsAndChars(originalString);
  
  console.log(result); 
  