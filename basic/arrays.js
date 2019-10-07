const array = [2, 3];

//adding end
array.push(4, 5);

//adding beginning
array.unshift(0, 1);

//adding middle
array.splice(2, 0, "a", "b");
console.log(array);

//find elements in array
console.log(array.includes(5), array.lastIndexOf(5), array.indexOf("c") !== -1);

//find elements in objects (reference types)
const courses = [{ id: 1, name: "js" }, { id: 2, name: "python" }];

const courseName = courses.find(function(course) {
  return course.name == "js";
});

const courseIndex = courses.findIndex(function(course) {
  return course.name == "python";
});

console.log(courseName, courseIndex);

//es6 arrow function
console.log(courses.find(course => course.name == "python"));

//removing end
console.log(array.pop());

//removing beginnig
console.log(array.shift());

//removing middle
console.log(array.splice(1, 2));

//emptying array
console.log((array.length = 0), array.splice(0, array.splice));

//combine and slice
const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

const combined = first.concat(second);
console.log(combined, combined.slice(6));

//spread or copy
const copy = [...first, ...second, 9, 10];
console.log(copy);

//iterating array
for (let number of copy) console.log("copy", number);

copy.forEach((number, i) => console.log("ForEach", number, i));

//joining arrays and splitting strings
const joined = copy.join(" ");
console.log(joined);
console.log(joined.split(" ").join("-"));

//sorting arrays and objects
function arraySorter(a, b) {
  return a - b;
}
const reversed = [10, 9, 8, 7, 6, 5];
const sorted = reversed.sort(arraySorter);

console.log(sorted);

function objectSorter(a, b) {
  const aName = a.name.toLowerCase();
  const bName = b.name.toLowerCase();
  if (aName < bName) return -1;
  if (aName > bName) return 1;
  return 0;
}

const priority = [{ id: 5, name: "Javascript" }, { id: 7, name: "NodeJs" }];

console.log(priority.sort(objectSorter));

//check elements of an array using every and some
const positive = sorted.every(v => v >= 0);

const atLeastOne = sorted.some(v => v >= 10);

console.log(positive, atLeastOne);

//filter array
const filtered = sorted.filter(v => v >= 5);
console.log(filtered);

//map array
const filteredAndMapped = filtered.map(id => ({
  id: id,
  name: priority.filter(c => (c.id === id ? c.name : "")).map(f => f.name)[0]
}));
console.log(filteredAndMapped);

//reduce array
const sum = filtered.reduce((a, c) => a + c);
const mul = filtered.reduce((m, c) => m * c);
const sub = filtered.reduce((s, c) => s - c);

console.log(sum, mul, sub);

//Ex-1 - Array from range
function arrayFromRange(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(arrayFromRange(-10, -6));

//Ex-2 - check exist using include
function includes(array, searchElement) {
  for (let arr of array) if (arr === searchElement) return true;

  return false;
}

const numbers = [1, 2, 3, 4, "", 8, 7];

console.log(includes(numbers, ""));

//Ex-3 - exclude value from array
function excludes(array, elements) {
  let output = [];
  for (let arr of array) if (!elements.includes(arr)) output.push(arr);
  return output;
}

console.log(excludes(numbers, [""]));

//Ex-4 - move array value with the given index and offset
function move(array, index, offset) {
  let position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset!");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

console.log(move(numbers, 1, 0));

//Ex-5 - count the occurrence of number in an array
function countOccurence(array, searchElement) {
  return array.reduce((count, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return occurrence + count;
  });
}

console.log(countOccurence(numbers, 1));

//Ex-5 get maximum value from an array
function getMax(array) {
  if (array.length === 0) return undefined;
  return array.reduce((maximum, current) =>
    current > maximum ? current : maximum
  );
}

console.log(getMax(numbers));

//Ex-7 - movies
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 }
];

const titles = movies
  .filter(m => m.year === 2018 && m.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

console.log(titles);
