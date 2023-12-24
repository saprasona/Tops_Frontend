const student = {
    firstname : "veer",
    lastname : "kumarkhaniya",
    DOB : "5th December",
    No : 9624285760,
    displayName:function(){
        return this.firstname + " " + this.lastname;
    }
}
console.log(student);
console.log(student.lastname);    //write in this type most
console.log(student["firstname"]);    //aavi  rite pan lakhi sakiye
const fullname = student.displayName();
console.log(fullname);