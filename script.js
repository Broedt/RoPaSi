   

const choices = ["rock", "paper", "scissors"];
const playerDislplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay")

let playerScore = 0;
let computerScore = 0;

function playGame(playersChoice){

const computerChoice = choices[Math.floor(Math.random()*3)];
console.log(computerChoice)
let result = "";

if (playersChoice === computerChoice){
    result = "🤨IT´S A TIE!🤨";
}
else {
    switch(playersChoice){
        case "rock":
            result = (computerChoice ===  "scissors") ? "🎉 🎊you win!🎊 🎉" : "💩you loose!💩";
            break;
        case "paper":
            result = (computerChoice === "rock") ? "🎉 🎊you win!🎊 🎉" : "💩you loose!💩";
            break;
        case "scissors":
            result = (computerChoice === "paper") ? "🎉 🎊you win!🎊 🎉" : "💩you loose!💩";
    
        }
    }

    switch(result){
        case "🎉 🎊you win!🎊 🎉":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "💩you loose!💩":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
    }

    if(playerScore === 5){
        alert("You have won the game! Let´s play another one!");
        location.reload();
    }
    else if(computerScore === 5){
        alert("You have lost the game! Let´s play another one!");
        location.reload();
    }
    


playerDislplay.textContent = `Player: ${playersChoice}`;
computerDisplay.textContent = `Computer: ${computerChoice}`;
resultDisplay.textContent = result;

}

