//1) Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.
function arrayNumbers(array) {
  console.log("Orj irsen array = ", array);
  let sum = 0;
  console.log("inital sum = ", sum);
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    console.log("Inside loop sum =", sum);
  }
  return sum;
}
let arr = [15, 30, 35];
let sum = arrayNumbers(arr);
console.log(sum);

//2) Write a function that takes an array of numbers as input and returns the largest number in the array.
function maxNum(array) {
  console.log("inside the function array=", array);
  let largest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}
let largestNum = maxNum([17, 47, 97, 1, 10, 23]);
console.log("The largest number is", largestNum);
//Exercise 3: Array Min
//Write a function that takes an array of numbers as input and returns the smallest number in the array.
function minNum(array) {
  let minNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minNum) {
      minNum = array[i];
    }
  }
  return minNum;
}
let minimumNum = minNum([64, 98, 76, 86, 3]);
console.log("The minimum number is", minimumNum);
//Exercise 4: Array Average
//Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.
//find the sum then divide the sum by the number of the elemnts of the array.
function findAverage(array) {
  let sum = 0;
  let averageOfSum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  averageOfSum = sum / array.length;
  return averageOfSum;
}
let average = findAverage([76, 40, 37, 47]);
console.log("The average number is", average);

//Exercise 5: Array Reverse
//Write a function that takes an array as input and returns a new array with its elements reversed (e.g., [1, 2, 3] -> [3, 2, 1]).
function reverse(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - i - 1];
  }
  return newArr;
}
let arrayNumbers = reverse([60, 90, 80, 30, 1, 2, 3, 24, 125, 1, 5]);
console.log(arrayNumbers);

//example [1,2,3,4,5]
// newArr[array.length-1] = arr[0]
// newArr[array.length-2] = arr[1]
// newArr[array.length-3] = arr[2]
// newArr[array.length-4] = arr[3]
// newArr[array.length-5] = arr[4]
// pattern : newArr[array.length-1-i] = arr[i]
// togosgol deer n newArr aa butsaana console.log bicheed ywna.

//Exercise 6: Array Even Numbers
//Write a function that takes an array of numbers as input and returns a new array containing only the even numbers.
function evenNumbers(array) {
  let newArray = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      newArray[count] = array[i];
      count++;
    }
  }
  return newArray;
}
let eNumbers = evenNumbers([22, 27, 98, 68]);
console.log(eNumbers); //!!!
//Exercise 7: Array Odd Numbers
//Write a function that takes an array of numbers as input and returns a new array containing only the odd numbers.
function oddNumbers(array) {
  let newArray = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1) {
      newArray[count] = array[i];
      count++;
    }
  }
  return newArray;
}
let odNumbers = oddNumbers([22, 27, 97, 9]);
console.log(odNumbers);

//Exercise 8: Array Duplicate Remover
//Write a function that takes an array as input and returns a new array with duplicates removed
//(e.g., [1, 2, 2, 3, 3, 4] -> [1, 2, 3, 4]).
function duplicatesremove(input) {
  let count = 0;
  let array1 = [];
  for (let i = 0; i <= 1; i++) {
    if (input[i] != input[i + 1]) {
      array1[count] = input[i];
      count++;
    }
  }
  return array1;
}
let newArray1 = duplicatesremove([1, 2, 2, 3, 3, 4]);
console.log(newArray1);
