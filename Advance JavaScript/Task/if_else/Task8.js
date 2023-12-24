/*8. Make a function who return a sum of all array(simple array) element 
Note : Must use Reducer 
==>Example
1. [1,2,3,4,5] => Ans is 15  
2. [5,6,4,6] => Ans is 21  
*/
function sumArrayElements(arr) {
    // Using the reduce method to calculate the sum
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  }
  
  let array1 = [1, 2, 3, 4, 5];
  let result1 = sumArrayElements(array1);
  console.log(result1); 
  
  let array2 = [5, 6, 4, 6];
  let result2 = sumArrayElements(array2);
  console.log(result2); 
  