//data types
let company = "microsoft";
let num = 15;
let arr = [1, 2, 3, 4];
console.log(arr);
function hello() {}
//property and value
let student = {
  name: "Boldo",
  age: 15,
  grade: 70,
};
let student1 = {
  name: "dorjo",
  age: 20,
  grade: 60,
};

console.log(student);
student.age = student.age + 1;
student.surename = "Baldan";
console.log(student);
console.log(student.grade);

let class10 = [
  { name: "boldo", age: 15, grade: 70 },
  { name: "dorjo", age: 20, grade: 60 },
  { name: "tsegtse", age: 17, grade: 100 },
];

let totalAge = 0;
for (let i = 0; i < class10.length; i++) {
  totalAge = totalAge + class10[i].age;
}
console.log(totalAge / class10.length);
