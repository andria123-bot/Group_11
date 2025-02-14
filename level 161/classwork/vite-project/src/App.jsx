import React, { useState } from 'react';
import useAuth from './hooks/useAuth';
import useProducts from './hooks/useProducts';
import AuthForm from './components/AuthForm';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductItem';

const App = () => {
  const { user, register, login, logout } = useAuth();
  const { products, addProduct, deleteProduct } = useProducts();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleAuthSubmit = (username, password) => {
    if (isLogin) {
      if (!login(username, password)) {
        setError('Invalid username or password.');
      }
    } else {
      register(username, password);
    }
  };

  if (!user) {
    return (
      <div className="auth">
        <h1>{isLogin ? 'Login' : 'Register'}</h1>
        <AuthForm isLogin={isLogin} onSubmit={handleAuthSubmit} error={error} />
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Switch to Register' : 'Switch to Login'}
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {user.username}!</h1>
      <button onClick={logout}>Logout</button>

      <h2>Add Product</h2>
      <ProductForm onAddProduct={addProduct} />

      <h2>Products</h2>
      <ProductList products={products} onDeleteProduct={deleteProduct} />
    </div>
  );
};

export default App;