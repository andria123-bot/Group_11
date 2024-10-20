function generateNumbers(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

console.log(generateNumbers(5, 10));