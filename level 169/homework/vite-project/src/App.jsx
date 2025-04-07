import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CartSummary from "./components/CartSummary";
import Checkout from "./components/Checkout";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div>
        <h1>E-commerce Shopping Cart</h1>
        <ProductList />
        <Cart />
        <CartSummary />
        <Checkout />
      </div>
    </CartProvider>
  );
}

export default App;
