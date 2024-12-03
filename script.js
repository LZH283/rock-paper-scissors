let humanScore;
let computerScore;
let humanChoice;

winText = document.getElementById("winMessage");


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

function getHumanChoiceRock(){
    return humanChoice = "rock";
}

function getHumanChoicePaper (){
    return humanChoice = "paper";
}

function getHumanChoiceScissors (){
    return humanChoice = "scissors";
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
    } else if (humanChoice == "scissors" && choiceString == "paper"){
        console.log("You win!")
        humanScore++;
    } else if (humanChoice === choiceString){
        console.log("Its a tie!")
    } else {
        console.log("error")
    }
}


function playGame(){
    

    
    getComputerChoice()
    console.log(choiceString);
    console.log(humanChoice);

    playRound(humanChoice, choiceString);

    document.getElementById("humanPicked").innerHTML = humanChoice;
    document.getElementById("computerPicked").innerHTML = choiceString;

    document.getElementById("humanscore").innerHTML = humanScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    

    console.log(`Computer Score: ${computerScore}`);
    console.log(`Human Score: ${humanScore}`);
    if (humanScore > computerScore){
        console.log("You win the game!");
    } else if (humanScore < computerScore){
        console.log("You lose the game.");
    }

    if(humanScore == 5 || computerScore == 5){
        if (humanScore == 5){
            winText.style.display = "block";
            document.getElementById("winner").innerHTML = "Human";
        } else {
            winText.style.display = "block";
            document.getElementById("winner").innerHTML = "Computer";
        }
    }

}

function restartGame(){
    humanScore = 0;
    computerScore = 0;
    document.getElementById("humanPicked").innerHTML = "__";
    document.getElementById("computerPicked").innerHTML = "__";

    document.getElementById("humanscore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;
    winText.style.display = "none";
}




// stuff starts here

humanScore = 0;
computerScore = 0;


winText.style.display = "none";

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", getHumanChoiceRock );
rockBtn.addEventListener("click", playGame);

const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", getHumanChoicePaper );
paperBtn.addEventListener("click", playGame);

const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", getHumanChoiceScissors );
scissorsBtn.addEventListener("click", playGame);

const restart = document.getElementById("restart");
restart.addEventListener("click", restartGame);


