import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  const register = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const login = (credentials) => {
    const user = users.find(
      (u) => u.username === credentials.username && u.password === credentials.password
    );
    if (user) setAccount(user);
  };

  const deleteUser = (username) => {
    const updatedUsers = users.filter((u) => u.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((u) =>
      u.username === updatedUser.username ? updatedUser : u
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    if (account.username === updatedUser.username) {
      setAccount(updatedUser);
    }
  };

  return (
    <AuthContext.Provider value={{ account, users, register, login, deleteUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};