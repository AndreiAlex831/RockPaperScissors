function reset() {
    const resetting = document.getElementById('reset');
    resetting.addEventListener('click', function () {

        humanScore = 0;
        computerScore = 0;


        document.getElementById('myChoice').innerText = "My choice: ";
        document.getElementById('computerChoice').innerText = "Computer choice: ";
        document.getElementById('result').innerText = "Result: ";


        document.getElementById('winnerHuman').innerText = "";
        document.getElementById('winnerComputer').innerText = "";


        document.getElementById('humanScoreDiv').innerText = "Human Score: 0";
        document.getElementById('computerScoreDiv').innerText = "Computer Score: 0";


        enableChoiceButtons();
    });
}

function enableChoiceButtons() {
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissors').disabled = false;
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function humanChoice() {
    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');

    rockBtn.addEventListener("click", function () {
        playGame("Rock");
    });

    paperBtn.addEventListener("click", function () {
        playGame("Paper");
    });

    scissorsBtn.addEventListener("click", function () {
        playGame("Scissors");
    });
}

function playRound(myChoice, computerChoice) {
    if (computerChoice === myChoice) {
        return "It's a tie";
    } else if (
        (computerChoice === "Rock" && myChoice === "Scissors") ||
        (computerChoice === "Paper" && myChoice === "Rock") ||
        (computerChoice === "Scissors" && myChoice === "Paper")
    ) {
        return `You lose! ${computerChoice} beats ${myChoice}`;
    } else {
        return `You win! ${myChoice} beats ${computerChoice}`;
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(myChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(myChoice, computerChoice);


    document.getElementById('myChoice').innerText = `My choice: ${myChoice}`;
    document.getElementById('computerChoice').innerText = `Computer choice: ${computerChoice}`;
    document.getElementById('result').innerText = `Result: ${result}`;


    if (result.includes("You win!")) {
        humanScore++;
    } else if (result.includes("You lose!")) {
        computerScore++;
    }


    document.getElementById('humanScoreDiv').innerText = `Human Score: ${humanScore}`;
    document.getElementById('computerScoreDiv').innerText = `Computer Score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            document.getElementById('winnerHuman').innerText = "You Win!";
        } else if (computerScore === 5) {
            document.getElementById('winnerComputer').innerText = "Computer Wins!";
        }

        disableChoiceButtons();
    }
}

function disableChoiceButtons() {
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
}

reset();
humanChoice();
