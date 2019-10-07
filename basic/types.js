// primitive types
const name = "my name";
let age = 26;
let active = true;
let company = undefined;
let relationship = null;

console.log(name, age, active, company, relationship);

//refrence types
let person = {
  name: "pepe",
  age: 23
};

person.active = true;

let days = ["sunday", "monday"];

console.log(person, person.name, days[0]);

function greet(name) {
  console.log("Helo " + name);
}

function square(number) {
  return number * number;
}

greet("same");
console.log(square(2));
