const student = ["Kavya", "Sarthi", "Pal", "Veer", "Jency", "Dherya"];  //array
console.log(student[3]);

console.log(student.length);
const len = student.length;   //another method to write
console.log(len);

console.log(student);
student.pop();              //pop means remove last element
console.log(student);

console.log(student);
student.push("Anju");              //push means add new element in last 
console.log(student);

// console.log(student.slice(2));
const newstudent = student.slice(2);
console.log(student);
console.log(newstudent);        

student.sort();
console.log(student);
console.log(student.sort());          //alphabetical set 

student.reverse();
console.log(student);                 //reverse the element

const student2 = [1,58,62,45,23,98,12,74];
student2.sort();
console.log(student2);
student2.reverse();
console.log(student2); 

const number = [1,33,62,52,23,12,74];
console.log(number);
number[0] = 100;
console.log(number);

const number1 = [65,33,1,12,74];
number1.forEach(function(value,index,array){
    console.log(value,index,array);
});
number1.forEach(function(value){
    console.log(value);
});

const student1 = [                   //object array
    {
        Name : "Veer",
        roll_no : 19,
        marks : 95,
    },
    {
        Name : "Jency",
        roll_no : 9,
        marks : 97,
    },
    {
        Name : "Yashvi",
        roll_no : 10,
        marks : 98,
    }
]
console.log(student1);
console.log(student1[0]);
console.log(student1[2].Name);