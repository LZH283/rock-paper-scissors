
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(max = 3){
    // generates a random number 0, 1 or 2
    let choiceNumber = Math.floor(Math.random() * max);
    if (choiceNumber === 0){
        choiceString = "rock"
    } else if (choiceNumber === 1){
        choiceString = "paper"
    } else {
        choiceString = "scissors"
    }
}

function getHumanChoice (){
    humanChoice = prompt("What do you pick?").toLowerCase();
}

function playRound (humanChoice, choiceString){
    if (humanChoice === choiceString){
        console.log("Its a tie!")
    } 
    else if (humanChoice == "rock" && choiceString == "paper"){
        console.log("You lose!")
    } else if (humanChoice == "rock" && choiceString == "scissors"){
        console.log("You win!")
    } 
      else if (humanChoice == "paper" && choiceString == "scissors"){
        console.log("You lose!")
    } else if (humanChoice == "paper" && choiceString == "rock"){
        console.log("You win!")
    }
      else if (humanChoice == "scissors" && choiceString == "rock"){
        console.log("You lose!")
    } else if (humanChoice == "scissors" && choiceString == "rock"){
        console.log("You win!")
    } else {
        console.log("error")
    }
}


getComputerChoice()
console.log(choiceString);

getHumanChoice()
console.log(humanChoice);

playRound(humanChoice, choiceString)

