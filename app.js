//test
function getComputerChoice (){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function humanChoice (){
    let myChoice = prompt("Rock, Paper or Scissors?: ");
    myChoice = myChoice.charAt(0).toUpperCase() + myChoice.substring(1).toLowerCase();
    return myChoice;
}

function playRound (computerChoice, myChoice) {
    if ( computerChoice === myChoice ) {
        return "It's a tie";
    }else if (
    (computerChoice === "Rock" && myChoice === "Scissors") ||
    (computerChoice === "Paper" && myChoice === "Rock") ||
    (computerChoice === "Scissors" && myChoice === "Paper")
) {
    return "You lose! " + computerChoice + " beats " + myChoice;
} else {
    return "You win! " + myChoice + " beats " + computerChoice;
}

}

let humanScore = 0;
let computerScore = 0;


function playGame() {
    for (let i = 0; i < 5; i++)
    {
        const computerChoice = getComputerChoice();
        const myChoice = humanChoice();
        const result = playRound(computerChoice, myChoice);
        console.log("Computer choice: ", computerChoice);
        console.log("Your choice: ", myChoice);
        console.log(result);

        if (result.includes("You win!")) {
            humanScore++;
        } else if (result.includes("You lose!")) {
            computerScore++;
        }
    }
    console.log("humanScore: ", humanScore);
    console.log("computerScore: ", computerScore);

}
playGame();

