let a = 15,
  b = 20,
  c = 30;

//and or operatpr
//&& -> AND operator (both left and right sides must be true in order to be true otherwise false)
if (a > b && a > c) {
  console.log("Highest number is ", a);
} else if (b > c) {
  console.log("Highest number is ", b);
} else {
  console.log("Highest number is ", c);
}
// || -> OR operator (either left or right side is true)
if (a == 14 || b == 20) {
  console.log("true");
} else {
  console.log("false");
}
