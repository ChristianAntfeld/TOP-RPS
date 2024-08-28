let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissors");
let results = document.getElementById("results");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorBtn.addEventListener("click", playRound);

let computerScore = 0;
let userScore = 0;
let round = 1;

function playRound(e) {
    let userChoice = e.target.id;
    let computerChoice =  getComputerChoice();

    if (userChoice == computerChoice) {
        addResult(userChoice, computerChoice, "DRAW");
    } else if (userChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        addResult(userChoice, computerChoice, "Computer wins!");
    } else if (userChoice == "rock" && computerChoice == "scissors") {
        userScore++;
        addResult(userChoice, computerChoice, "User wins!");
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        addResult(userChoice, computerChoice, "Computer wins!");
    } else if (userChoice == "paper" && computerChoice == "rock") {
        userScore++;
        addResult(userChoice, computerChoice, "User wins!");
    } else if (userChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        addResult(userChoice, computerChoice, "Computer wins!");
    } else if (userChoice == "scissors" && computerChoice == " paper") {
        userScore++;
        addResult(userChoice, computerChoice, "User wins!");
    }
}

function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);
    console.log(choice);
    if (choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function addResult(user, computer, result) {
    let roundNumber = document.createElement("h4");
    roundNumber.innerText = `Round: ${round}`;
    results.appendChild(roundNumber);
    let newResult = document.createElement("div");
    newResult.innerText = `Human choice: ${user}\nComputer choice: ${computer}\nScore:\nHuman: ${userScore} Computer: ${computerScore}`;
    results.appendChild(newResult);
    round++;

    if (userScore == 5 || computerScore == 5) {
        let winner  = (userScore == 5) ? "User wins!" : "Computer wins!"; 
        let gameFinished = document.createElement("h2");
        gameFinished.innerText = `Game over, ${winner}`;
        results.appendChild(gameFinished); 
    }
}