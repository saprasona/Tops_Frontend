/*2. make a function which, if i give a array with odd and even number it will remove all odd number and return a array with evnet number. 
node - return array must be in accending order
==>Example
 if i give [ 1,2,4,78,2,6] need [2,2,4,6,78] 
 - [2,4,78,2,6] => ans is wrong 
 - [1,2,2,78,6] => ans is wrong
 - [2,2,4,6,78] => correct ans
 */
function filterAndSortEvenNumbers(arr) {
    // Filter out odd numbers
    const evenNumbers = arr.filter(number => number % 2 === 0);
  
    // Sort the array in ascending order
    evenNumbers.sort((a, b) => a - b);
  
    return evenNumbers;
  }
  
  const inputArray = [1, 2, 4, 78, 2, 6];
  const result = filterAndSortEvenNumbers(inputArray);
  
  console.log(result); 
  