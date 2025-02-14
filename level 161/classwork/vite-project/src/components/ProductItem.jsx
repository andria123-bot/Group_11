import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onDeleteProduct }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductItem key={product.id} product={product} onDeleteProduct={onDeleteProduct} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;