// const form = document.getElementById("my-form");

// function presentational(tr) {
//   form.nextElementSibling.children[1].appendChild(tr);
// }

// function container(form) {
//   const data = [form.fullname.value, form.email.value, form.tel.value];

//   const tr = document.createElement("tr");

//   for (let i = 0; i < data.length; i++){
//     const td = document.createElement("td");
//     td.textContent = data[i];
//     tr.appendChild(td);
//   }

//   presentational(tr);
// }

// form.addEventListener("submit", function(e) {
//   e.preventDefault();

//   container(form);
// });


// const btn = document.getElementById("btn");

// btn.addEventListener('click', function() {
//   const p = document.createElement('p');
//   p.textContent = Math.floor(Math.random() * 100) + 1;

//   document.body.appendChild(p);
// })


let userWins = 0;
let computerWins = 0;
let draws = 0;

function makeChoice(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (userChoice === computerChoice) {
    draws++;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    userWins++;
  } else {
    computerWins++;
  }

  updateScore();
}

function updateScore() {
  document.getElementById('score').textContent = `Wins: ${userWins} | Losses: ${computerWins} | Draws: ${draws}`;
}
