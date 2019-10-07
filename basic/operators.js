let x = 10;
let y = 38;

//arithmatic
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(x % y);
console.log(x ** y);

//increment and decrement
console.log(++x, --y);

//assignment
console.log((x = x + 1), (y = y + 1));

//comparison
console.log(x > y, x >= y, x < y, x <= y, x === y, x !== y);

//ternary
let points = 100;
let type = points > 100 ? "gold" : "silver";
console.log(type);

//logical
console.log(true && true, true || false, true && !false);

//non-boolean
let userSelected = "";
let defaultColor = "orange";
console.log(false || 0, false || NaN, userSelected || defaultColor);

//bitwise
let read = 4; //0000100
let write = 2; //0000010
let run = 1; //0000001

let permission = read | write; // | for giving permission

let hasPermission = permission & run ? "granted" : "denied"; // & for checking

console.log(hasPermission);
