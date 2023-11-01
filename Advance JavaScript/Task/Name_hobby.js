const people = [
    {
      name: "Alice",
      hobbies: ["Reading", "Playing", "Photography"]
    },
    {
      name: "Veer",
      hobbies: ["Gaming", "Playing", "Cooking"]
    },
    {
      name: "Jency",
      hobbies: ["Drawing", "Writing", "Colouring"]
    }
  ];
  
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    console.log(`Name: ${person.name}, Hobbies: ${person.hobbies.slice(0, 3).join(", ")}`);
  }
  