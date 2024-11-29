import React from 'react';

const ProductCard = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>{price}</strong></p>
    </div>
  );
};

export default ProductCard;
