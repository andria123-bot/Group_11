class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
    speak();
  }
  speak(){
    console.log(`This ${this.name} is making a sound.`);
  }
}

class Dog extends Animal{
  speak(){
    console.log(`${this.name} is barking.`);
  }
}

class Cat extends Animal{
  speak(){
    console.log(`${this.name} is mewing.`);
  };
};