let myArray = [1,2,3,6,7,9,3,56,8];

// ------------1. give all value which can devided by 2 - not use filter------------

console.log("Values divisible by 2:-");
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    console.log(myArray[i]);
  }
}

// -----------------2. give all value above 3 by use of filter-----------------

let valuesAbove3 = myArray.filter(element => element > 3);
console.log("Values above 3:-", valuesAbove3);

// ------------3. give index of 56---------------

let indexOf56 = myArray.indexOf(56);
console.log("Index of 56:", indexOf56);

// -----------4. give true/false result when check given value is exists in array or not--------------

let InArray = myArray.includes(56);
console.log("Is in the array:", InArray);