let data = [
  {
    name: "John Smith",
    scores: [75, 80, 85],
    age: 10,
  },
  {
    name: "Alice Johnson",
    scores: [90, 88, 92],
    age: 11,
  },
  {
    name: "Michael Brown",
    scores: [80, 85, 78],
    age: 20,
  },
  {
    name: "Emma Davis",
    scores: [92, 95, 90],
    age: 9,
  },
  {
    name: "James Wilson",
    scores: [88, 84, 85],
    age: 13,
  },
  {
    name: "Olivia Taylor",
    scores: [85, 90, 88],
    age: 10,
  },
  {
    name: "William Martinez",
    scores: [78, 82, 80],
    age: 1,
  },
  {
    name: "Sophia Anderson",
    scores: [91, 91, 90, 100, 80, 70],
    age: 12,
  },
  {
    name: "Alexander Thomas",
    scores: [85, 88, 90, 30],
    age: 100,
  },
  {
    name: "Mia Hernandez",
    scores: [88, 92, 89],
    age: 54,
  },
];
//write a function that takes players and return oldest player
function findOldestPlayer(players) {
  let theOldestPlayer = players[0];
  for (let i = 0; i < players.length; i++) {
    if (theOldestPlayer.age < players[i].age) {
      theOldestPlayer = players[i];
    }
  }
  return theOldestPlayer;
}

//write a function that takes players and return youngest player
function findYoungestPlayer(players) {
  let theYoungest = players[0];
  for (let i = 0; i < players.length; i++) {
    if (theYoungest.age > a[i].age) {
      theYoungest = a[i];
    }
  }
  return theYoungest;
}

//write a function that takes players and return avarage age of players
function findAverageAge(players) {
  let sum = 0;
  let AverageAge = 0;
  for (let i = 0; i < players.length; i++) {
    sum = sum + players[i].age;
  }
  AverageAge = sum / players.length;
  return AverageAge;
}

//write a function that takes players and return a player who has highest number of scores (hamgiin olon onootoi toglogchiig olno)
function findHighestNumberOfScores(players) {
  let thePlayer = players[0];
  for (let i = 0; i < players.length; i++) {
    if (thePlayer.scores.length < players[i].scores.length) {
      thePlayer = players[i];
    }
  }
  return thePlayer;
}

//write a function that takes players and return a player whose first score is highest
function findHighestFirstScore(players) {
  let firstScore = players[0];
  for (let i = 0; i < players.length; i++) {
    if (firstScore.scores[0] < players[i].scores[0]) {
      firstScore = players[i];
    }
  }
  return firstScore;
}

//write a function that takes players and return a player whose last score is highest
function findHighestLastScore(players) {
  let HighestLastScore = players[0];
  for (let i = 0; i < players.length; i++) {
    if (
      HighestLastScore.scores[HighestLastScore.scores.length - 1] <
      players[i].scores[players[i].scores.length - 1]
    ) {
      HighestLastScore = players[i];
    }
  }
  return HighestLastScore;
}

//write a function that takes players and return a player who has highest avarage scored player
// function findHighestAvgScore(player){
//     let highestAvg=players[0]
//     let sumOfScores=0
//     let avgScores
//     for(let i=0; i<players.length; i++){
//         sumOfScores=sumOfScores+players[i].scores[i];
//         avgScores=sumOfScores/players[i].scores.length
//         if(highestAvg.scores>){

//         }
//     }
// }

//write a function that takes players and return new array that containing sorted players by age
console.log("---------------------------------------------------------");
function findSortedPlayers(players) {
  for (let i = 0; i < players.length; i++) {
    let indexOfSmall = i + 1;
    for (let j = i + 1; j < players.length; j++) {
      if (players[j].age < players[indexOfSmall].age) {
        indexOfSmall = j;
      }
    }
    if (players[i].age > players[indexOfSmall]) {
      let temp1 = players[i];
      players[i] = players[indexOfSmall];
      players[indexOfSmall] = temp1;
    }
  }
  return players;
}
let allPlayersByAge = findSortedPlayers(data);
console.log("Sorted players by age:", allPlayersByAge);

let arr = [1, 22, 333, 21, 10, 0, -10];
// let arr = [-10,22,333,21,10,0,1]
// let arr = [-10,0,333,21,10,22,1]
// let arr = [-10,0,1,21,10,22,333]
// let arr = [-10,0,1,10,21,22,333]

// buh player deeguur guin gehdee ehnees n neg too songood tuuniig hamgiin baga tootoi haritsuulna
for (let i = 0; i < arr.length - 1; i++) {
  // i=0
  // let num=arr[i]; //1
  let indexOfSmallest = i + 1;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[indexOfSmallest]) {
      indexOfSmallest = j;
    }
  }
  if (arr[i] > arr[indexOfSmallest]) {
    let temp = arr[i];
    arr[i] = arr[indexOfSmallest];
    arr[indexOfSmallest] = temp;
  }
}
console.log("Arr= ", arr);

// players n toglogchid orj irne harin infoType deer String orj irne
function infoOfPlayers(players, infoType) {
  if (infoType == "oldest player") {
    const result = findOldestPlayer(players);
    return result;
  }
}

const avarage = infoOfPlayers(data, "avarage age");
const oldest = infoOfPlayers(data, "oldest player");
console.log("avarage = ", avarage);
console.log("oldest player = ", oldest);

// deer baigaa sortoldog example iig player sortoldog bolgoj oorchloh bas function dotor hiine
// en file dotoroh buh function iig ene gantshan infoOfPlauers function oor ajilluuldag bolgoh (callbackFunction file iin jishee g har)
