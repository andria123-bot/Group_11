let dog = {
  name: "jeka jeka ",
  bark: function() {
    console.log(this.name + " says Woof!");
  }
};

dog.bark();