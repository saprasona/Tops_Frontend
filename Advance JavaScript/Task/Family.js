const familyTree = {
    name: "Nanjibhai",
    children: [
        {
            name: "Govindbhai",
            children: [
                {
                    name: "Vipul",
                    children: [
                        {
                            name: "Yashvi",
                        }
                    ]
                },
                {
                    name: "Sona",
                    children: [
                        {
                            name: "Veer",
                        },
                        {
                            name: "Jency",
                        },
                    ],
                },
            ],
        },
        {
            name: "Jerambhai",
            children: [
                {
                    name: "Rahul",
                },
                {
                    name: "Asha",
                    children: [
                        {
                            name: "Mithil",
                        },

                    ],
                },
            ],
        },
    ],
};



function printFamilyTree(person, level = 0) {
    console.log("  ".repeat(level) + person.name);
    if (person.children) {
        person.children.forEach((child) => {
            printFamilyTree(child, level + 1);
        });
    }
}

console.log("Family Tree:-");
printFamilyTree(familyTree);
