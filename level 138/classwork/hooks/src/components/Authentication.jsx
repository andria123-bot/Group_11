import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

const Authentication = () => {
  const [account, setAccount] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const account = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
    setLocalStorage(account.email, account);
  }

  const handleAuthorization = (e) => {
      e.preventDefault();
      const account = {
        email: e.target.email.value,
        password: e.target.password.value,
      }

    const data = getLocalStorage(account.email);

    console.log(data)

    if(data === undefined) {
      alert("Account not found");
      return;
    }

    if(data.password === account.password){
      alert("Welcome!");
      setAccount(data);
    } else {
      alert("Incorrect password");
    }
  }

  return (
    <main>
      {/* Registration section */}
      <section>
        <h2>Registration</h2>
        <form onSubmit={handleRegister}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" minLength={5} maxLength={10} required />
          <button>Register</button>
        </form>
      </section>

        {/* Authorization section */}
      <section>
        <h2>Authorization</h2>
        <form onSubmit={handleAuthorization}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button>Login</button>
        </form>
      </section>

      {/* Profile */}
      <section>
        <h2>Profile</h2>
        {
          account ? (
            <div>
              <p>Username: {account.username}</p>
              <p>Email: {account.email}</p>
            </div>
            ) :
            (
              <p>Please login</p>
            )
          }
        </section>
      </main>
    )
}

export default Authentication;