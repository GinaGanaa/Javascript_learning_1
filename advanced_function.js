// function doSomething(num) {
//   console.log("do something: ", num);
//   return num * 100;
// }

// //arrow function
// const doSomething1 = (num) => {
//   console.log("do something 1: ", num);
//   return num * 2;
// };

// const answer = doSomething(1);
// console.log(answer);
// const answer1 = doSomething(2);
// const answer2 = doSomething(3);
// const answer3 = doSomething(300);

// console.log(answer1);
// console.log(answer2);
// console.log(answer3);

function operation(num1, num2, opFunc) {
  return opFunc(num1, num2);
}
function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

console.log(operation(10, 20, sub));
