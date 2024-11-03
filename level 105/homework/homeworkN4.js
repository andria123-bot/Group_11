const promise = new Promise((resolve, reject) => {
  const randomOutCome = Math.random();

  if(randomOutCome){
    resolve('Success!');
  }else{
    reject('Error!');
  }
});

promise
      .then(message => console.log(message))
      .catch(error => console.error(error));