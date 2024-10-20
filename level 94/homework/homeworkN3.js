const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Headphones", price: 100 }
];

const maxPrice = 400;

const affordableProducts = products.filter(product => product.price < maxPrice);
