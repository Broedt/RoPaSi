   

function getComputerChoice(){
    const randomnr = Math.random()
    const range = 1 / 3

    if (randomnr < range){
        return "rock"}
    else if (randomnr > (range * 2)){
        return "paper"}
    else if (randomnr > range){
        return "scissors"
        
    }
}
 
function getHumanChoice(){
    let choice = prompt("rock , paper , scissors : What do you choose?")
    if (choice === null){
        return null
    }
    choice = choice.toLowerCase()

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        return alert("please enter a valid choice!") , getHumanChoice()
    }
    return choice
     
}
    
function checkWinner(humanChoice , computerChoice){
    
    if (humanChoice == computerChoice){
        return "tie"
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") ||
         (humanChoice == "paper" && computerChoice == "rock") ||
         (humanChoice == "scissors" && computerChoice == "paper")){
    
        return "player"
        }
    else if  ((computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" &&  humanChoice== "paper")){
    
        return "computer"
        }
        else return null
}


        
function playGame(){
   
    function playRound(humanChoice , computerChoice){
    
        let result = checkWinner(humanChoice , computerChoice)
        let playerWon = `you´ve won! ${humanChoice} beats ${computerChoice}.`
        let computerWon = `you´ve lost! ${computerChoice} beats ${humanChoice}.`
    
        if (result == "tie"){
            return console.log("it´s a tie")
        }
        else if (result == "player"){
            return humanScore++ , console.log(playerWon)
        }
        else if(result == "computer"){
            return computerScore++ , console.log(computerWon)
        }
        
        
    
    }
    for (i = 0 ; i < 5 ; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection,computerSelection)
        console.log("-------------")
    }

    if (humanScore > computerScore){
        return console.log(win)
    }
    else if (computerScore > humanScore){
        return console.log(loss)
    }
    else return console.log("You have the same score")

   }
    
   const win = "Congrats, you´ve won!"
   const loss = "Shit, you lost!"
   
   let computerScore = 0
   let humanScore = 0

playGame()


console.log("your score is ", humanScore)
console.log("the computer´s score is ", computerScore)
