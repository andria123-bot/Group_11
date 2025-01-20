import { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;