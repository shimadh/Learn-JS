//factory objects
function createPerson(name, age, occupation) {
  return {
    name,
    age,
    work() {
      return `${name} works in ${occupation}!`;
    }
  };
}

const sareena = createPerson("Sareena", 27, "Secretary");

console.log(sareena.work());

//constructor function
function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
  this.work = function() {
    return `${this.name} works in ${this.occupation}!`;
  };
}

const max = new Person("Max", 29, "Software development");

console.log(max.work());

//dynamic objects
max.gender = "Male";
max.name = "Maxism";
delete max.age;
console.log(max);

//enumerating objects
for (let key in max) {
  console.log(key, max[key]);
}

for (let key of Object.keys(max)) {
  console.log(key, max[key]);
}

// getting each entries in an array
for (let entry of Object.entries(max)) {
  console.log(entry, entry[0], entry[1]);
}

//check object contains string
if ("name" in max) console.log("yes");

//cloning object using object.assign / spread operator
const maxClone = Object.assign({}, max);
console.log(maxClone);

const sareenaClone = { ...sareena };
console.log(sareenaClone);

//Ex-1 - Address object
let address = {
  street: "Malbourane",
  city: "CA",
  zipCode: 35636
};

function displayAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

displayAddress(address);

//Ex-2 create address object using factory and constructor
function createAddress(street, city, zipCode) {
  //factory
  return {
    street,
    city,
    zipCode,
    show() {
      return `${this.street} ${this.city} ${this.zipCode}`;
    }
  };
}
console.log(createAddress("Orange Country", "Madrid", 786676).show());

function Address(street, city, zipCode) {
  //constructor
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
  this.show = function() {
    return `${this.street} ${this.city} ${this.zipCode}`;
  };
}

let address1 = new Address("Fini Roalhi Magu", "Hulhumale", 23000);
console.log(address1.show());
let address2 = new Address("Fini Roalhi Magu", "Hulhumale", 23000);
console.log(address2.show());

//Ex-3 Checking object equality using the address object
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

console.log(areEqual(address1, address2));

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areSame(address, address1));

//Ex-4 - create a blog post object
let post = {
  title: "blog post title",
  body: "here is the blog post title",
  author: "Max",
  comments: [
    { body: "some comment", author: "Max" },
    { body: "another comment", author: "Max" }
  ],
  isLive: true
};

console.log(post);

//Ex-5 - Post object constructor with default values
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let newPost = new Post("another post", "post body", "Pie");
console.log(newPost);
