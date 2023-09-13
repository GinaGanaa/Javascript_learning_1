//buh togologchdiin buh score iin dundjiig ol
let players = [
  {
    name: "John Smith",
    scores: [75, 80, 85],
  },
  {
    name: "Alice Johnson",
    scores: [90, 88, 92],
  },
  {
    name: "Michael Brown",
    scores: [80, 85, 78],
  },
  {
    name: "Emma Davis",
    scores: [92, 95, 90],
  },
  {
    name: "James Wilson",
    scores: [88, 84, 85],
  },
  {
    name: "Olivia Taylor",
    scores: [85, 90, 88],
  },
  {
    name: "William Martinez",
    scores: [78, 82, 80],
  },
  {
    name: "Sophia Anderson",
    scores: [92, 91, 90],
  },
  {
    name: "Alexander Thomas",
    scores: [85, 88, 90],
  },
  {
    name: "Mia Hernandez",
    scores: [88, 92, 89],
  },
];

//loop over the array elements
let totalAverage = 0;
for (let i = 0; i < players.length; i++) {
  let sum = 0;
  let avgOfSum = 0;
  for (let j = 0; j < players[i].scores.length; j++) {
    sum = sum + players[i].scores[j];
    avgOfSum = sum / players[i].scores.length;
  }
  totalAverage = totalAverage + avgOfSum;
}
console.log(
  "The average score of all players is",
  totalAverage / players.length
);
