import { useCart } from "../hooks/useCart";

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
