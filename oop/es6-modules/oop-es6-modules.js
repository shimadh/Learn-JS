const _radius = new WeakMap();

export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    return `Circle has radius of ${_radius.get(this)}`;
  }
}
