// const box = document.getElementById('box');
// let positionX = 0;
// let positionY = 0;
// let direction = "right";

// function animateBox() {
//   if (direction === "right") {
//     positionX++;
//     if (positionX >= 150) {
//       direction = "bottom";
//     }
//   } else if (direction === "bottom") {
//     positionY++;
//     if (positionY >= 150) {
//       direction = "left";
//     }
//   } else if (direction === "left") {
//     positionX--;
//     if (positionX <= 0) {
//       direction = "top";
//     }
//   } else if (direction === "top") {
//     positionY--;
//     if (positionY <= 0) {
//       direction = "right";
//     }
//   }

//   box.style.left = positionX + "px";
//   box.style.top = positionY + "px";
// }

// setInterval(animateBox, 10);



const form = document.getElementById("myForm");

const database = [];

form.addEventListener("submit", function(e){
  e.preventDefault();

  const pass = form.pass.value;

  let containsSpeecialChar = false;
  let containsUpperCase = false;
  let containsDigit = false;

  for(let i = 0; i < pass.length; i++){
    if(pass.charCodeAt(i) >= 33 && pass.charCodeAt(i) <= 47){
      console.log(`Password contains a special character`);
      containsSpeecialChar = true;
    }
    if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90){
      containsUpperCase = true;
    }
    if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57){
      containsDigit = true;
      break;
    }
  }

  if(!containsSpeecialChar || !containsUpperCase){
    alert(`Password must contain atleast one Uppercase letter and one special character`);
    return;
  }
  database.push(pass);
  console.log(database);
});