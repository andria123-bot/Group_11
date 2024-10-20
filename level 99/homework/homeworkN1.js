class Car {
  constructor(make, model) {
    this.make = make;  // Public property
    this.model = model;
  }
}

const myCar = new Car("Toyota", "Prius");


console.log(myCar.make);
console.log(myCar.model);
