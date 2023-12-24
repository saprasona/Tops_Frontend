class Person {
    constructor(Name, Age) {
        this.Name = Name;
        this.Age = Age;
    }
    DisplayPerson() {
        console.log("Person Name : ", this.Name, "Person Age :", this.Age);
    }
    PersonDemo() {
        console.log("person class");
    }
}
class Student extends Person {
    constructor(sName, sAge) {
        super(sName, sAge);
        this.sName = sName;
        this.sAge = sAge;
    }
    DisplayStudent() {
        console.log("Student Name :", this.sName, "Student Age :", this.Age);
    }
    Studentdemo() {
        console.log("Student class")
    }
}
const s1 = new Student("Veer", 8);
s1.DisplayStudent();
s1.DisplayPerson();
s1.PersonDemo();