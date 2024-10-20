class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}

const user = new User('Andria Lezhava', 'andria.lezhava660@gmail.com');
user.displayInfo();
