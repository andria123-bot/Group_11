function User(name, email, password, age) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.age = age;
}

let newUser = new User('Andria Lezhava', 'andria.lezhava660@gmail.com', 'wontsayit ;)', 15);

console.log(newUser);
