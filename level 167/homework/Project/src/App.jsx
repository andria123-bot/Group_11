import React, { useState, useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import AdminPanel from './components/AdminPanel';

const App = () => {
  const { account, logout } = useContext(AuthContext);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSuccess = () => {
    // No need to do anything, account state will update automatically
  };

  const handleRegisterSuccess = () => {
    setShowRegister(false); // Switch back to login after registration
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {!account ? (
        <>
          {showRegister ? (
            <Register onRegisterSuccess={handleRegisterSuccess} />
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )}
          <button onClick={() => setShowRegister(!showRegister)}>
            {showRegister ? 'Switch to Login' : 'Switch to Register'}
          </button>
        </>
      ) : (
        <AdminPanel onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;