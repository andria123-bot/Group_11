const array1 = ['one', 'two', 'three'];

array1.forEach(element => console.log(element));

/* 
  expected output:
  "one"
  "two"
  "three"
*/



const array = [1, 2, 4, 6];

const newArray = array.map(element => x + 2);
console.log(newArray);

// expected output: Array [3, 4, 6, 8]



const numbers = [25, 28, 10, 4, 8, 18];

const result = numbers.filter(number => number > 8);
console.log(result);

// expected output: Array [25, 28, 10, 18]




const numbers1 = [2,3,4,5];
const reducer1 = (accumulator, currentValue, index) => accumulator + currentValue;

//2 + 3 + 4 + 5
const sum = numbers1.reduce(reducer1);
//accumulator+2+3+4+5
const sunWithInitialValue = numbers1.reduce(reducer1, 1);

console.log(sum);
// expected output: 14

console.log(sum);
// expected output: 15

const numbers2 = [2,3,4,5];
const reducer = (accumulator, currentValue, index) => { 
if ( currentValue % 2 === 0){
return accumulator + currentValue;
};

return accumulator
};

//2 + 4
const sumEven = numbers2.reduce(reducer);

console.log(sumEven)
// expected output: 6