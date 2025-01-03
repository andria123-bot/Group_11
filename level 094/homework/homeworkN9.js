const cars = [
  { brand: { name: "Toyota" }, model: "Camry" },
  { brand: { name: "Honda" }, model: "Civic" },
  { brand: { name: "Toyota" }, model: "Corolla" },
  { brand: { name: "Ford" }, model: "Mustang" }
];

const specificBrand = "Toyota";

const filteredCars = cars.filter(car => car.brand.name === specificBrand);

