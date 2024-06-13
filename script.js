function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);

    return choices[random];
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors? ");

    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = "";
    let computerChoice = "";

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                console.log("Tie! Rock and rock!");
            }
            else if (computerChoice === "paper") {
                computerChoice++;
                console.log("You lose! Rock loses to paper!");
            }
            else {
                humanChoice++;
                console.log("You win! Rock beats scissors!");
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanChoice++;
                console.log("You win! Paper beats rock!");
            }
            else if (computerChoice === "paper") {
                console.log("Tie! Paper and paper!");
            }
            else {
                computerChoice++;
                console.log("You lose! Paper loses to scissors!");
            }
        }
        else {
            if (computerChoice === "rock") {
                computerChoice++;
                console.log("You lose! Scissors loses to rock!");
            }
            else if (computerChoice === "paper") {
                humanChoice++;
                console.log("You win! Scissors beats paper!");
            }
            else {
                console.log("Tie! Scissors and scissors!");
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("You win the game with a score of " + humanScore + " to " + computerChoice);
    }
    else if (computerScore > humanScore) {
        console.log("You lose the game with a score of " + humanScore + " to " + computerChoice);
    }
    else {
        console.log("It's a tie with a score of " + humanScore + " to " + computerChoice);
    }
}