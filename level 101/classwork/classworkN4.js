class Appliance {
  constructor(brand, power) {
    this.brand = brand;
    this.power = power;
  }

  turnOn() {
    console.log("The appliance is now on.");
  }
}

class WashingMachine extends Appliance {
  washClothes() {
    console.log("Washing clothes...");
  }
}

class Microwave extends Appliance {
  heatFood() {
    console.log("Heating food...");
  }
}
