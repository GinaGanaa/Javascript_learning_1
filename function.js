//function -> keyword buyu tulhuur ug (computer oilgono)
function findSumOfThreeNumbers(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  return sum;
}

let toyota = findSumOfThreeNumbers(10, 20, 30);
console.log(toyota);

let mb = findSumOfThreeNumbers(100, 200, 300);
console.log(mb);

function printLyrics(songName) {
  if (songName == "baby shark") {
    return "Baby Shark, doo-doo, doo-doo";
  } else if (songName == "my love") {
    return "An empty street, an empty house";
  } else {
    return "there is no such song";
  }
}
let lyrics = printLyrics("my love");
console.log(lyrics);

function sum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
let niilber = sum(10, 20);
console.log(niilber);

//mathOperation nertei function zohio
// ug function 3 n utga avna
// ehnii 2 utga num1,num2 baina
// suuliin utga operation baina (+-*/)
// hervee operation + baival 2 toog hoorond n nemj butsaana
// hervee operation - baival 2 toog hoorond n hasaj butsaana
// hervee operation * baival 2 toog hoorond n urjuulj butsaana
// hervee operation / baival 2 toog hoorond n huvaaj butsaana
function mathOperation(num1, num2, operation) {
  if (operation == "+") {
    return num1 + num2;
  }
  if (operation == "-") {
    return num1 - num2;
  }
  if (operation == "*") {
    return num1 * num2;
  }
  if (operation == "/") {
    return num1 / num2;
  }
}

let result = mathOperation(10, 20, "*");
let result1 = mathOperation(100, 20, "/");
let result2 = mathOperation(101, 210, "+");
console.log("result = ", result);
console.log("result1 = ", result1);
console.log("result2 = ", result2);

//homework 1
//findMax nertei function zohio
// ug function 3n too avdag baih yostoi
// ug function hamgiin ih toog olood butsaadag baih yostoi
function FindMax(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else {
    if (b > c) {
      return b;
    } else {
      return c;
    }
  }
}
let Max = FindMax(5, 1, 3000);
console.log("Max = ", Max);
//homework 2
// 5 bolon 11t huvaagddag esehiig oldog divisile nertei function zohiono.
//ug function-g duudahdaa 1 too ogch yavuulna nadad 4 oor hariu butsaana
//example1: divisile(17) gej duudahad
// expected output: 5d huvaagdahgui 11t huvaagdahgui
//example2: divisile(22) gej duudahad
// expected output: 5d huvaagdahgui 11t huvaagdana
//example2: divisile(55) gej duudahad
// expected output: 5d huvaagdana, 11t huvaagdana
function divisible(too) {
  if (too % 5 == 0 && too % 11 == 0) {
    return "5d huvaagdana, 11t huvaagdana";
  } else if (too % 5 != 0 && too % 11 == 0) {
    return "5d huvaagdahgui 11t huvaagdana";
  } else if (too % 5 != 0 && too % 11 != 0) {
    return "5d huvaagdahgui 11t huvaagdahgui";
  } else {
    return "5d huvaagdana, 11d huvaagdahgui";
  }
}
let number = divisible(22);
console.log(number);

// SCOPE-{} GLOBAL OR LOCAL
let dugaar = 1002;
function square(num) {
  //local variable
  let dugaar = 1001;
  console.log("local dugaar = ", dugaar);
  return num * num;
}
let num = square(20);
console.log(num);
console.log(dugaar);

let boldo = 52;
{
  let boldo = 15;
  console.log("Geriin boldo ", boldo);
}
console.log("Global boldo", boldo);
console.log("a" < "b");
