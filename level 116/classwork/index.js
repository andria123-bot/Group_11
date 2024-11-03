const { greet, firstName } = require('./greet');
const calculateAverage = require('./calculateAverage.js');

const numbers = [10, 20, 30, 40, 50];

greet(firstName);
console.log(firstName);

const average = calculateAverage(numbers);
console.log(`Average: ${average}`);
