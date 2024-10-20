function Person(name, age) {
  this.name = name;
  this.age = age;
  
  this.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  };
}

let person1 = new Person("Andria", 15);
person1.introduce();


