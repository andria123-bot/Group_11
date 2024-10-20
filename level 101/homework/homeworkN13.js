const products = new Map([
  ['Laptop', 1200],
  ['Phone', 800]
]);

const quantities = new Map([
  ['Laptop', 2],
  ['Phone', 5]
]);

const totalPrices = new Map();
products.forEach((price, product) => {
  const quantity = quantities.get(product);
  totalPrices.set(product, price * quantity);
});
console.log(totalPrices);
