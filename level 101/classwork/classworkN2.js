class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  displayInfo() {
    console.log(`Make: ${this.make}, Model: ${this.model}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, fuelType) {
    super(make, model);
    this.fuelType = fuelType;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Fuel Type: ${this.fuelType}`);
  }
}
