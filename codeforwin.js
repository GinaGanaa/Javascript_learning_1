//condition
let balance = 150;
let monthlyFee = 20;
let autoRenew = false;

if (balance > monthlyFee) {
  if (autoRenew) {
    console.log("Automat renewal");
  } else {
    console.log("ask permission to renewal");
  }
} else {
  console.log("need to add balance");
}
// 3n huvisagch zarlaad ali ihiig n oldog nested if else bich
