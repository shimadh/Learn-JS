//if-else
let hour = 4;
if (hour >= 6 && hour < 12) console.log("morning!");
else if (hour >= 12 && hour <= 3) console.log("afternoon!");
else console.log("evening!");

//switch
let role;
switch (role) {
  case "guest":
    console.log("guest!");
    break;
  case "moderator":
    console.log("moderator¡");
  default:
    console.log("unknown!");
}

//for
for (let i = 0; i <= 5; i++) console.log(i);

//while
let i = 5;
while (i >= 0) {
  console.log(i);
  i--;
}

//do while
let d = 0;
do {
  console.log(d);
  d++;
} while (d <= 5);

//for-in - iterate objects properties
let person = {
  name: "pepe",
  age: 23
};

for (let p in person) console.log(person[p]);

//for-of - iterate items in array
let days = ["sunday", "monday"];

for (let day of days) console.log(day);

//break and continue
for (let i = 0; i <= 10; i++) {
  if (i == 10) break;
  if (i % 2 !== 0) continue;
  console.log(i);
}

//Ex-1 - Max of two numbers
function maximum(...args) {
  return Math.max(...args);
}

console.log(maximum(12, 11, 15, 30));

//Ex-2 - Landscape or Portrait
function isLandscape(width, height) {
  return width > height;
}

console.log(isLandscape(33, 20));

//Ex-3 - FizzBuzz
function fizzBuzz(number) {
  if (typeof number !== "number") return "Not a number!";
  else if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz!";
  else if (number % 3 === 0) return "Fizz!";
  else if (number % 5 === 0) return "Buzz!";
  else return number;
}

console.log(fizzBuzz(7));

//Ex-4 - Derimit Points
function checkSpeed(speed) {
  const speedLimit = 70;
  const KmPerPoint = 5;

  if (speed < speedLimit + KmPerPoint) {
    return "OK!";
  }
  const points = (speed - speedLimit) / KmPerPoint;
  if (points >= 12) return "License Suspended!";
  else return "Points " + points;
}

console.log(checkSpeed(130));

//Ex-5 - Odd or Even
function checkOddOrEven(range) {
  for (let i = 0; i <= range; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

console.log(checkOddOrEven(10));

//Ex-6 - Count Truthy
function countTruthy(array) {
  let count = 0;
  for (let arr of array) {
    if (arr) count++;
  }
  return count;
}

let characters = [1, 2, 3, null, 4, undefined, "", 5, 0, false, 6, false];

console.log(countTruthy(characters));

//Ex-7 - String properties
function extractPropertiesWithStringValue(object) {
  for (let obj in object)
    if (typeof object[obj] === "string") console.log(obj, object[obj]);
}

let house = {
  room: 3,
  kitchen: 1,
  sittingRoom: 1,
  playground: 1,
  living: 6,
  type: "Modern"
};

console.log(extractPropertiesWithStringValue(house));

//Ex-8 - Sum of range numbers
function sum(range) {
  let sum = 0;

  for (let i = 0; i <= range; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sum(10));

//Ex-9 - Calculate student averge grade
function calculateAverage(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }

  return total / array.length;
}

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

let marks = [90, 80, 90];
console.log(calculateGrade(marks));

//Ex-10 - Generate range of stars
generateStars(10);

function generateStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";

    for (let i = 0; i < row; i++) pattern += "*";

    console.log(pattern);
  }
}

//Ex-11 - Generate prime numbers
function generatePrime(range) {
  for (let number = 2; number <= range; number++)
    if (checkPrime(number)) console.log(number);
}

generatePrime(20);

function checkPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0)
      // 20 % 2 === 0 - not prime, 19 % 2 === 0 - prime
      return false;

  return true;
}
