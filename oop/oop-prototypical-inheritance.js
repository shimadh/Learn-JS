function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("i am a shape duplicate member");
};

//inherit Child from Parent or extend using intermediate function inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child; // reset contructor
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

// method overriding for duplicate method on circle object
Circle.prototype.duplicate = function() {
  Shape.prototype.duplicate.call(this); // overiding child with parent shape
  console.log("i am a Circle duplicate member");
};

Circle.prototype.draw = function() {
  console.log("i am a circle draw function");
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log("i am a Square duplicate member");
};

// polymorphism - many forms
const shapes = [new Circle(), new Square()];
for (let shape of shapes) shape.duplicate();

const s = new Shape();
const c = new Circle(3, "red");
const sq = new Square(5);

// to solve multiple implementation inheritance get bloated by nesting,
// To solve this issue, javascript uses composition using mixin
// below example shows implementation of 3 features canEat(), canWalk(), canSwim()
// using contrunctor function Person and GoldFish

function mixin(target, ...sources) {
  // rest
  Object.assign(target, ...sources); // spread
}

const cantEat = {
  eat: function() {
    this.hunger--;
    console.log("eating...");
  }
};

const canWalk = {
  walk: function() {
    console.log("walking..");
  }
};

const canSwim = {
  swim: function() {
    console.log("swiming..");
  }
};

function Person() {}
mixin(Person.prototype, cantEat, canWalk);

function GoldFish() {}
mixin(GoldFish.prototype, cantEat, canSwim);

console.log(new Person(), new GoldFish());

// Exercise 41 - 10 - Prototypical Inheritance
function HtmlElement() {
  this.click = function() {
    console.log("Clicked");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function(item) {
    this.items.push(item);
  };

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function() {
    return `
    <select>
      ${this.items.map(item => `<option>${item}</option>`).join("")}
    </select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = new HtmlSelectElement();

// Exercise 43 - 12 - Polymorphism

function HtmlImgElement(src) {
  this.src = src;

  this.render = function() {
    return `<img src=${this.src} />`;
  };
}

HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.constructor = new HtmlImgElement();

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImgElement("https://test.jpg")
];
for (let element of elements) console.log(element.render());
