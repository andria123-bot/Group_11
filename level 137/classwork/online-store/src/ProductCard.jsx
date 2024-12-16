/* eslint-disable react/prop-types */
function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Release Date: {product.releaseDate}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductCard;
