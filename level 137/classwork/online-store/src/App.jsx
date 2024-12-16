import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductCard from "./ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <div>
      <h1>Online Store</h1>
      <ProductForm addProduct={addProduct} />
      <div>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
