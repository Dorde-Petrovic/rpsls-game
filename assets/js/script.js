/**
 *  Declare constants for DOM elements
 *  and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const beats = [
    ["lizard", "scissors"],
    ["rock0", "spock"],
    ["lizard", "paper"],
    ["paper", "spock"],
    ["scissors", "rock"]
];

/**
 *  Add event listener to all the buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 *  The main game function. Accepts one parameter, which
 *  is the data-choice value of the selected button
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);
    while (computerChoice == playerChoice) {
        computerChoice = Math.floor(Math.random() * 5);
    };

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(playerChoice, computerChoice);

    updateScores(result);
}

/**
 *  Checks to see who the winer is, it accepts two numbers as input
 *  Returns 1 if player wins, and 0 if player loses
 */
function checkWinner(playerChoice, computerChoice) {

    if (beats[playerChoice][0] == choices[computerChoice]) { return 1; }
    else if (beats[playerChoice][1] == choices[computerChoice]) { return 1; }
    else { return 0; }
}

/**
 *  Anounces a winner and updates a score
 */
function updateScores(result) {
    if (result) { messages.innerHTML = "Player wins!"; playerScore.innerHTML++; }
    else { messages.innerHTML = "Computer wins!"; computerScore.innerHTML++; }
}
