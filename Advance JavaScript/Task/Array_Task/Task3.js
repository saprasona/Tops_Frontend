// -----------1. ['i','am', 'urvish'] ==> want ['urvish','am','i']    by use of map and loop--------------

let originalArray = ['i', 'am', 'urvish'];

// using map
let reversedArrayMap = originalArray.map((element, index, array) => array[array.length - 1 - index]);
console.log("Reversed array using map:", reversedArrayMap);

// using a loop
let reversedArrayLoop = [];
for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArrayLoop.push(originalArray[i]);
}
console.log("Reversed array using loop:", reversedArrayLoop);

// -------------2. want "i am urvish" without use join method--------------
let wordsArray = ['i', 'am', 'urvish'];
let resultString = '';

for (let i = 0; i < wordsArray.length; i++) {
    resultString += wordsArray[i];
    if (i < wordsArray.length - 1) {
        resultString += ' ';
    }
}

console.log(resultString);
