// property descriptors
let animal = { name: "X" };

Object.defineProperty(animal, "name", {
  writable: true,
  enumerable: true
});

animal.name = "B";
console.log(Object.keys(animal));

//prototype vs instance members
function Circle(radius) {
  //instance members
  this.radius = radius;

  this.move = function() {
    this.draw();
    console.log("move");
  };
}

// custom prototype members
Circle.prototype.draw = function() {
  console.log("draw");
};

Circle.prototype.toString = function() {
  console.log("Circle object with radius", this.radius);
};

const c1 = new Circle(1);
const c2 = new Circle(2);

//returns instances
console.log(Object.keys(c1));

//another way to check has its own property
console.log(c1.hasOwnProperty("radius"));
console.log(c1.hasOwnProperty("draw"));

//returns all members (instance + prototypes)
for (let key in c1) console.log(key);

//exercise 10 - premature optimization of stopwatch - bad stop watch
function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  // making it public available from outside this function
  Object.defineProperty(this, "startTime", {
    get: function() {
      return startTime;
    }
  });
  Object.defineProperty(this, "endTime", {
    get: function() {
      return endTime;
    }
  });
  Object.defineProperty(this, "running", {
    get: function() {
      return running;
    }
  });
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    },
    set: function(value) {
      return (duration = value);
    }
  });
}

StopWatch.prototype.start = function() {
  if (this.running) throw new Error("Stop watch is running!");

  this.running = true;

  this.startTime = new Date();
};

StopWatch.prototype.stop = function() {
  if (!this.running) throw new Error("Stop watch is not running yet!");

  this.running = false;

  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;

  this.duration += seconds;
};

StopWatch.prototype.reset = function() {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};

const sw = new StopWatch();
