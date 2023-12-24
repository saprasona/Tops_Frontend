/*
-> make data storage for your family and vehicle details of each family member
-> all son of your dada name only
-> all son of father/uncle's (note - me jname print thava joiye like uncle nu apu to uncle other wise dada nu apu to dad nu)
-> badha family ni vehicale details like me j
*/

const familyTree = {
    name: "Nanjibhai",
    children: [
        {
            name: "Govindbhai",
            Age: 55,
            Vehicle_name: "Innova", 
            children: [
                {
                    name: "Vipul",
                    Age: 30,
                    Vehicle_name: "Venue", 
                },
                {
                    name: "Sona",
                    Age: 35,
                    Vehicle_name: "Activa",
                },
            ],
        },
        {
            name: "Jerambhai",
            Age: 52,
            Vehicle_name: "Creta",
            children: [
                {
                    name: "Rahul",
                    Age: 25,
                    Vehicle_name: "Activa",
                },
                {
                    name: "Asha",
                    Age: 29,
                    Vehicle_name: "Activa",
                },
            ],
        },
    ],
};


// Accessing data
console.log("GrandFather's name :- "+ familyTree.name); // Nanjibhai
console.log("GrandFather's First son name :- "+ familyTree.children[0].name); // Govindbhai
console.log("GrandFather's Second son name :- "+ familyTree.children[1].name); // Jerambhai
console.log("Govindbhai's First child name :- "+ familyTree.children[0].children[0].name); // Vipul
console.log("Govindbhai's Second child name :- "+ familyTree.children[0].children[1].name); // Sona
console.log("Jerambhai's First child name :- "+ familyTree.children[1].children[0].name); // Rahul
console.log("Jerambhai's Second child name :- "+ familyTree.children[1].children[1].name); // Asha

// Accessing vehicle details
console.log("Govindbhai's Vehicle name :- "+ familyTree.children[0].Vehicle_name); // Innova (Govindbhai's vehicle)
console.log("Vipul's Vehicle name :- " + familyTree.children[0].children[0].Vehicle_name); // Venue (Vipul's vehicle)
console.log("Sona's Vehicle name :- " + familyTree.children[0].children[1].Vehicle_name); // Activa (Sona's vehicle)
console.log("Jerambhai's Vehicle name :- " + familyTree.children[1].Vehicle_name); // Creta (Jerambhai's vehicle)
console.log("Rahul's Vehicle name :- " + familyTree.children[1].children[0].Vehicle_name); // Activa (Rahul's vehicle)
console.log("Asha's Vehicle name :- " + familyTree.children[1].children[1].Vehicle_name); // Activa (Asha's vehicle)
