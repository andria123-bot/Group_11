// ვქმნით კლასს სახელად Account
class Account {
  // პირადი სტატიკური ველი, რომელიც გამოიყენება ყველა მომხმარებლის შენახვისთვის
  static #users = [];
  // პირადი ველი, რომელსაც არ აქვს გარედან წვდომა, მხოლოდ შიგნიდან
  #password;

  // მშენებელი, რომელიც initializes მომხმარებლის ინფორმაციას
  constructor(email, password, fullname) {
    this.email = email; // საჯარო ველი
    this.#password = password; // პირადი ველი
    this.fullname = fullname; // საჯარო ველი

    Account.#addUser(this); // ახალი მომხმარებლის დამატება სტატიკურ ველში
  }

  // სტატიკური მეთოდი, რომელიც დაამატებს მომხმარებელს სიაში
  static #addUser(user) {
    Account.#users.push(user);
  }

  // სტატიკური მეთოდი, რომელიც გამოტანილ მომხმარებლებს
  static displayUsers() {
    this.#users.forEach(user => console.log(`${user.fullname} - ${user.email}`));
  }

  // პაროლის getter
  get password() {
    return this.#password;
  }

  // პაროლის setter
  set password(value) {
    this.#password = value;
  }
}

// მომხმარებლის შექმნა
const user1 = new Account('andria@gmail.com', 'andria123', 'Andria Lezhava');
// მომხმარებლის გამოტანა
Account.displayUsers();
