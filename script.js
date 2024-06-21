let humanScore = 0;
let computerScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const win = document.querySelector(".win");

rockButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

paperButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

scissorsButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Tie! Rock and rock!");
        }
        else if (computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Rock loses to paper!");
        }
        else {
            humanScore++;
            console.log("You win! Rock beats scissors!");
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats rock!");
        }
        else if (computerChoice === "paper") {
            console.log("Tie! Paper and paper!");
        }
        else {
            computerScore++;
            console.log("You lose! Paper loses to scissors!");
        }
    }
    else {
        if (computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Scissors loses to rock!");
        }
        else if (computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats paper!");
        }
        else {
            console.log("Tie! Scissors and scissors!");
        }
    }
}

function displayWin() {
    if (humanScore > computerScore) {
        win.textContent = "You win the game with a score of " + humanScore + " to " + computerScore;
    }
    else {
        win.textContent = "You lose the game with a score of " + humanScore + " to " + computerScore;
    }
}


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);

    return choices[random];
}