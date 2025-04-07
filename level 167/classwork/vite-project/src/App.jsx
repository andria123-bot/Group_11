import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminPanel from "./components/AdminPanel";

export default function App() {
  const { account } = useContext(AuthContext);
  return (
    <div>
      {!account ? (
        <>
          <h1>Login</h1>
          <Login />
          <h1>Register</h1>
          <Register />
        </>
      ) : (
        <AdminPanel />
      )}
    </div>
  );
}
