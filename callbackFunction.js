function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function calculator(num1, num2, op) {
  //   if (op == "/") {
  //     return div(num1, num2);
  //   } else if (op == "*") {
  //     return mult(num1, num2);
  //   } else if (op == "+") {
  //     return add(num1, num2);
  //   } else if (op == "-") {
  //     return sub(num1, num2);
  //   } else {
  //     return "inviled operation!";
  //   }
  switch (op) {
    case "/":
      return div(num1, num2);
      break;
    case "*":
      return mult(num1, num2);
      break;
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return sub(num1, num2);
      break;
    default:
      return "inviled operation!";
  }
}

const result = calculator(10, 2, "-");
console.log("result:", result);

//declaring a function
//function g zarlan taniulj baina
function findDay(num) {
  //ogch yavuulsan toog n yamar odor gedgiig n butsaadag baina
  //hervee orj irsen too n 2 gedeg too baihiin bol Tuesday butsaana
  if (num == 1) {
    return "Monday";
  }
  if (num == 2) {
    return "Tuesday";
  }
  if (num == 3) {
    return "Wednesday";
  }
  if (num == 4) {
    return "Thursday";
  }
  if (num == 5) {
    return "Friday";
  }
  if (num == 6) {
    return "Saturday";
  }
  if (num == 7) {
    return "Sunday";
  } else {
    return "it's not a day";
  }
}
const day = findDay(7);
console.log("day = ", day);

//findDay funciton iig if else eer guitseene
//findDay1 function zohioj switch case eer guitseene
function findDay1(Day) {
  switch (Day) {
    case "1":
      return "Monday";
      break;
    case "2":
      return "Tuesday";
      break;
    case "3":
      return "Wednesday";
      break;
    case "4":
      return "Thursday";
      break;
    case "5":
      return "Friday";
      break;
    case "6":
      return "Saturday";
      break;
    case "7":
      return "Sunday";
      break;
    default:
      return "it's not a day";
  }
}
let theDay = findDay1("1");
console.log("The day is:", theDay);

// write findDays function that takes a number and return either 28,30 or 31 depend on which month is it.
//If the given number is less than 0 or creater than 12 then return "inviled month" (using switch case)

function findDays(months) {
  switch (months) {
    case "1":
      return "January-31";
      break;
    case "2":
      return "February-28";
      break;
    case "3":
      return "March-31";
      break;
    case "4":
      return "April-30";
      break;
    case "5":
      return "May-31";
      break;
    case "6":
      return "June-30";
      break;
    case "7":
      return "July-31";
      break;
    case "8":
      return "August-31";
      break;
    case "9":
      return "September-30";
      break;
    case "10":
      return "October-31";
      break;
    case "11":
      return "November-30";
      break;
    case "12":
      return "December-31";
      break;
    default:
      return "invalid month";
  }
}
let theMonth = findDays("8");
console.log("The given month is:", theMonth);

// ---------------------- Real Callback starts from here ----------------------------
