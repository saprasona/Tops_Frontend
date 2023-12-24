/*4. Made a function which a count how many time user given carector is repeting in string.
==>Example
let string = "hello world"
- if use give 'h' you need to reaturn 1 because h is only one time use in a given string
- if i give 'l' you need to return 3 because l is repeating 3 time in a string
- if i give 't' you need to reaturn "Charactor is not available in a string"
*/

function countCharacterOccurrence(str, char) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
  
    if (count === 0) {
      return "Character is not available in the string";
    } else {
      return count;
    }
  }
  
  // Example usage:
  let string = "hello world";
  let char1 = "l";
  let char2 = "o";
  let char3 = "t";
  
  console.log(countCharacterOccurrence(string, char1)); 
  console.log(countCharacterOccurrence(string, char2)); 
  console.log(countCharacterOccurrence(string, char3)); 
  