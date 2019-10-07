// object literal
const circle = {
  radius: 1,
  draw() {
    console.log("circle draw using object literal");
  }
};

circle.draw();

// factory pattern
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("circle draw using factory");
    }
  };
}

const circle1 = createCircle(2);
circle1.draw();
//constructor pattern
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("circle draw using constructor");
  };
}

const circle2 = new Circle(4);
circle2.draw();

// enumerating object properties
for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

// enumerating keys
const circleObj = Object.keys(circle);
console.log(circleObj);

if ("radius" in circle) console.log("radius is present");

// abstraction in objects with getter and setter
function Person(name, age) {
  this.name = name;
  this.age = age;
  let defaultState = { evolve: "Human" };
  this.getState = function() {
    return defaultState;
  };
  this.displayName = function() {
    return `Name: ${this.name}, Age: ${this.age}, State: ${
      defaultState.evolve
    }`;
  };
  Object.defineProperty(this, "defaultState", {
    get: function() {
      return defaultState;
    },
    set: function(state) {
      defaultState.evolve = state;
    }
  });
}

const person = new Person("Maxipy", 29);
person.defaultState = "Coder";
console.log(person.displayName());

// exercise stop watch
function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function() {
    if (running) throw new Error("Stop watch is running!");

    running = true;

    startTime = new Date();
  };

  this.stop = function() {
    if (!running) throw new Error("Stop watch is not running yet!");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}

const sw = new StopWatch();
