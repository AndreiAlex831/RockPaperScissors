function getComputerChoice (){
  const computerChoice = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[random];
}
console.log(getComputerChoice());
getComputerChoice();
function humanChoice (){
  let myChoice = prompt("Rock, Paper or Scissors?: ");
  myChoice = myChoice.charAt(0).toUpperCase() + myChoice.substring(1);
  console.log(myChoice);
}
humanChoice();
const humanScore = 0;
const computerScore = 0;

function playRound (humanChoice, computerChoice) {

}





