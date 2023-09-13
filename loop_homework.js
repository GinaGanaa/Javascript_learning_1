//1)
let naturalNumbers = 10;
for (let i = 1; i <= naturalNumbers; i++) {
  console.log("i=", i);
}
//2)
let n1 = 35;
for (let i = n1; i >= 1; i--) {
  //i=9
  console.log("i=", i); //i=10
}
//3)
for (let i = 97; i <= 122; i++) {
  console.log(String.fromCharCode(i));
}
//4)
for (let i = 1; i <= 100; i++) {
  //i=4
  if (i % 2 == 0) {
    console.log(i); //i=4
  }
}
//5)
for (i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
//6)
let sum = 0;
let n2 = 10;
for (i = 1; i <= n2; i++) {
  sum = sum + i;
}
console.log(sum);
//7)
sum = 0;
for (i = 0; i <= 10; i = i + 2) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
console.log(sum);
//8)
sum = 0;
for (i = 1; i <= 10; i = i + 2) {
  if (i % 2 == 1) {
    sum = sum + i;
  }
}
console.log(sum);
//9)
let n = 3;
for (i = 1; i <= 10; i++) {
  console.log(n, "*", i, "=", n * i);
}
// for (i = 1; i <= 10; i++) {
//   console.log(n);
// }
//10)
let n3 = 1570068;
let count = 0;
for (; n3 >= 1; ) {
  n3 = n3 / 10;
  count++;
}
console.log(count);

let n4 = 59237;
let lastDigit = n4 % 10;

for (; n4 > 10; n4 = n4 / 10) {}
let firstDigit = Math.floor(n4);
console.log("last digit is", lastDigit);
console.log("first digit is", firstDigit);
