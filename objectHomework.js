let students = [
  { name: "John Doe", age: 18, grade: 12, country: "USA", goodAt: "Math" },
  {
    name: "Jane Smith",
    age: 17,
    grade: 11,
    country: "Canada",
    goodAt: "History",
  },
  {
    name: "Michael Johnson",
    age: 16,
    grade: 10,
    country: "Australia",
    goodAt: "Math",
  },
  { name: "Emma Brown", age: 17, grade: 11, country: "UK", goodAt: "History" },
  {
    name: "James Wilson",
    age: 15,
    grade: 9,
    country: "New Zealand",
    goodAt: "Math",
  },
  { name: "Sarah Lee", age: 16, grade: 10, country: "USA", goodAt: "Math" },
  {
    name: "David Chen",
    age: 18,
    grade: 12,
    country: "Canada",
    goodAt: "History",
  },
  {
    name: "Emily Wang",
    age: 17,
    grade: 11,
    country: "Australia",
    goodAt: "Math",
  },
  { name: "Daniel Kim", age: 16, grade: 10, country: "UK", goodAt: "History" },
  {
    name: "Olivia Martinez",
    age: 15,
    grade: 9,
    country: "New Zealand",
    goodAt: "Math",
  },
  { name: "Liam Johnson", age: 17, grade: 12, country: "USA", goodAt: "Math" },
  {
    name: "Sophia Garcia",
    age: 18,
    grade: 12,
    country: "Canada",
    goodAt: "History",
  },
  {
    name: "Ethan Lee",
    age: 16,
    grade: 10,
    country: "Australia",
    goodAt: "Math",
  },
  {
    name: "Isabella Chen",
    age: 15,
    grade: 9,
    country: "UK",
    goodAt: "History",
  },
  { name: "Aiden Brown", age: 16, grade: 10, country: "USA", goodAt: "Math" },
  {
    name: "Mia Wilson",
    age: 18,
    grade: 12,
    country: "Canada",
    goodAt: "History",
  },
  {
    name: "Noah Martinez",
    age: 17,
    grade: 11,
    country: "Australia",
    goodAt: "Math",
  },
  { name: "Ava Johnson", age: 16, grade: 10, country: "UK", goodAt: "History" },
  {
    name: "Lucas Lee",
    age: 15,
    grade: 9,
    country: "New Zealand",
    goodAt: "Math",
  },
  { name: "Emma Gonzalez", age: 17, grade: 12, country: "USA", goodAt: "Math" },
  {
    name: "Alexander Martinez",
    age: 18,
    grade: 12,
    country: "Canada",
    goodAt: "History",
  },
  {
    name: "Sophia Kim",
    age: 16,
    grade: 10,
    country: "Australia",
    goodAt: "Math",
  },
  {
    name: "William Brown",
    age: 15,
    grade: 9,
    country: "UK",
    goodAt: "History",
  },
  { name: "Daniel Wilson", age: 16, grade: 10, country: "USA", goodAt: "Math" },
  {
    name: "Olivia Smith",
    age: 18,
    grade: 12,
    country: "Canada",
    goodAt: "History",
  },
  {
    name: "Ethan Johnson",
    age: 17,
    grade: 11,
    country: "Australia",
    goodAt: "Math",
  },
  { name: "Ava Chen", age: 16, grade: 10, country: "UK", goodAt: "History" },
  {
    name: "Michael Brown",
    age: 15,
    grade: 9,
    country: "New Zealand",
    goodAt: "Math",
  },
  { name: "Sophia Lee", age: 17, grade: 12, country: "USA", goodAt: "Math" },
  {
    name: "Ethan Johnson",
    age: 18,
    grade: 12,
    country: "Canada",
    goodAt: "History",
  },
  {
    name: "Mia Garcia",
    age: 16,
    grade: 10,
    country: "Australia",
    goodAt: "Math",
  },
  { name: "Noah Smith", age: 15, grade: 9, country: "UK", goodAt: "History" },
];
// below code must be a function !!! example: findAvarageAge(students) geed duudhad nadaa dundaj nasiig olood butsaah yostoi
//1. find avarage age
function findAverageAge(students) {
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total = total + students[i].age;
  }
  return total / students.length;
}
let result = findAverageAge(students);
console.log(result);

//2. find avarage grade
function findAverageGrade(students) {
  let totalGrade = 0;
  let AverageOfGrade = 0;
  for (let i = 0; i < students.length; i++) {
    totalGrade = totalGrade + students[i].grade;
  }
  AverageOfGrade = totalGrade / students.length;
  return AverageOfGrade;
}
let Grade = findAverageGrade(students);
console.log(Grade);

//3. find how many students from UK
function findUKstudents(students) {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].country == "UK") {
      count++;
    }
  }
  return count;
}
let countUk = findUKstudents(students);
console.log(countUk);

//4. find how many students are under age of 16
function findUnderAges(students) {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].age < 16) {
      count++;
    }
  }
  return count;
}
let countUnderAge = findUnderAges(students);
console.log(countUnderAge);
//5. find how many students are good at math
function findGoodAtMathStudents(abc) {
  let count = 0;
  for (let i = 0; i < abc.length; i++) {
    if (abc[i].goodAt == "Math") {
      count++;
    }
  }
  return count;
}
let goodAtMath = findGoodAtMathStudents(students);
console.log("The number of students who is good at math is", goodAtMath);

//6. write a function that takes "students" and return new array that containing only students who are good at History
function goodAtHistoryStudents(abc) {
  let goodAtHistory = [];
  let count = 0;
  for (let i = 0; i < abc.length; i++) {
    if (abc[i].goodAt == "History") {
      goodAtHistory[count] = abc[i];
      count++;
    }
  }
  return goodAtHistory;
}
let goodhistoryStudents = goodAtHistoryStudents(students);
console.log("The students who are good at History", goodhistoryStudents);
//7. write a function that takes "students" and return new array that containing only students who is from UK
function studentsFromUk(students) {
  let UkStudents = [];
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].country == "UK") {
      UkStudents[count] = students[i];
      count++;
    }
  }
  return UkStudents;
}
let UkStudents = studentsFromUk(students);
console.log("The students from UK", UkStudents);
//8. write a function that takes "students" and return new array that containing only students who is older than 16
function overSixteen(students) {
  let olderStudents = [];
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].age > 16) {
      olderStudents[i] = students[i];
      count++;
    }
  }
  return olderStudents;
}
let over16 = overSixteen(students);
console.log("Older than 16-Students", over16);
//9. write a function that takes "students" and return new array that containing only students who is older than avarage age
function olderThanAvg(students) {
  let olderThanAvgStudents = [];
  let sum = 0;
  let averageOfAge = 0;
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].age;
  }
  console.log("buh suragchdiin nasnii niilber:", sum);
  averageOfAge = sum / students.length;
  console.log("avarage age of student: ", averageOfAge);
  for (let i = 0; i < students.length; i++) {
    if (averageOfAge < students[i].age) {
      olderThanAvgStudents[count] = students[i];
      count++;
    }
  }

  return olderThanAvgStudents;
}

let avg = olderThanAvg(students);
console.log("older than average students", avg);
