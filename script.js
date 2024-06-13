function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);

    return choices[random];
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors? ");

    return choice.toLowerCase();
}