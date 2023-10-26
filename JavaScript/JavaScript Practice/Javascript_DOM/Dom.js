//DOM = Document object model

console.log("Hello Veer");
let x1 = 10;
console.log(x1+10);

const x = document.getElementById('heading');
console.log(x);

const x2 = document.getElementsByClassName('heading');
console.log(x2[1]);

const x3 = document.getElementsByTagName('h1');
console.log(x3);
console.log(x3[1]);

const x4 = document.querySelector('h1');
console.log(x4);

const x5 = document.querySelector('#myName');
console.log(x5);

const x6 = document.querySelector('.heading');
console.log(x6);

const x7 = document.querySelectorAll('.heading');
console.log(x7);

