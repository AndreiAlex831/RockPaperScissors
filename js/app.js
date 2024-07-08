// Pseudocode
//define getComputerChoice function
function getComputerChoice (){
//use random math to return rps
  const computerChoice = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[random];
}
//test the function
console.log(getComputerChoice());
getComputerChoice();
//define humanChoice function
function humanChoice (){
//use prompt to get choice
  let myChoice = prompt("Rock, Paper or Scissors?: ");
  myChoice = myChoice.charAt(0).toUpperCase() + myChoice.substring(1);
  console.log(myChoice);
}
humanChoice();






