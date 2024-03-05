const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


let playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
const computer = getComputerChoice();

function playGame(playerChoice){
    if 
    (
    (playerChoice === "rock" && computer === "paper") ||
    (playerChoice === "paper" && computer === "scissors") ||
    (playerChoice === "scissors" && computer === "rock")
    ){
        console.log("You lose... " + computer + " beats " + playerChoice);
    } else if (playerChoice === computer){
        console.log("Its a tie you both chose: " + computer);
    } else {
        console.log("You win! " + playerChoice + " beats " + computer);
    }

}

function repeatGame(){
    for (i = 0; i < 5; i++){
        
    }


}

playGame(playerChoice);
