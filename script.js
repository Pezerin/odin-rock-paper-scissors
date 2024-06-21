let humanScore = 0;
let computerScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const win = document.querySelector(".win");
const computer = document.querySelector(".computerchoice");
const humanDisplay = document.querySelector(".humanscore");
const computerDisplay = document.querySelector(".computerscore");

rockButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    win.textContent = "";
    playRound("rock", computerChoice);
});

paperButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    win.textContent = "";
    playRound("paper", computerChoice);
});

scissorsButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    win.textContent = "";
    playRound("scissors", computerChoice);
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            computer.textContent = "Computer: Rock";
            humanDisplay.textContent = "Your Score: " + humanScore;
            computerDisplay.textContent = "Computer Score: " + computerScore;
        }
        else if (computerChoice === "paper") {
            computerScore++;
            computer.textContent = "Computer: Paper";
            humanDisplay.textContent = "Your Score: " + humanScore;
            computerDisplay.textContent = "Computer Score: " + computerScore;
        }
        else {
            humanScore++;
            computer.textContent = "Computer: Scissors";
            humanDisplay.textContent = "Your Score: " + humanScore;
            computerDisplay.textContent = "Computer Score: " + computerScore;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            computer.textContent = "Computer: Rock";
            humanDisplay.textContent = "Your Score: " + humanScore;
            computerDisplay.textContent = "Computer Score: " + computerScore;
        }
        else if (computerChoice === "paper") {
            computer.textContent = "Computer: Paper";
            humanDisplay.textContent = "Your Score: " + humanScore;
            computerDisplay.textContent = "Computer Score: " + computerScore;
        }
        else {
            computerScore++;
            computer.textContent = "Computer: Scissors";
            humanDisplay.textContent = "Your Score: " + humanScore;
            computerDisplay.textContent = "Computer Score: " + computerScore;
        }
    }
    else {
        if (computerChoice === "rock") {
            computerScore++;
            computer.textContent = "Computer: Rock";
            humanDisplay.textContent = "Your Score: " + humanScore;
            computerDisplay.textContent = "Computer Score: " + computerScore;
        }
        else if (computerChoice === "paper") {
            humanScore++;
            computer.textContent = "Computer: Paper";
            humanDisplay.textContent = "Your Score: " + humanScore;
            computerDisplay.textContent = "Computer Score: " + computerScore;
        }
        else {
            computer.textContent = "Computer: Scissors";
            humanDisplay.textContent = "Your Score: " + humanScore;
            computerDisplay.textContent = "Computer Score: " + computerScore;
        }
    }
    if (humanScore === 5 || computerScore === 5) {
        displayWin();
    }
}

function displayWin() {
    if (humanScore > computerScore) {
        win.textContent = "You win the game with a score of " + humanScore + " to " + computerScore;
    }
    else {
        win.textContent = "You lose the game with a score of " + humanScore + " to " + computerScore;
    }
    humanScore = 0;
    computerScore = 0;
}


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);

    return choices[random];
}