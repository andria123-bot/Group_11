import React from 'react';
import ProductList from './components/ProductList';
import './style.css';

const App = () => {
  const products = [
    { name: 'ROG Strix SCAR', price: '$999', description: 'RTX 4090 I9 14900HX 64 Ram' },
    { name: 'Iphone 69 Pro Max', price: '$699', description: 'M69 Chip 16 Ram' },
    { name: 'Sony WH-1000XM5', price: '$199', description: 'Top noise-canceling headphones.' },
    { name: 'Apple Watch Ultra 2', price: '$299', description: 'Rugged smartwatch with advanced features.' },
    { name: 'iPad Pro (2024)', price: '$499', description: 'Powerful tablet with M2 chip.' },
    { name: 'DJI Pocket 2', price: '$599', description: 'Compact 4K camera with gimbal.' },
  ];

  return (
    <div className="app">
      <h1>Product Showcase</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
