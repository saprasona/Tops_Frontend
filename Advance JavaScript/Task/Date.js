let toDay = new Date("11/07/2023");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = toDay.getDate();
let month = months[toDay.getMonth()];
let year = toDay.getFullYear();
let dayName = days[toDay.getDay()];

console.log(`Today is ${day} ${month}, ${year}`);
console.log(`Today is ${dayName}`);
