const h2 = document.querySelector("h2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const restart = document.getElementById("restart");
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(humanChoice) {
    if (roundsPlayed >= 5) return;
    const computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        h2.textContent = `It's a draw ! You both chose ${humanChoice}`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        score1.textContent = (++humanScore);
        h2.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. ${humanChoice} beats ${computerChoice} !`;
    } else {
        score2.textContent = (++computerScore);
        h2.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. ${computerChoice} beats ${humanChoice} !`;
    }
    roundsPlayed++;
    document.getElementById("round").textContent = `Round: ${roundsPlayed}`;
    if (roundsPlayed === 5) {
        setTimeout(declareWinner, 1500);
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

function reset() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    h2.textContent = "";
    score1.textContent = humanScore;
    score2.textContent = computerScore;
    document.getElementById("round").textContent = "Round: 0";

    const restartButton = document.getElementById("restart");
    restartButton.style.background = "none";
    restartButton.style.color = "white";

    setTimeout(() => {
        restartButton.style.background = "white";
        restartButton.style.color = "black";
    }, 100);
}

function playGame(humanChoice) {
    if (roundsPlayed < 5) {
        playRound(humanChoice);
    }
}
function declareWinner() {
    if (humanScore > computerScore) h2.textContent = `You win by ${humanScore - computerScore} points 🎉`;
    else if (humanScore < computerScore) h2.textContent = `Computer wins by ${computerScore - humanScore} points 🎉`;
    else h2.textContent = `It's a tie!`;
}