const numbers = [1, 2, 3, 4, 2, 5, 6, 1, 7, 1, 3, 6];

const filteredNumbers = numbers.filter((number, index, array) => {
  const occurrences = array.filter(n => n === number).length;
  return occurrences === 2;
});



// cloned



function myFilter(array, callback) {
  const result = []; 
  
  for (let i = 0; i < array.length; i++){
    if (callback(array[i], i, array)){
      result.push(array[i]);
    }
  }
  
  return result;
}

const numbersClone = [1, 2, 3, 4, 2, 5, 6, 1, 7, 1];

const filteredNumbersClone = myFilter(numbersClone, (number, index, array) => {
  const occurrences = array.filter(n => n === number).length;
  return occurrences === 2;
});

console.log(filteredNumbersClone);
