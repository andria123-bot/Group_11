/* eslint-disable react/prop-types */

const ProductCard = ({ name, description, price, likes }) => {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Likes: {likes}</p>
    </div>
  );
}

export default ProductCard;
