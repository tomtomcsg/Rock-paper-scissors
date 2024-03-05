const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

let playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
let computerSelection = getComputerChoice().toLocaleLowerCase();

function roundGame(playerChoice, computerSelection){
    if (
    (playerChoice === "rock" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "scissors") ||
    (playerChoice === "scissors" && computerSelection === "rock")
    ){
        return ("You lose... " + computerSelection + " beats " + playerChoice);
    } else if (playerChoice === computerSelection){
        return ("Its a tie you both chose: " + playerChoice);
    } else {
        return ("You win! " + playerChoice + " beats " + getComputerChoice());
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      let playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
      let computerSelection = getComputerChoice();
  
      let roundResult = roundGame(playerChoice, computerSelection);
      console.log(roundResult);
  
      if (roundResult.includes("win")) {
        playerScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++;
      }
    }
  
    console.log("Final Score: You - " + playerScore + ", Computer - " + computerScore);
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("The computer wins the game!");
    } else {
      console.log("It's a tie in the game!");
    }
  }
  
  playGame();

