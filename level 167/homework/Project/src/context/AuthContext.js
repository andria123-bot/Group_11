import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [users, setUsers] = useState([]);

  const register = (userData) => {
    const newUser = { ...userData, id: Date.now() };
    setUsers([...users, newUser]);
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
  };

  const login = (credentials) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );
    if (user) {
      setAccount(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setAccount(null);
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const updateUser = (userId, updatedData) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, ...updatedData } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <AuthContext.Provider
      value={{ account, users, register, login, logout, deleteUser, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};