//for(initial;condition;update){body}
//initial -> run only once when the loop begin.
//condition -> run before body runs and this decides whethere the loop continue or not
//update -> this code will run at the end of the every loop and purpose of this part is "to end the loop"
//body is the code that you want to do in every loop
let n = 5;
for (let i = 0; i <= n; i = i + 1) {
  //i = 5
  console.log("i= ", i);
}

//i++ -> increment
//i-- -> decrement

//write a loop that will print from 5 to 1

for (let i = 50; i > 0; i--) {
  if (i > 25) {
    console.log(i);
  }
}

//write a loop that will print all even numbers from 1 to 20

for (let i = 1; i < 21; i = i + 1) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//finding sum of all even numbers from 1 - 10
let sum = 0;
for (let i = 1; i <= 5; i++) {
  //i = 1
  sum = sum + i; //sum = 1
}
console.log("sum = ", sum);
