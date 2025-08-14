function getcomputerchoice() {
    const number = Math.floor(Math.random() * 3);
    if (number === 0) {
 return "rock"
    }
    else if (number === 1) {
        return "paper"
    }
    else {
    return "scissors"
    }


}

function getuserschoice() {
    let userchoice = prompt("Enter Your Choice: Rock, Paper , Scissors");
    return userchoice.toLowerCase();

}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors") {
     console.log("Tie");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You Won, Rock Beats Scissors");
      humanscore++;
  
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
 console.log("You won, Scissors beats Paper");
 humanscore++;

    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
 console.log("You won, Paper beats Rock");
  humanscore++;
   
    }
    else if (humanChoice!=="rock"||humanChoice!=="paper"||humanChoice!=="scissors"){
        console.log("Invalid choice bhoosri ky!");

    }
    else {
 console.log("Computer Won");
 computerscore++;

    }
}
let humanscore = 0;
let computerscore = 0;

function playGame() {

    playRound(getuserschoice(), getcomputerchoice());  // Fresh choices
    playRound(getuserschoice(), getcomputerchoice());  
    playRound(getuserschoice(), getcomputerchoice());  
    playRound(getuserschoice(), getcomputerchoice());  
    playRound(getuserschoice(), getcomputerchoice());
    if (humanscore>computerscore) {
        console.log("You Won the Game");
    }
    else if(computerscore>humanscore){
        console.log("Computer Won the game");
    }
    else{
        console.log("Game Tied!")
    }
    
}
playGame();

