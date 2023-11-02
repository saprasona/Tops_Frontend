let userData = [
  {
    name: "Vipul",
    age: 30,
    hobby: ["Gaming", "Travel", "Playing"],
  },
  {
    name: "Rahul",
    age: 25,
    hobby: ["Drawing", "playing", "Reading"],
  },
  {
    name: "Sona",
    age: 34,
    hobby: ["Reading", "Drawing", "Cooking"],
  },
  {
    name: "Alpesh",
    age: 30,
    hobby: ["Playing", "Reading", "Writing"],
  },
  {
    name: "Jency",
    age: 9,
    hobby: ["Drawing", "Travel", "coloring"],
  },
  {
    name: "Veer",
    age: 8,
    hobby: ["Gaming", "Eating", "playing"]
  },
];

for (let i = 0; i <= 4; i++) {
  console.log("My Name is", userData[i].name + " My Hobby is " + userData[i].hobby[1]);
}