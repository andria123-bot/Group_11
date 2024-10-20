const choises = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resoultDisplay = document.getElementById("resoultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoise){
  const computerChoise = choises[Math.floor(Math.random() * 3)];
  let resoult = "";

  if(playerChoise === computerChoise){
    resoult = "IT's A TIE!";
  }else{
    switch(playerChoise){
      case "rock":
          resoult = (computerChoise === "scissors") ? "YOU WON!" : "YOU LOSE!";
          break;
        case "paper":
          resoult = (computerChoise === "rock") ? "YOU WON!" : "YOU LOSE!";
          break;
        case "scissors":
          resoult = (computerChoise === "paper") ? "YOU WON!" : "YOU LOSE!";
          break;
    }
  }
  playerDisplay.textContent = `You: ${playerChoise}`;
  computerDisplay.textContent = `Computer: ${computerChoise}`;
  resoultDisplay.textContent = resoult;

  resoultDisplay.classList.remove("greenText", "redText");

  switch(resoult){
    case "YOU WON!":
      resoultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resoultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
};