// const numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];

// numbers.forEach((number) => {
//   console.log(number);
// });


// ////////////////////////////////// მაგალითი N2

// const numbers2 = [134, 72, 16, 27, 53];
// const doubledNumbers = [];

// numbers.forEach((number) => {
//   doubledNumbers.push(number * 2);
// });

// console.log(doubledNumbers);


// /////////////////////////////// N2


// function customForEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// }

// const names = ['Andria', 'Giorgi', 'Niko'];

// customForEach(names, (name, index) => {
//   console.log(`${index}: ${name}`);
// });


// const names2 = ['Andria', 'Giorgi', 'Niko', 'Kato', 'Tamari'];

// const modifiedNames = names2.map((name, index) => {

//   return index % 2 === 0 ? name.toUpperCase() : name.toLowerCase();
// });

// console.log(modifiedNames);

// function customMap(array, callback) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(callback(array[i], i));
//   }
//   return result;
// }

// const modifiedNamesCustom = customMap(names2, (name, index) => {
//   return index % 2 === 0 ? name.toUpperCase() : name.toLowerCase();
// });

// console.log(modifiedNamesCustom);


// const persons = [
//   { name: 'Andria', age: 15 },
//   { name: 'Giorgi', age: 29 },
//   { name: 'Mariami', age: 19 },
//   { name: 'Spongebob', age: 39 },
//   { name: 'Sandy', age: 25 } // ideebi agar maq :D  
// ];

// const adults = persons.filter(person => person.age >= 18);
// const minors = persons.filter(person => person.age < 18);

// console.log('Adults:', adults);
// console.log('Minors:', minors);

// function customFilter(array, callback) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// const adultsCustom = customFilter(persons, person => person.age >= 18);
// const minorsCustom = customFilter(persons, person => person.age < 18);

// console.log('Adults (Custom filter):', adultsCustom);
// console.log('Minors (Custom filter):', minorsCustom);


// N1: Double Each Number
const numArray1 = [1, 2, 3, 4, 5];
const doubledArray = numArray1.map(n => n * 2);
console.log(doubledArray);

// N2: Filter Even Numbers
const numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numArray2.filter(n => n % 2 === 0);
console.log(evenNumbers);

// N3: Square Each Number
const numArray3 = [1, 2, 3, 4, 5];
const squaredArray = numArray3.map(n => n * n);
console.log(squaredArray);

// N4: Filter Long Names
const nameArray1 = ['Alice', 'Bob', 'Charlotte', 'Daniel', 'Elizabeth'];
const namesLongerThanFive = nameArray1.filter(name => name.length > 5);
console.log(namesLongerThanFive);

// N5: Capitalize First Letter of Each String
const strArray1 = ['hello', 'world', 'javascript', 'is', 'fun'];
const capitalizedStrings = strArray1.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(capitalizedStrings);

// N6: Sum All Numbers
const numArray4 = [1, 2, 3, 4, 5];
let totalSum = 0;
numArray4.forEach(num => {
  totalSum += num;
});
console.log(totalSum);

// N7: Filter Words Longer Than 3 Characters
const wordArray1 = ['cat', 'dog', 'elephant', 'fish', 'ant'];
const wordsLongerThanThree = wordArray1.filter(word => word.length > 3);
console.log(wordsLongerThanThree);

// N8: Add Prefix "super" to Each Word
const wordArray2 = ['hero', 'villain', 'star', 'warrior'];
const prefixedWordsArray = wordArray2.map(word => 'super' + word);
console.log(prefixedWordsArray);

// N9: Filter Odd Numbers
const numArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbersArray = numArray5.filter(num => num % 2 !== 0);
console.log(oddNumbersArray);

// N10: Log Each Number
const numArray6 = [10, 20, 30, 40, 50];
numArray6.forEach(num => console.log(num));
