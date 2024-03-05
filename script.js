const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


let playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
let computer = getComputerChoice();

function playGame(playerChoice){
    if 
    (
    (playerChoice === "rock" && getComputerChoice() === "paper") ||
    (playerChoice === "paper" && getComputerChoice() === "scissors") ||
    (playerChoice === "scissors" && getComputerChoice() === "rock")
    ){
        console.log("You lose... " + getComputerChoice() + " beats " + playerChoice);
    } else if (playerChoice === getComputerChoice()){
        console.log("Its a tie you both chose: " + getComputerChoice());
    } else {
        console.log("You win! " + playerChoice + " beats " + getComputerChoice());
    }

}

function repeatGame(){
    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
        playGame(playerChoice);
    }


}

repeatGame();

