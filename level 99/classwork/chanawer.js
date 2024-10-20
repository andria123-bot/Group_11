// class Account {
//   // #password;
//   static count = 0;

//   constructor(firstName, lastName, passwords) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     Account.objectCount();
//     // this.#password = passwords;
//   }

//   printInfo() {
//     console.log(this.firstName, this.lastName);
//   }

//   // set password(newPass) {
//   //   this.#password = newPass;
//   // }

//   // set firstName(value){
//   //   this.firstName = "ASdasdasd";
//   // }
  
//   // get firstName(){
//   //   return this.firstName;
//   // }

//   // get password() {
//   //   return this.#password;
//   // }

//   static objectCount() {
//     Account.count += 1;
//     console.log(Account.count);
//   }

//   static getCount() {
//     return Account.count;
//   }
// }

// const acc1 = new Account("Andria", "Lezhava", "ASD");
// const acc2 = new Account("John", "Doe", "XYZ");

// console.log(Account.getCount());



const form = document.querySelector('form');
const accountsDiv = document.querySelector('#accounts');


class Account {
  #password;
  static #accounts = [];

  constructor(email, password, fullname) {
    this.email = email;
    this.#password = password;
    this.fullname = fullname;

    Account.#addAccount(this);
  }
  
  static #addAccount(account) {
    Account.#accounts.push(account);
    console.log(account);
    console.log(Account.#accounts)
    Account.#displayAccounts();
  }

  static #displayAccounts() {
    accountsDiv.innerHTML = '';
    for(const acc of Account.#accounts) {
      accountsDiv.innerHTML += `<p>${acc.fullname} - ${acc.email}</p>`;
    }
  }

}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;
  const fullname = form.fullname.value;

  new Account(email, password, fullname);


});