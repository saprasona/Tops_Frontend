const familyTree = {
    name: "Nanjibhai",
    children: [
        {
            name: "Govindbhai",
            Age: 55,
            children: [
                {
                    name: "Vipul",
                    Age: 30,
                    children: [
                        {
                            name: "Yashvi",
                            Age:5,
                        }
                    ]
                },
                {
                    name: "Sona",
                    Age: 35,
                    children: [
                        {
                            name: "Jency",
                            Age: 9,
                        },
                        {
                            name: "Veer",
                            Age: 8,
                        },
                    ],
                },
            ],
        },
        {
            name: "Jerambhai",
            Age: 52,
            children: [
                {
                    name: "Rahul",
                    Age: 25
                },
                {
                    name: "Asha",
                    Age: 30,
                    children: [
                        {
                            name: "Mithil",
                            Age: 3,
                        },

                    ],
                },
            ],
        },
    ],
};

console.log("Family Tree:-", familyTree.children[0]);
console.log("Family Tree:-", familyTree.children[0].children[1]);
