//                                       N1

//for(let i = 20; i >= 0; i--){
//  console.log(i);
//}

//                                       N2

// for(let i = 0; i <= 10; i += 2){
//   console.log(i);
//}

//                                       N3

// function evenSum(border){
//   let sum = 0;
//   for(let i = 0; i <= border; i++){
//     if(i % 2 == 0){
//       sum += 1;
//     }
//   }
//   return sum;
// }

//                                       N4

// function generateEven(border){
//   let nums = [];
//   for(let i = 0; i <= border; i++){
//     if(i % 2 === 0){
//       nums.push(i);
//     }
//   }
//   return nums;
// }

// function calculateSum(numbers){
//   let sum = 0;
//   for(let i = 0; i < numbers.lenght; i++){
//     sum += numbers[i];
//   }
//   return sum;
// }

//                                       N5

// let numbers = [];

// for(let i = 0; i <= 10; i++){
//   numbers.push({
//     value: i,
//     type: i % 2 === 0 ? "Even" : "Odd",
//   });
// }

// console.log(numbers)

//                                       N6


let count = 5;
let authorized = false;

while(authorized !== true && count > 0){
  const pass = prompt("Enter Password: ");
  if(pass === "Andria"){
    authorized = true;
    alert("Accses Granted!")
  }else{
    count--;
    alert("Accsses denied. You have " + count + " attempts left.")
  }
}



