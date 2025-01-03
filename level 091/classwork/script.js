document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productDiv = button.closest('.product');
    const productName = productDiv.dataset.name;
    
    const cartList = document.getElementById('cart-list');
    const listItem = document.createElement('li');
    listItem.textContent = productName;
    cartList.appendChild(listItem);
  });
});

document.getElementById('clear-cart').addEventListener('click', () => {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  // Optionally, update the total price or other cart details here
});
