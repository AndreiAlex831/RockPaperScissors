
function getComputerChoice(words){
    words = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor((Math.random() * 3));
    return words[randomNumber];
}

function  playRound(playerSelection, computerSelection){
       if(playerSelection.includes("Rock")
           && computerSelection.includes("Paper")){
           return "You Lose! Paper beats Rock";
       }
}

const playerSelection = "Rock";
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));