// Set() მეთოდის გამოყენება
function addProduct(map, product, price) {
  map.set(product, price);
  console.log(`product ${product} added successfully.`);
}

const products = new Map();
addProduct(products, "apple", 1.5);
addProduct(products, "banana", 0.75);
addProduct(products, "orange", 2.0);

// get() მეთოდის გამოყენება
const bananaPrice = products.get("banana");
console.log(`the price of banana is $${bananaPrice}`);

// has() მეთოდის გამოყენება
const movies = new Map();
movies.set("inception", 2010);
movies.set("interstellar", 2014);
movies.set("the matrix", 1999);

if (movies.has("inception")) {
  console.log("inception is in the list.");
} else {
  console.log("inception is not in the list.");
}

// delete() მეთოდის გამოყენება
const athletes = new Map();
athletes.set("usain bolt", "9.58s");
athletes.set("michael phelps", "23 gold medals");

athletes.delete("usain bolt");

if (!athletes.has("usain bolt")) {
  console.log("usain bolt has been removed.");
}

// clear() მეთოდის გამოყენება
const cars = new Map();
cars.set("toyota", "camry");
cars.set("ford", "mustang");
cars.set("tesla", "model s");

cars.clear();

if (cars.size === 0) {
  console.log("the cars map is now empty.");
}

// size თვისების გამოყენება
const restaurants = new Map();
restaurants.set("pizza palace", "pepperoni pizza");
restaurants.set("burger world", "cheeseburger");
restaurants.set("sushi town", "dragon roll");

console.log(`there are ${restaurants.size} restaurants in the list.`);

// keys() მეთოდის გამოყენება
const countries = new Map();
countries.set("us", "united states");
countries.set("fr", "france");
countries.set("jp", "japan");

for (let code of countries.keys()) {
  console.log(`country code: ${code}`);
}

// values() მეთოდის გამოყენება
for (let name of countries.values()) {
  console.log(`country name: ${name}`);
}

// forEach() მეთოდის გამოყენება
const drinks = new Map();
drinks.set("coke", 140);
drinks.set("orange juice", 110);
drinks.set("water", 0);

drinks.forEach((calories, name) => {
  console.log(`drink: ${name}, calories: ${calories}`);
});
