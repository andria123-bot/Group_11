const {calculate, filter} = require('./calculate.js');

console.log(calculate(12, 15));

const evenNumbers = filter([1, 2, 3, 4, 5], (num) => num % 2 === 0);
console.log(evenNumbers);
