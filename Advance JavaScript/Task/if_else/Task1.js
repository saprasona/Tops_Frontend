/*
1. make a function which take a number and , 
- if number is even then it will ptint "number is even",
- if odd the it will print "number is odd" and 
- if i pass 0 it will print "number is ZERO"
==>Example
- if i pass 10 it will print "Number is event..!"
- if i pass 10 it will print "Number is odd..!"
- if i pass 0 it will print "Number is ZERO..!"
*/
function checkNumber(number) {
    if (number === 0) {
      console.log("Number is ZERO..!");
    } else if (number % 2 === 0) {
      console.log("Number is even..!");
    } else {
      console.log("Number is odd..!");
    }
  }
  
  checkNumber(10);  
  checkNumber(5);   
  checkNumber(0);   
  
