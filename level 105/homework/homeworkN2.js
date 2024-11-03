const promise = new Promise((resolve, reject) => {
  resolve("Something went wrong!");
});

myPromise.then(message => console.log(message));