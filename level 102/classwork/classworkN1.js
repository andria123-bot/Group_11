const fruits = ["apple", "orange", "banana", "coconut", "grape"];

const stringLengths = new Map();

fruits.forEach(fruit => {
  stringLengths.set(fruit, fruit.length);
});

const uniqueLengths = new Set(stringLengths.values());
const totalLengthSum = [...uniqueLengths].reduce((sum, length) => sum + length, 0);