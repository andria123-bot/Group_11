const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);


const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(product);



// cloned



function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  
  return accumulator;
}

const numbersClone = [1, 2, 3, 4, 5];

const sumClone = myReduce(numbersClone, (accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sumClone);

const productClone = myReduce(numbersClone, (accumulator, currentValue) => accumulator * currentValue, 1);

console.log(productClone);

