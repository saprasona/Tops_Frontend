// class,object
class student
{
    constructor()
    {
        console.log("object is created");
    }
}
const s1 = new student();
const s2 = new student();

class student1
{
    constructor(firstname,lastname)
    {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    DisplayFullName ()
    {
         console.log(this.firstname +" "+ this.lastname);
    }
}
 const v1 = new student1("Sapra","Sona");
 const v2 = new student1("Sapra","vipul") ;
 v1.DisplayFullName();
 v2.DisplayFullName();

 //another way to uppper method 
 class student2
{
    constructor(firstname,lastname)
    {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    DisplayFullName ()
    {
         return this.firstname +" "+ this.lastname;
    }
}
 const j1 = new student2("Sapra","Sona");
 const j2 = new student2("Sapra","vipul") ;
 const Name1 = j1.DisplayFullName();
 const Name2 = j2.DisplayFullName();
 console.log(Name1,Name2);