import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} name={product.name} price={product.price} description={product.description} />
      ))}
    </div>
  );
};

export default ProductList;
