let person = {
  name: "Andria",
  age: 15,
  introduce: function() {
    console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.");
  }
};

person.introduce();