let playerScore = 0;
let computerScore = 0;
function game(n) {
    for (let i = 0; i < n; i++) {
        const playerSelection = prompt("Enter choice");
        const computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore++;
            return "You Win! " + playerSelection + " beats " + computerSelection;

        } else if (playerSelection === computerSelection) {
            return " It's a tie! Both chose " + playerSelection;
        } else {
            computerScore++;
            return "You Lose! " + computerSelection + " beats " + playerSelection;

        }
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    function getComputerChoice(words) {
        words = ["Rock", "Paper", "Scissors"];
        const randomNumber = Math.floor((Math.random() * 3));
        return words[randomNumber];
    }
}
game(5);


