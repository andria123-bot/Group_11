import { calculate, filter } from './calculator2.js';

console.log(calculate(12, 15));

const evenNumbers = filter([1, 2, 3, 4, 5], (num) => num % 2 === 0);
console.log(evenNumbers);
