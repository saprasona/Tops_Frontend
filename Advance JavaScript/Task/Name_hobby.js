let userData = [
  {
    name: "Vipul",
    age: 30,
    Hobbies: ["Gaming", "Travel", "Playing"],
  },
  {
    name: "Rahul",
    age: 25,
    Hobbies: ["Drawing", "playing", "Reading"],
  },
  {
    name: "Sona",
    age: 34,
    Hobbies: ["Reading", "Drawing", "Cooking"],
  },
  {
    name: "Alpesh",
    age: 30,
    Hobbies: ["Playing", "Reading", "Writing"],
  },
  {
    name: "Jency",
    age: 9,
    Hobbies: ["Drawing", "Travel", "coloring"],
  },
  {
    name: "Veer",
    age: 8,
    Hobbies: ["Gaming", "Eating", "playing"],
  },
];

for (let i = 0; i <= 5; i++) {
  console.log("My Name is", userData[i].name + " My Hobbies " + userData[i].Hobbies[0] + " , " + userData[i].Hobbies[1] + " , " + userData[i].Hobbies[2]);
}