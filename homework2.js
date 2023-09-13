// Write a C program to find whether a given year is a leap year or not.
// Test Data : 2016
// Expected Output :
// 2016 is a leap year.

let year = 2000;
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log(year, "is a leap year");
    } else {
      console.log(year, "is not a leap year");
    }
  } else {
    console.log(year, "is a leap year");
  }
} else {
  console.log(year, "is not leap year");
}
//naming convention
/**
 * camelCase
 * snake_case
 */

// Write a C program to read the age of a candidate and determine whether he is eligible to cast his/her own vote.
// Test Data : 21
// Expected Output :
// Congratulation! You are eligible  for casting your vote.
let num = 21;
if (num >= 21) {
  console.log("Congratulations! You are eligible for casting your vote");
} else {
  console.log("Sorry, you are not eligible to cast");
}

// Write a C program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 0 when m is 0 and -1 when m is less than 0.
// Test Data : -5
// Expected Output :
// The value of n = -1

// Write a C program to accept the height of a person in centimeters and categorize the person according to their height.
// Test Data : 135
// Expected Output :
// The person is Dwarf.
let num1 = 160;
if (num1 <= 135) {
  console.log("The person is Dwarf");
} else if (num1 < 170) {
  console.log("Normal person");
} else {
  console.log("The person is big");
}
// Write a C program to find the largest of three numbers.
// Test Data : 12 25 52
// Expected Output :
// 1st Number = 12,        2nd Number = 25,        3rd Number = 52
// The 3rd Number is the greatest among three

// Write a C program to accept a coordinate point in an XY coordinate system and determine in which quadrant the coordinate point lies.
// Test Data : 7 9
// Expected Output :
// The coordinate point (7,9) lies in the First quadrant.

let x1 = 7,
  y1 = 9;
if (x1 > 0 && y1 > 0) {
  console.log("first quadrant");
} else if (x1 < 0 && y1 > 0) {
  console.log("second quadrant");
} else if (x1 < 0 && y1 < 0) {
  console.log("third quadrand");
} else {
  console.log("Forth quadrant");
}

// Write a C program to read temperature in centigrade and display a suitable message according to the temperature state below:
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal in Temp
// Temp 30-40 then Its Hot
// Temp >=40 then Its Very Hot
// Test Data :
// 42
// Expected Output :
// Its very hot.
let temp = 5;
if (temp < 0) {
  console.log("Freezing weather");
} else if (temp < 10) {
  console.log("Very Cold weather");
} else if (temp < 20) {
  console.log("Cold weather");
} else if (temp < 30) {
  console.log("Normal in temp");
} else if (temp < 40) {
  console.log("It's hot");
} else {
  console.log("It's very hot");
}

// Write a C program to check whether a triangle is Equilateral, Isosceles or Scalene.
// Test Data :
// 50 50 60
// Expected Output :
// This is an isosceles triangle.
function triangle(first, second, third) {
  if (first == second) {
    if (second == third) {
      if (first == third) {
        console.log("isosceles triangle");
      }
    }
  }
  if (first != second && second != third && first != third) {
    console.log("Scalene triangle");
  }
  if ((first == second) == third) {
    console.log("Equilateral triangle");
  }
}
let hariu = triangle(50, 50, 50);
console.log(hariu);

let day = 5;
if (day == 1) {
  console.log("Monday");
} else if (day == 2) {
  console.log("Tuesday");
} else if (day == 3) {
  console.log("Wednesday");
} else if (day == 4) {
  console.log("Thursday");
} else if (day == 5) {
  console.log("Friday");
} else if (day == 6) {
  console.log("Saturday");
} else if (day == 7) {
  console.log("Sunday");
} else {
  console.log("it is not a day");
}
//ene code iig urgeljluulj duusgana hervee day n 1 ees 7 giin hoorond bish bol "it is not a day"
// gej hevlej gargaj ireh yostoi!

// Write a program in C to calculate and print the electricity bill of a given customer.
//The customer ID, name, and unit consumed by the user should be captured from the keyboard
//to display the total amount to be paid to the customer.

// The charge are as follow :

// Unit	Charge/unit
// upto 199	@1.20
// 200 and above but less than 400	@1.50
// 400 and above but less than 600	@1.80
// 600 and above	@2.00
// If bill exceeds Rs. 400 then a surcharge of 15% will be charged and the minimum bill
//should be of Rs. 100/-

// Test Data :
// 1001
// James
// 800
// Expected Output :
// Customer IDNO :1001
// Customer Name :James
// unit Consumed :800
// Amount Charges @Rs. 2.00 per unit : 1600.00
// Surchage Amount : 240.00
// Net Amount Paid By the Customer : 1840.00
let bill = 800;
console.log("Customer IDNO :1001");
console.log("Customer Name :James");
console.log("unit Consumed :800");
if (bill <= 199) {
} else if (bill < 400) {
} else if (bill < 600) {
} else if (bill > 600) {
}

if (bill > 400) {
}

function findAndPrintPayment(name, customerNo, unit) {
  console.log(
    "----------------------------------------------------------------------------"
  );
  console.log("Customer IDNO : ", customerNo);
  console.log("Customer Name : ", name);
  console.log("unit Consumed : ", unit);
  let totalPayment = 0;
  let surcharge = 0;
  let unitCharge = 0;
  if (unit <= 199) {
    totalPayment = unit * 1.2;
    unitCharge = 1.2;
  } else if (unit < 400) {
    totalPayment = unit * 1.5;
    unitCharge = 1.5;
  } else if (unit < 600) {
    totalPayment = unit * 1.8;
    unitCharge = 1.8;
  } else {
    totalPayment = unit * 2;
    unitCharge = 2;
  }
  console.log("Amount Charges @Rs.", unitCharge, "per unit : ", totalPayment);
  if (unit > 400) {
    surcharge = (totalPayment * 15) / 100;
    totalPayment = totalPayment + surcharge;
  }
  console.log("Surchage Amount : ", surcharge);
  console.log("Net Amount Paid By the Customer : ", totalPayment);
}

findAndPrintPayment("james", 1000, 800);

findAndPrintPayment("boldo", 1001, 200);
findAndPrintPayment("dorjo", 1002, 1200);
findAndPrintPayment("dulma", 1003, 100);

// Write a C program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill.

// 368 unit totalPayment = (50*0.5 + 100*0.75 + 100*1.2 + 118*1.5)*1.2
// 60 unit (50*0.5 + 10*0.75)*1.2 = 39

function calculateTotalBill(unit) {
  let totalBill = 0;
  if (unit > 50) {
    totalBill = totalBill + 50 * 0.5;
  } else {
    totalBill = unit * 0.5;
  }
  unit = unit - 50;
  if (unit > 100) {
    totalBill = totalBill + 100 * 0.75; // 160
  } else if (unit > 0) {
    totalBill = totalBill + unit * 0.75; //60
  }
  unit = unit - 100;
  if (unit > 100) {
    totalBill = totalBill + 100 * 1.2;
  } else if (unit > 0) {
    totalBill = totalBill + unit * 1.2;
  }
  unit = unit - 100;
  if (unit > 0) {
    totalBill = totalBill + unit * 1.5;
  }
  totalBill = totalBill * 1.2;
  return totalBill;
}

let bill60 = calculateTotalBill(60); // 39
let bill40 = calculateTotalBill(40); // 24
let bill268 = calculateTotalBill(268); // 296.4

console.log("Bill 60 = ", bill60);
console.log("Bill 40 = ", bill40);
console.log("Bill 268 = ", bill268);

// herver username user1 esvel user2 esvel user3 baigaad password n 12345 baival amjilttai nevterlee gedeg function bichya
// checkLogin("user1", "12345") gehed ene function nadaa true butsaana
// checkLogin("user1", "123456") gehed ene function nadaa flase butsaana
// checkLogin("user2", "12345") gehed ene function nadaa true butsaana
// checkLogin("user", "12345") gehed ene function nadaa false butsaana
// logic deer n hervee hereglegchiin username "user1" esvel "user2" esvel "user3" baival username n unend tootsnoo
// deerees n password n 12345 baih yostoi

console.log(
  "-------------------------------- Check Login --------------------------------"
);
function checkLogin(username, password) {
  if (username == "user1" || username == "user2" || username == "user3") {
    if (password == "12345") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
let isLoggedIn = checkLogin("user1", "12345");
console.log(isLoggedIn);
//
