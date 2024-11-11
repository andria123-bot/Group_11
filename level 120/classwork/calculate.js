function calculate(a, b) {
  return a + b;
}

function filter(array, fn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) result.push(array[i]);
  }
  return result;
}

module.exports = { calculate, filter };
