function getComputerChoice(words) {
    words = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor((Math.random() * 3));
    return words[randomNumber];
}

     function playRound(playerSelection, computerSelection) {
         if (playerSelection === computerSelection) {
             return "It's a tie! Both chose " + playerSelection;
         } else if (
             (playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "paper" && computerSelection === "rock") ||
             (playerSelection === "scissors" && computerSelection === "paper")
     ){
             return "You Win! " + playerSelection + " beats " + computerSelection;
         } else {
             return "You Lose! " + computerSelection + " beats " + playerSelection;
         }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
playerSelection.toLowerCase();
console.log(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

// const playerSelection = prompt("Enter your choice");

