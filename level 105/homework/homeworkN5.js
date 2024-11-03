const promise = new Promise((resolve, reject) => {
  resolve(5);
});

promise
  .then(number => {
    console.log(number);
    return number * 2;
  })
  .then(number => {
    console.log(number);
    return number * 2;
  })
  .then(number => {
    console.log(number);
    return number * 2;
  })
  .then(number => {
    console.log(number);
    return number * 2;
  })
  .then(number => {
    console.log(number);
    return number * 2;
  })
  .then(number => {
    console.log(number);
  });
