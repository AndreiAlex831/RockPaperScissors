
function getComputerChoice(){
    const words = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor((Math.random() * 3));
    return words[randomNumber];
}
console.log(getComputerChoice());