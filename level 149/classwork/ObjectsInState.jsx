import { useState } from "react";

const Register = () => {
  const [formState, setFormState] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const handleReset = () => {
    setFormState({});
  };

  return (
    <div>
      <form>
        <input onChange={handleChange} value={formState.email || ""} type="email" name="email" placeholder="Email" required />
        <input onChange={handleChange} value={formState.firstname || ""} type="text" name="firstname" placeholder="Firstname" required />
        <input onChange={handleChange} value={formState.lastname || ""} type="text" name="lastname" placeholder="Lastname" required />
        <input onChange={handleChange} value={formState.password || ""} type="password" name="password" placeholder="Password" required />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      <p>Email: {formState.email}</p>
      <p>Firstname: {formState.firstname}</p>
      <p>Lastname: {formState.lastname}</p>
      <p>Password: {formState.password}</p>
    </div>
  );
};

export default Register;
