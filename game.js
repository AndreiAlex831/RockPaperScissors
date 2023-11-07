
function getComputerChoice(words){
    words = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor((Math.random() * 3));
    return words[randomNumber];
}

function  playRound(playerSelection, computerSelection){
       if(playerSelection.includes("rock")
           && computerSelection.includes("Paper")){
           return "You Lose! Paper beats Rock";
       } else if (playerSelection.includes("rock")
           && computerSelection.includes("Scissors")){
           return "You win! Rock beats Scissors";
       } else if (playerSelection.includes("paper")
           && computerSelection.includes("Rock")){
           return "You win! Paper beats Rock";
       } else if (playerSelection.includes("paper")
           && computerSelection.includes("Scissors")){
           return "You lose! Scissors beats Paper";
       } else if (playerSelection.includes("scissors")
           && computerSelection.includes("Rock")){
           return "You lose! Rock beats Scissors ";
       }else if (playerSelection.includes("scissors")
           && computerSelection.includes("Paper")){
           return "You win! Scissors beats Paper ";
       } else{
           return "It's a Draw!"
       }

}

   function game(){

   }

const playerSelection = prompt("Enter your choice");
playerSelection.toLowerCase();
console.log(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));