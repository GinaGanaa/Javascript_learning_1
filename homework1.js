let a = 250;
let b = 50;
let c = 370;

if (a > b) {
  if (a > c) {
    console.log("highest among three numbers is ", a);
  } else {
    console.log("highest among three numbers is ", c);
  }
} else {
  if (b > c) {
    console.log("highest among three numbers is ", b);
  } else {
    console.log("highest among three numbers is ", c);
  }
}

let x = 100;
let y = 11;
let z = 12;
let k = 1;
let h1;
let h2;

if (x > y) {
  h1 = x;
} else {
  h1 = y;
}
if (z > k) {
  h2 = z;
} else {
  h2 = k;
}
// what do we do now?
if (h1 > h2) {
  console.log("highest among four numbers is ", h1);
} else {
  console.log("highest among four numbers is ", h2);
}

let num = 1254;
let num1 = 111;
let num2 = 7;
if (num1 == num2) {
  console.log("They are equal");
} else {
  console.log("They are not equal");
}
console.log("num1/num2 =", num1 / num2);
console.log("num1+num2 =", num1 + num2);
console.log("num1*num2 =", num1 * num2);
console.log("num1-num2 =", num1 - num2);
console.log("remainer = ", num1 % num2);

//hervee num iig 2 huvaagaad uldegdel n 0 bol
if (num % 2 == 0) {
  console.log(num, "is an even number");
} else {
  console.log(num, "is odd number");
}

let number = -15;
if (number > 0) {
  console.log(number, "is a positive number");
} else {
  console.log(number, "is a negative number");
}
