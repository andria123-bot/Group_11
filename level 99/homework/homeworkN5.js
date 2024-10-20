class User {
  #password; // This is a Private property and il not be harrased Bitch - jesse pinkman

  constructor(username) {
      this.username = username;
      this.#password = '';
  }

  setPassword(password) {
    if (this.#validatePassword(password)) {
      this.#password = password;
      console.log("Password set successfully.");
    } else {
      console.error("Password is not strong enough.");
    }
  }

  #validatePassword(password) {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*]/;

    return (
      password.length >= minLength &&
      hasNumber.test(password) &&
      hasSpecialChar.test(password)
    );
  }
}
