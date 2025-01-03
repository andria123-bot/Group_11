const car2 = {
  make: 'Toyota',
  model: 'prius',
  year: 2022,
  color: 'blue'
};

const logCarProperties = () => {
  for (const key in car) {
    console.log(`${key}: ${car[key]}`);
  }
};

logCarProperties();