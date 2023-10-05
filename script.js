const choices = ["Rock", "Paper", "Scissors"];
//Randomly return rock, paper or scissors
function getComputerChoice() {
  return myArray[~~(Math.random() * choices.length)];
}

//play
function play(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection===computerSelection){
        return "It's a tie game!"
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ){
            return "You win!"
        }
    else{
        return "Computer wins!"
    }
}
