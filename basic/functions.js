//function declaration vs expression

function work() {
  console.log("work started!");
}

let breakTime = function() {
  console.log("after 45 minutes...");
  console.log("Its Break Time!");
};

work();
breakTime();

//function with N no of arguments
function sum() {
  let total = 0;
  for (let v of arguments) total += v;
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

//function arguments using rest operator
function cartToatal(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(cartToatal(0.2, 100, 150));

//function with default values
function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));

//getter and setters
const person = {
  firstName: "Mohamed",
  LastName: "shimaz",
  get fullName() {
    return `${this.firstName} ${this.LastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.LastName = parts[1];
  }
};

person.fullName = "Mohamed Shimad";

console.log(person.fullName);

//try and catch
const cat = {
  name: "Maxism",
  mood: "lazy",
  get moody() {
    return `${this.name} is ${this.mood}!`;
  },
  set moody(mode) {
    if (typeof mode !== "string") throw new Error("Invalid string!");
    this.mood = mode;
  }
};

try {
  cat.moody = "Happy";
} catch (e) {
  console.error(e.message);
}

console.log(cat.moody);

//this keyword using methods or function with window/global object
const post = {
  title: "Javascipt course",
  tags: ["react", "js"],
  showTags() {
    //const self = this; reference current post object and use self.title
    this.tags.forEach(function(tag) {
      console.log(tag, this.title);
    }, this); //bind(this) / this in the second argument
  }
};

console.log(post.showTags());

// es6 inherits this keyword in callback
const page = {
  title: "Javascipt course",
  tags: ["react", "js"],
  showTags() {
    this.tags.forEach(tag => {
      console.log(tag, this.title);
    });
  }
};

console.log(page.showTags());

//Ex-1 - get sum using array of arguments / use try catch to handle the error
function arraySum(...array) {
  array = array[0];
  if (!Array.isArray(array)) throw new Error("invalid array");
  return array.reduce((a, b) => a + b);
}

try {
  console.log(arraySum(1, 2, 3));
} catch (e) {
  console.log(e.message);
}

//Ex-2 - get area of circles
const circle = {
  radius: 3,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area);
