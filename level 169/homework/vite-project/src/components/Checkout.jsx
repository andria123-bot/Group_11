const Checkout = () => {
  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
