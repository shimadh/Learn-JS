const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    return `Circle has radius of ${_radius.get(this)}`;
  }
}

module.exports = Circle;
