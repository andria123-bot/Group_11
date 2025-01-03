
// // const ის გამოყენებით ჩვენ არ შეგვიძლია რომ შევცვალოთ ცვლადის მონაცემები, აგრეთვე იგი არ არის გლობალური
// const z = 30;
// if (true) {
//   const z = 40;
//   console.log(z);
// }
// console.log(z);

// // let მოქმედებს ბლოკის ფარგლებში ანუ იგი მხოლოდ ფუნქიის ბლოკში იმუშავებს
// let y = 10;
// if (true) {
//   let y = 290;
//   console.log(y);
// }
// console.log(y);

// //var არის გლობალური ანუ თუ იგი ფუნქციის გარეთ არის დეკლარილებული იგი ხდება გლობალური ცვლადი

// var x = 10;
// if (true) {
//   var x = 190;
//   console.log(x);
// }
// console.log(x);

// arrow ფუნქციით ჩვენ გვიმარტივდება კოდის წერა მაგალითად უფრო მარტივია და უფრო პატარა ადგილს იკავევბს იგი დაემატა ECMA6 განახლებაში

// 1
const cubed = (num) => num ** 3;

// 2
const add = (a, b) => a + b;

// 3
const learnJS = () => "Andria Lezhava";

// 4
const checkEvenOdd = (num) => num % 2 === 0 ? "Even" : "Odd";

// 5
const multiply = (a, b = 1) => a * b;

// 6
const createPerson = (name, age) => ({ name, age });

// 7
null

// 8
null

// 9
const outerFunction = (a, b) => {
  const innerFunction = () => {
      return a * b;
  };
  return innerFunction();
};


// 10
const sumArray = (arr) => {
  let sum = 0;
  for (let num of arr) {
      sum += num;
  }
  return sum;
};

