const numbersMap = new Map([
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7]
]);

function filterEvens(map){
  const evenValues = new Map();

  for(const [key, value] of map){
    if(value % 2 === 0){
      evenValues.set(key, value);
    }
  }
  return evenValues;
}