// 9. Find some Data from below given array of object 
let marksheet = [
    {
        subject: "Gujarati",
        marks: 60
    },
    {
        subject: "Maths",
        marks: 40
    },
    {
        subject: "Science",
        marks: 50
    },
    {
        subject: "Hindi",
        marks: 70
    },
    {
        subject: "English",
        marks: 30
    },
]

// -----------1. Make a function to find total sum of all subject.-----------

function calculateTotalMarks(marksheet) {
    // Using reduce to calculate the total sum of marks
    let totalMarks = marksheet.reduce((sum, subject) => sum + subject.marks, 0);
    return totalMarks;
}

let totalMarks = calculateTotalMarks(marksheet);
console.log(totalMarks);

// --------------2. Make a function to find percentage.-----------------

function calculatePercentage(marksheet) {
    // Calculate the total marks using the previous function
    let totalMarks = calculateTotalMarks(marksheet);

    // Assuming total marks possible for all subjects is 100 (adjust as needed)
    let totalMarksPossible = marksheet.length * 100;

    // Calculate percentage
    let percentage = (totalMarks / totalMarksPossible) * 100;

    return percentage;
}
let percentage = calculatePercentage(marksheet);
console.log(percentage);

//----------3. Make a function to find User is pass or not (if Percentage is less then 36 he/she is fails other wise pass)-------

function isUserPassed(marksheet) {
    // Calculate the percentage using the previous function
    let percentage = calculatePercentage(marksheet);

    // Check if the percentage is greater than or equal to 36
    if (percentage >= 36) {
        return "Pass";
    } else {
        return "Fail";
    }
}
let result = isUserPassed(marksheet);
console.log(result);

// 4. Make a function which will print a centence for each subject
// ==>Example
// - 36 >= score  => print 'student is fail in Hindi(subject Name)fail' 
// - 36 < score <= 50 => 'student is below average in  Hindi(subject Name)'
// - 50 < score <= 70 => 'student is average in  Hindi(subject Name)'
// - 70 < score <= 90 => 'student is Good in Hindi(subject Name)'
// - 90 < score => 'student is brillient in Hindi(subject Name)

function printSubjectStatus(subject, marks) {
    if (marks < 36) {
      console.log(`Student is fail in ${subject}`);
    } else if (marks <= 50) {
      console.log(`Student is below average in ${subject}`);
    } else if (marks <= 70) {
      console.log(`Student is average in ${subject}`);
    } else if (marks <= 90) {
      console.log(`Student is good in ${subject}`);
    } else {
      console.log(`Student is brilliant in ${subject}`);
    }
  }
  marksheet.forEach((subject) => {
    printSubjectStatus(subject.subject, subject.marks);
  });

//---------5. make a function who is return a subject name which have highest and lowest number------
// Note : return a object like { lowentMarsk : "Englis", higestMarks :"Hindi" }

function findMinMaxSubject(marksheet) {
    let minSubject = { subject: '', marks: Infinity };
    let maxSubject = { subject: '', marks: -Infinity };
  
    marksheet.forEach((subject) => {
      if (subject.marks < minSubject.marks) {
        minSubject = { subject: subject.subject, marks: subject.marks };
      }
  
      if (subject.marks > maxSubject.marks) {
        maxSubject = { subject: subject.subject, marks: subject.marks };
      }
    });
  
    return { lowestMarks: minSubject.subject, highestMarks: maxSubject.subject };
  }
  const result1 = findMinMaxSubject(marksheet);
  console.log(result1);
  
  
  