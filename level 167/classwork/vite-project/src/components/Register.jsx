import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} value={form.username} placeholder="Username" />
      <input name="password" type="password" onChange={handleChange} value={form.password} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}