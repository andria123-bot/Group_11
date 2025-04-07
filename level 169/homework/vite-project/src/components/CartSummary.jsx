import { useCart } from "../hooks/useCart";

const CartSummary = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
    </div>
  );
};

export default CartSummary;
