function getComputerChoice(max = 3){
    // generates a random number 0, 1 or 2
    let choiceNumber = Math.floor(Math.random() * max);
    if (choiceNumber === 0){
        choiceString = "Rock"
    } else if (choiceNumber === 1){
        choiceString = "Paper"
    } else {
        choiceString = "Scissors"
    }
}


getComputerChoice()
console.log(choiceString)