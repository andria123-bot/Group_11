class Vehicle {
  #speed; // This is a Private property and il not be harrased Bitch - jesse pinkman

  constructor(speed = 0) {
    this.#speed = speed;
  }

  getSpeed() {
    return this.#speed;
  }

  setSpeed(newSpeed) {
    this.#speed = newSpeed;
  }
}

class Bike extends Vehicle {
  constructor(speed = 0) {
    super(speed);
  }

  accelerate(increment) {
    this.setSpeed(this.getSpeed() + increment);
  }

  brake(decrement) {
    this.setSpeed(Math.max(0, this.getSpeed() - decrement));
  }
}
