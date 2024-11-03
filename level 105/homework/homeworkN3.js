const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 2000);
});

promise.then(message => console.log(message));