class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

function Animal(name, owner) {
  this.name = name;
  this.owner = owner;
  this.printDetails = function() {
    console.log(`Name: ${this.name}, Owner: ${this.owner}`);
  };
}

const person1 = new Person("John", 30);
const animal1 = new Animal("Lion", "Andria");

console.log(person1);
person1.greet();
person1.printDetails();

animal1.printDetails();
