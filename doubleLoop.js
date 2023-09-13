let students = [
  {
    name: "John Doe",
    age: 18,
    grades: [85, 90, 78, 92, 88],
  },
  {
    name: "Alice Smith",
    age: 17,
    grades: [92, 88, 95, 87, 90],
  },
  {
    name: "Michael Johnson",
    age: 19,
    grades: [78, 85, 90, 82, 79],
  },
  {
    name: "Emma Brown",
    age: 18,
    grades: [92, 87, 85, 91, 89],
  },
  {
    name: "James Wilson",
    age: 17,
    grades: [85, 90, 88, 85, 84],
  },
  {
    name: "Olivia Taylor",
    age: 18,
    grades: [88, 90, 85, 92, 87],
  },
  {
    name: "William Anderson",
    age: 19,
    grades: [80, 78, 82, 85, 89],
  },
  {
    name: "Sophia Martinez",
    age: 17,
    grades: [95, 92, 91, 90, 88],
  },
  {
    name: "Alexander Thomas",
    age: 18,
    grades: [90, 85, 88, 92, 84],
  },
  {
    name: "Mia Hernandez",
    age: 17,
    grades: [87, 92, 88, 90, 89],
  },
];

let totalAvg = 0;
let avg = 0;
for (let i = 0; i < students.length; i++) {
  // students[i]
  let sum = 0;
  let averageOfSum = 0;
  for (let j = 0; j < students[i].grades.length; j++) {
    sum = sum + students[i].grades[j];
    console.log(sum);
  }
  averageOfSum = sum / students[i].grades.length;
  console.log(averageOfSum);
  totalAvg = totalAvg + averageOfSum;
}
avg = totalAvg / students.length;
console.log(avg);
