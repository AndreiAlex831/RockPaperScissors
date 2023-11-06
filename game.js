
function getComputerChoice(words){
    words = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor((Math.random() * 3));
    return words[randomNumber];
}
// console.log(getComputerChoice());

function  playRound(playerSelection, computerSelection){
       if(playerSelection.includes("Rock")
           && computerSelection.includes("Paper")){
           return "You Lose! Paper beats Rock";
       }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));