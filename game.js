
function getComputerChoice(words){
    words = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor((Math.random() * 3));
    return words[randomNumber];
}

function  playRound(playerSelection, computerSelection){
       if(playerSelection.includes("rock")
           && computerSelection.includes("Paper")){
           return "You Lose! Paper beats Rock";
       }
}

const playerSelection = prompt("Enter your choice");
playerSelection.toLowerCase();
console.log(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));