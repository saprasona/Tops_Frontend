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

// console.log("Family Tree:-", familyTree.children[0]);
// console.log("Family Tree:-", familyTree.children[0].children[1]);

// -----------print grandfather's first chid name---------- 
console.log("-----------print grandfather's first chid name---------- ")
if (familyTree.children && familyTree.children.length > 0) {
    const firstChildName = familyTree.children[0].name;
    console.log("Nanjibhai's first child name: " + firstChildName);
} else {
    console.log("Nanjibhai does not have any children.");
}

// -------------------print second chid's first vehicle name only--------------
console.log("-------------------print second chid's first vehicle name only--------------")
if (familyTree.children && familyTree.children.length > 0) {
    const Vehicle_name = familyTree.children[1].Vehicle_name;
    console.log("Nanjibhai's second child's vehicle name: " + Vehicle_name);
} else {
    console.log("Does not have any vehicle.");
}

// ------------print grandfather's second child's two child------------------
console.log("------------print grandfather's second child's two child------------------");
if (familyTree.children && familyTree.children.length > 1) {
    const secondChild = familyTree.children[1];

    if (secondChild.children && secondChild.children.length > 0) {
        const grandchildren = secondChild.children;
        if (grandchildren.length >= 2) {
            console.log("Nanjibhai's second child's two children:");
            console.log("- Name: " + grandchildren[0].name);
            console.log("  Age: " + grandchildren[0].Age);
            console.log("  Vehicle Name: " + grandchildren[0].Vehicle_name);
            console.log("- Name: " + grandchildren[1].name);
            console.log("  Age: " + grandchildren[1].Age);
            console.log("  Vehicle Name: " + grandchildren[1].Vehicle_name);
        } else {
            console.log("Nanjibhai's second child does not have at least two children.");
        }
    } else {
        console.log("Nanjibhai's second child does not have any children.");
    }
} else {
    console.log("Nanjibhai does not have a second child in the family tree.");
}

// --------to use loop print all children----------
console.log("--------to use loop print all children----------");
for (let i = 0; i < familyTree.children.length; i++) {
    const parent = familyTree.children[i];
    console.log("Parent's Name: " + parent.name);
    console.log("Parent's Age: " + parent.Age);
    console.log("Parent's Vehicle Name: " + parent.Vehicle_name);

    if (parent.children) {
        console.log("Children:");
        for (let j = 0; j < parent.children.length; j++) {
            const child = parent.children[j];
            console.log("- Name: " + child.name);
            console.log("  Age: " + child.Age);
            console.log("  Vehicle Name: " + child.Vehicle_name);
        }
    }
}

// -----------to use forloop print only inside children----------
console.log("--------------to use forloop print only inside children----------");
for (let i = 0; i < familyTree.children.length; i++) {
    const parent = familyTree.children[i];

    if (parent.children) {
        console.log("Children of " + parent.name + ":");
        for (let j = 0; j < parent.children.length; j++) {
            const child = parent.children[j];
            console.log("- Name: " + child.name);
            console.log("  Age: " + child.Age);
            console.log("  Vehicle Name: " + child.Vehicle_name);
        }
    }
}




