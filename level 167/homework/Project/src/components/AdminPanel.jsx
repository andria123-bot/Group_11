import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AdminPanel = ({ onLogout }) => {
  const { account, users, deleteUser, updateUser } = useContext(AuthContext);

  const handleUpdate = (userId) => {
    const updatedData = { name: 'Updated Name' }; // Example update
    updateUser(userId, updatedData);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      {account && (
        <div>
          <h2>Current Account</h2>
          <p>Name: {account.name}</p>
          <p>Email: {account.email}</p>
        </div>
      )}
      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => handleUpdate(user.id)}>Update</button>
          </li>
        ))}
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default AdminPanel;