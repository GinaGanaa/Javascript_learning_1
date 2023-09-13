let ages = [10, 20, 30, 40, 50, 60];
console.log(ages[ages.length - 1]);
console.log(ages[1]);

for (let i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum = sum + ages[i];
}
console.log(sum);
