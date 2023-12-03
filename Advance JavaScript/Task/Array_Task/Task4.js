// -----------['i','am', 'urvish'] ==> want ['hsivru','ma','i'] by use of loop------------

let inputArray = ['i', 'am', 'urvish'];
let reversedArray = [];

for (let i = inputArray.length - 1; i >= 0; i--) {
    let reversedString = '';
    for (let j = inputArray[i].length - 1; j >= 0; j--) {
        reversedString += inputArray[i][j];
    }
    reversedArray.push(reversedString);
}

console.log(reversedArray);

