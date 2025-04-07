import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item) => <CartItem key={item.id} item={item} />)}
    </div>
  );
};

export default Cart;
