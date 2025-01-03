const cart = [];
const discountThreshold = 100;

document.getElementById('item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    addItem(name, price, quantity);
    updateCartDisplay();
});

const addItem = (name, price, quantity) => {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name, price, quantity });
    }
};

const updateCartDisplay = () => {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartDiv.appendChild(itemDiv);
    });
    calculateTotal();
};

const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountedTotal = total > discountThreshold ? total * 0.9 : total; // Apply 10% discount
    document.getElementById('total-price').textContent = `Total Price: $${discountedTotal.toFixed(2)}`;
};
