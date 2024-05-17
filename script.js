

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

function playRound(humanChoice , computerChoice){
    
    if (humanChoice === "rock" && computerChoice === "scissors"){
        return alert(win) , console.log("you´ve won") , humanScore++
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        return alert(win) , console.log("you´ve won") , humanScore++
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        return alert(win) , console.log("you´ve won") , humanScore++
    }
    else if (humanChoice === computerChoice){
        return alert("draw")  
    }
    else {
        return alert(loss) , console.log("computer won") , computerScore++}
         
}  

    const win = "Congrats, you´ve won!"
    const loss = "Shit, you lost!"
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    

let humanScore = 0
let computerScore = 0



console.log("you´ve chosen ",humanChoice,", the computer has chosen ",computerChoice)
console.log("your score is ",humanScore," and the computers score is ",computerScore)


