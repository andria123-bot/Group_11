import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AdminPanel() {
  const { account, users, deleteUser, updateUser } = useContext(AuthContext);

  const handleDelete = (username) => {
    deleteUser(username);
  };

  const handleUpdate = (user) => {
    const newUsername = prompt("New Username", user.username);
    const newPassword = prompt("New Password", user.password);
    updateUser({ username: newUsername, password: newPassword });
  };

  return (
    <div>
      <h2>Welcome, {account.username}!</h2>
      <h3>All Users:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            {user.username} <button onClick={() => handleDelete(user.username)}>Delete</button> <button onClick={() => handleUpdate(user)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
