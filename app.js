function reset(resetting) {
    resetting = document.getElementById('reset');
    resetting.addEventListener('click', function (){
        location.reload();
    });
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
        return "You lose! " + computerChoice + " beats " + myChoice;
    } else {
        return "You win! " + myChoice + " beats " + computerChoice;
    }
}


let humanScore = 0;
let computerScore = 0;

function playGame(myChoice) {
        if (humanScore == 5){
            return;
        }else if(computerScore == 5){
            return;
        }

        const computerChoice = getComputerChoice();
        const result = playRound(myChoice, computerChoice);
        document.getElementById('myChoice').innerText = `my choice: ${myChoice}`;
        document.getElementById('computerChoice').innerText = `computer choice: ${computerChoice}`;
        document.getElementById('result').innerText = `result: ${result}`;

        if (result.includes("You win!")) {
            humanScore++;
        } else if (result.includes("You lose!")) {
            computerScore++;
        }

        if (humanScore == 5) {
            document.getElementById('winnerHuman').innerText = `You Win!`;

        } else if (computerScore == 5) {
            document.getElementById('winnerComputer').innerText = `Computer Wins!`;

        }


        document.getElementById('humanScoreDiv').innerText = `humanScore: ${humanScore}`;
        document.getElementById('computerScoreDiv').innerText = `computerScore: ${computerScore}`;
    }

reset();
humanChoice();
