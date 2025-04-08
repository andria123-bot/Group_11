// src/App.jsx
import { AuthProvider } from './context/AuthContext';
import ShowAuth from './components/ShowAuthe';

function App() {
  return (
    <div>
      <AuthProvider email="user1@example.com" password="pass123">
        <ShowAuth />
      </AuthProvider>

      <AuthProvider email="user2@example.com" password="abc456">
        <ShowAuth />
      </AuthProvider>

      <AuthProvider email="admin@example.com" password="admin@123">
        <ShowAuth />
      </AuthProvider>
    </div>
  );
}

export default App;
