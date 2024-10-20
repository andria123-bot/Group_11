class Counter {
  static count = 0;

  static increment() {
    Counter.count++;
  }
}

Counter.increment();
Counter.increment();
console.log(Counter.count);
