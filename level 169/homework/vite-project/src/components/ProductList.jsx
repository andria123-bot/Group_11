import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";

const dummyProducts = [
  { id: 1, name: "Laptop", price: 1200, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Phone", price: 800, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Headphones", price: 200, image: "https://via.placeholder.com/100" },
];

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating fetch
    setProducts(dummyProducts);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
