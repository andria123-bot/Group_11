const items = new Map([
  ['Apple', 1],
  ['Banana', 0.5],
  ['Orange', 0.75]
]);

items.forEach((value, key) => {
  items.delete(key);
  console.log(`${key} deleted`);
});
