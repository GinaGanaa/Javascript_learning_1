let grades = [10, 100, 70, 60, 90];
let classes = [
  "math",
  "physics",
  "chemsitry",
  "history1",
  "history1",
  "history101",
];

console.log(classes[3]);
console.log(classes[classes.length - 1]);

//naming convention
// let ages_for_acending = [11, 20, 17, 13];
// let temp = ages[1];
// ages[1] = ages[3];
// ages[3] = temp;
// console.log(ages);

let ages = [11, 200, 117, 133, 30, 1];
let temp = ages[0];
ages[0] = ages[1];
ages[1] = temp;
temp = ages[1];
ages[1] = ages[3];
ages[3] = temp;
temp = ages[3];
ages[3] = ages[4];
ages[4] = temp;
console.log(ages);

let name = "Ganaa";

// syntax -> durmiin aldaa
// reference -> hayag aaddressing aldaa
