class Appliance {
  constructor(power) {
    this._power = power;
  }
}

class WashingMachine extends Appliance {
  constructor(power, brand) {
    super(power);
    this.brand = brand;
  }

  showPower() {
    console.log(this._power);
  }
}

const machine = new WashingMachine(700, 'Samsung');
machine.showPower();
