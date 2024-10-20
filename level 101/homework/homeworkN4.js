class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value > 0) this._price = value;
  }
}

const product = new Product('Laptop', 1200);
product.price = -100;
