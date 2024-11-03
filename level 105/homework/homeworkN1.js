const promise = new Promise((resolve, reject) => {
  resolve("Hello world!");
});

Promise.then(message => console.log(message));