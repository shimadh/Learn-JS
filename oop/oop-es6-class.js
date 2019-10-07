class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {
      console.log("move");
    };
  }

  // instance methods - can access with new instance
  draw() {
    console.log("draw");
  }

  // staic methods - can access without new instance
  static parse(str) {
    return str;
  }
}

const c = new Circle(3);
const c_string = Circle.parse("sss");

// private members and methods using Symbol() - Abstraction = hiding (dot notation only)
const _name = Symbol("name");
const _eat = Symbol("eat");

class Person {
  constructor(name) {
    this[_name] = name;
  }

  [_eat]() {
    console.log("eating...");
  }
}

const p = new Person("scammer");
console.log(p[_name]);
console.log(p[_eat]());

// added here for inheritance
class Eat {
  constructor(food) {
    this.food = food;
  }
}
// private members and methods using WeakMap() - Abstraction - hiding
// getters and setters covered in here
// inheritance covered in here - derived class is Eat
// method overiding is here
const _animal_name = new WeakMap();
const _animal_sound = new WeakMap();
const _animal_info = new WeakMap();
class Animal extends Eat {
  constructor(name, sound, food) {
    super(food);
    _animal_name.set(this, name);
    _animal_sound.set(this, sound);
    _animal_info.set(this, () => {
      return _animal_name.get(this) + " says " + _animal_sound.get(this);
    });
  }

  // setters
  set sound(sound) {
    _animal_sound.set(this, sound);
  }

  // getters
  get speak() {
    return _animal_info.get(this)(); // this refers Animal Object
  }
}

const a = new Animal("Cat", "Meow", "Cheese");
console.log(a.speak);
console.log("Cat wants to eat", a.food); // food is from parent Eat class

// Ex-55 - 11 - Stack
const _items = new WeakMap();
class Stack {
  constructor() {
    _items.set(this, []);
  }
  peek() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("Stack is empty!");

    return items[items.length - 1];
  }

  push(value) {
    _items.get(this).push(value);
  }

  pop() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("Stack is empty!");

    items.pop();
  }

  get count() {
    return _items.get(this).length;
  }
}

const stack = new Stack();

console.log(stack);
