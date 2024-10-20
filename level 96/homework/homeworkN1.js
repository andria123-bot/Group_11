const person = {
  name: "Andria",
  age: 15,
  city: "Tbilisi"
};
console.log(person);

console.log(person.name);
console.log(person.city);

const { name, age } = person;
console.log(name, age);

const student = {
  name: "NullGuy",
  age: 20,
  address: {
    city: "New York",
    country: "USA"
  }
};

const { city, country } = student.address;
console.log(city, country);

const product = {
  name: "Laptop",
  price: 1000
};

const { name: productName, category = "general" } = product;
console.log(productName, category);

function displayCar({ brand, model, year }) {
  console.log(brand, model, year);
}

displayCar({ brand: "Toyota", model: "Corolla", year: 2020 });

const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
  publisher: "Secker & Warburg"
};

const { year, publisher, ...rest } = book;
console.log(rest);

const user = {
  name: "Alice",
  age: 30
};

const location = {
  city: "Paris",
  country: "France"
};

const merged = { ...user, ...location };
console.log(merged);

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combined = [...numbers1, ...numbers2];
console.log(combined);
