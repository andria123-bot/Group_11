class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }

  getDetails() {
    super.getDetails();
    console.log(`Student ID: ${this.studentID}`);
  }
}

const student = new Student('Andria Lezhava', 15, 'S12345');
student.getDetails();
