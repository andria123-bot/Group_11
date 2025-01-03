// let time = 0;
// const date = setinterval(function(){
//   time++
//   console.log("Current Seconds: " + time)
//   if(time === 10){
//     console.log("Times Up!!")
//     clearInterval(date)
//   }
//   console.log(date)
// }, 1000);

let heading = document.getElementById('myH1');
let paragraph = document.getElementById('myP');
let button = document.getElementById('myBtn');


// ეს არის მშობელი ელემენტი ჩვენ მას ვიყენებთ რომ მივწვდეთ შვილი ელემენტიდან მშობელ ელემენტს
console.log(heading.parentElement);
// ეს არის შვილი ელემენტი
console.log(heading.parentElement.children);
// მშობელ ელემენტში პირველ ელემენტს შეგვიძლია მივწვდეთ
console.log(heading.parentElement.firstElementChild);
// მშობელ ელემენტში ბოლო ელემენტს შეგვიძლია მივწვდეთ
console.log(heading.parentElement.lastElementChild);
// ჩვენ მისი დახმარებით მივწვდებით უკანა ელემენტს
console.log(paragraph.previousElementSibling);
// ჩვენ მისი დახმარებით მივწვდებით წინა ელემენტს
console.log(heading.nextElementSibling);