// Example 1: Basic Class Definition
class Car1 {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}
const myCar1 = new Car1("Toyota", "Camry");
console.log(myCar1);


// Example 2: Adding Methods
class Car2 {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  start() {
    console.log(`${this.brand} ${this.model} started.`);
  }
}
const myCar2 = new Car2("Honda", "Civic");
myCar2.start();


// Example 3: Inheritance
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
}
class Car3 extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
}
const myCar3 = new Car3("Ford", "Mustang");
console.log(myCar3);


// Example 4: Static Methods
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(5, 10));


// Example 5: Getters and Setters
class Person1 {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}
const person1 = new Person1("Alice");
console.log(person1.name);
person1.name = "Bob";
console.log(person1.name);


// Example 6: Class Expression
const Animal1 = class {
  constructor(type) {
    this.type = type;
  }
};
const dog1 = new Animal1("Dog");
console.log(dog1);


// Example 7: Private Fields (ES2022)
class Counter {
  #count = 0;
  increment() {
    this.#count++;
  }
  get count() {
    return this.#count;
  }
}
const counter1 = new Counter();
counter1.increment();
console.log(counter1.count);


// Example 8: Abstract Class (Using Comments for Implementation)
class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}
const square1 = new Square(4);
console.log(square1.area());


// Example 9: Class with Default Parameters
class Book {
  constructor(title, author = "Unknown") {
    this.title = title;
    this.author = author;
  }
}
const book1 = new Book("1984");
const book2 = new Book("Brave New World", "Aldous Huxley");
console.log(book1);
console.log(book2);


// Example 10: Combining Methods
class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
}
const calc1 = new Calculator();
console.log(calc1.add(10, 5));
console.log(calc1.subtract(10, 5));
