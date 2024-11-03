const productsPrice = new Map([
  ['apples', 1.50],
  ['bananas', 0.75],
  ['oranges', 1.25],
  ['pears', 2.00]
]);

function increasePrice(productName) {
  if (productsPrice.has(productName)) {
    const currentPrice = productsPrice.get(productName);
    const newPrice = currentPrice * 1.10;
    productsPrice.set(productName, newPrice);
    console.log(`${productName} price has been increased to $${newPrice.toFixed(2)}`);
  } else {
    console.log(`${productName} is not in the list.`);
  }
}
