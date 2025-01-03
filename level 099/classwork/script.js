class User {
  static userCount = 0;
  #id;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = this.#validateAge(age);
    this.#id = ++User.userCount;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  #validateAge(age) {
    if (age <= 0) throw new Error("Age must be a positive number.");
    return age;
  }

  static getUserCount() {
    return User.userCount;
  }
}

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = Number(document.getElementById("age").value);

  try {
    const newUser = new User(firstName, lastName, age);
    document.getElementById("userCount").innerText = `Total Users Registered: ${User.getUserCount()}`;
    document.getElementById("userList").innerText += `${newUser.fullName}, Age: ${newUser.age}\n`;
  } catch (error) {
    document.getElementById("userCount").innerText = error.message;
  }

  document.getElementById("registrationForm").reset();
});
