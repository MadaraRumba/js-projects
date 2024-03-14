const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors" ||
        userInput === 'bomb'
    ) {
        return userInput;
    } else {
        return "Error";
    }
};

// console.log(getUserChoice('rock'));
// console.log(getUserChoice('fire'));
// console.log(getUserChoice('2'));

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb'){
        return 'User Won!';
    }
    if (userChoice === computerChoice) {
        return "The game was a tie!";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer won!";
        } else {
            return "User won!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer won!";
        } else {
            return "User won!";
        }
    } else {
        if (computerChoice === "paper") {
            return "User won!";
        } else {
            return "Computer won!";
        }
    }
}

function playGame() {
    let userChoice = getUserChoice("rock");
    let computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();


