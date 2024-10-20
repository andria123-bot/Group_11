function manualFilter(callback, array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function isEven(num) {
  return num % 2 === 0;
}

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = manualFilter(isEven, numbers);

console.log(evenNumbers);
