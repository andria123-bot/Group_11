import ProductList from './components/ProductList';

const App = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 20, likes: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 30, likes: 15 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 40, likes: 20 },
  ];

  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
