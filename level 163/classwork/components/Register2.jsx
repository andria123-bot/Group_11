import { useState } from 'react';

const Register2 = () => {
  const [inputedInfo, setInputedInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const info = new FormData(e.target);
    const infoObj = {};

    for (let [key, value] of info.entries()) {
      infoObj[key] = value;
    }

    setInputedInfo(infoObj);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Register</button>

        <div>
          {inputedInfo ? (
            <>
              <p>Fullname: {inputedInfo.fullname}</p>
              <p>Email: {inputedInfo.email}</p>
              <p>Password: {inputedInfo.password}</p>
            </>
          ) : (
            <p>No information has been submitted yet.</p>
          )}
        </div>
      </form>
    </>
  );
};

export default Register2;