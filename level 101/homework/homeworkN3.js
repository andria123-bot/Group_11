class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  static compareUsers(user1, user2) {
    return user1.email === user2.email;
  }
}

const user1 = new User('Andria Lezhava', 'andria.lezhava660@gmail.com');
const user2 = new User('Andria Lezhava', 'andrialezhava730@gmail.com'); // My second email ;P
console.log(User.compareUsers(user1, user2));
