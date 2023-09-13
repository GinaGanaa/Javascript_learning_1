//debugging
let number = 100;
let number1 = 200;

console.log("before the function");
function sumOfTwoNumber(num1, num2) {
  console.log("num1 =", num1);
  console.log("num2 =", num2);
  console.log("inside the function");
  let sum = num1 + num2;
  return sum;
}
console.log("after the function");
let result = sumOfTwoNumber(100, 200);
let result1 = sumOfTwoNumber(1, 2);
console.log(result);
console.log(result1);
