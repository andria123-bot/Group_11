import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage on initial render
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  // Register a new user
  const register = (username, password) => {
    const newUser = { username, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  // Login an existing user
  const login = (username, password) => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.username === username && savedUser.password === password) {
      setUser(savedUser);
      return true;
    }
    return false;
  };

  // Logout the current user
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return { user, register, login, logout };
};

export default useAuth;