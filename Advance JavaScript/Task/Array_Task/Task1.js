
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// --------1. print 9th and 10th index of array----------

console.log("Element at index 8:", myArray[8]);
console.log("Element at index 9:", myArray[9]);

// ----------2. print every element of array by map and for loop----------

console.log("Using map:");
myArray.map(element => console.log(element));

console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// -----------3. change a value of 6th index with 100---------

let myArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

myArray1[5] = 100;
console.log(myArray1);

// ----------4. print a array till element value not grater then 100-----------

let myArray2 = [1, 2, 3, 4, 5, 150, 7, 8, 9];

for (let i = 0; i < myArray2.length; i++) {
    if (myArray2[i] > 100) {
        break;
    }
    console.log(myArray1[i]);
}

// ---------5. add 1 in every element of an array----------

for (let i = 0; i < myArray.length; i++) {
    myArray[i] += 1;
}
console.log(myArray);

// -----------6. add 0 in start of array-----------

myArray.unshift(0);
console.log(myArray);

// ------------7. add  99 in end of array----------

myArray.push(99);
console.log(myArray);

// ------------8. remove 1 element from start of  array---------

myArray.shift();
console.log(myArray);

// -----------------9. remove 1 element from end of array--------------

myArray.pop();
console.log(myArray);

// ------------10. do sum of all value of an array with use of map, reduce and for-loop----------------

let myArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Using map and reduce//
const sumMapReduce = myArray3.map(element => element).reduce((acc, curr) => acc + curr, 0);
console.log("Sum using map and reduce:-", sumMapReduce);

// Using a for loop//
let sumForLoop = 0;
for (let i = 0; i < myArray3.length; i++) {
    sumForLoop += myArray3[i];
}
console.log("Sum using for loop:-", sumForLoop);

// ------------11. sort a array in acending decending------------
let myArray4 = [5, 2, 8, 1, 7, 3, 6, 9, 4];
//ascending order
let ascendingOrder = myArray4.slice().sort((a, b) => a - b);
console.log("Ascending order:-", ascendingOrder);

//descending order
let descendingOrder = myArray4.slice().sort((a, b) => b - a);
console.log("Descending order:-", descendingOrder);

// -----------12. reverce an array with use of method-----------

let reversedArray = myArray.slice().reverse();
console.log("Reversed array:", reversedArray);

// ---------13. reverce an array with use of for-loop-----------

for (let i = 0; i < Math.floor(myArray.length / 2); i++) {
    // Swap elements from the beginning to the end
    let temp = myArray[i];
    myArray[i] = myArray[myArray.length - 1 - i];
    myArray[myArray.length - 1 - i] = temp;
}
console.log("Reversed array using for-loop:-", myArray);


