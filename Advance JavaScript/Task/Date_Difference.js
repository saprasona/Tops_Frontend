let date1 = new Date("11/07/2022"); 
let date2 = new Date("11/15/2023"); 

// Calculate the time difference in milliseconds
let timeDifference = date2.getTime() - date1.getTime();

// Calculate the number of days by dividing the time difference by the number of milliseconds in a day
// 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
let daysDifference = timeDifference / (1000 * 60 * 60 * 24);    


console.log(`The difference between the two dates is ${daysDifference} days.`);
