function getComputerChoice(words) {
    words = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor((Math.random() * 3));
    return words[randomNumber];
}

     function playRound(playerSelection, computerSelection) {
             playerSelection = playerSelection.toLowerCase();
             computerSelection = computerSelection.toLowerCase();
         if ((playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "paper" && computerSelection === "rock") ||
             (playerSelection === "scissors" && computerSelection === "paper")) {
             return "You Win! " + playerSelection + " beats " + computerSelection;
         } else if (playerSelection === computerSelection){
             return " It's a tie! Both chose " + playerSelection;
         } else {
            return  "You Lose! " + computerSelection + " beats " + playerSelection;
         }
}
const playerSelection = prompt("Enter your choice");
const computerSelection = getComputerChoice();
console.log(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


