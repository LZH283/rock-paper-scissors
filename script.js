let humanScore;
let computerScore;
let humanChoice;


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
    
    if (humanChoice == "rock" && choiceString == "paper"){
        console.log("You lose!")
        computerScore++;
    } else if (humanChoice == "rock" && choiceString == "scissors"){
        console.log("You win!")
        humanScore++;
    } 
      else if (humanChoice == "paper" && choiceString == "scissors"){
        console.log("You lose!")
        computerScore++;
    } else if (humanChoice == "paper" && choiceString == "rock"){
        console.log("You win!")
        humanScore++;
    }
      else if (humanChoice == "scissors" && choiceString == "rock"){
        console.log("You lose!")
        computerScore++;
    } else if (humanChoice == "scissors" && choiceString == "rock"){
        console.log("You win!")
        humanScore++;
    } else if (humanChoice === choiceString){
        console.log("Its a tie!")
    } else {
        console.log("error")
    }
}


function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (i = 1 ; i <= 5 ; i++){
    
    getComputerChoice()
    console.log(choiceString);

    getHumanChoice()
    console.log(humanChoice);

    playRound(humanChoice, choiceString);
    }

    console.log(`Computer Score: ${computerScore}`);
    console.log(`Human Score: ${humanScore}`);
    if (humanScore > computerScore){
        console.log("You win the game!");
    } else if (humanScore < computerScore){
        console.log("You lose the game.");
    }

}




// stuff starts here

playGame();
