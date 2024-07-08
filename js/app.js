// Pseudocode
//define getComputerChoice function
function getComputerChoice (){
//use random math to return rps
  const computerChoice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[random];
}
//test the function
console.log(getComputerChoice());
getComputerChoice();
//define humanChoice function
function humanChoice (){
//use prompt to get choice
  let choice = prompt("Pick one: ")
  console.log(choice);
}
humanChoice();






