// random computer choice
const rockBtn = document.createElement("button");
rockBtn.textContent = "rock!";
rockBtn.classList.add("button");
document.body.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "paper!";
paperBtn.classList.add("button");
document.body.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "scissors!";
scissorsBtn.classList.add("button");
document.body.appendChild(scissorsBtn);


function getComputerChoice() {

    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        choice = "rock";
    }

    else if (random === 1) {
        choice = "paper";
    }

    else if (random === 2) {
        choice = "scissors";
    }

    // console.log("Computer's choice : ", choice);

    return choice;

}

rockBtn.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {  

    console.log("Your choice : " + humanChoice + "\n" + "Computer choice : " + computerChoice);
    console.log(humanScore, computerScore);
    if (humanScore === 5) {

        console.log("Game over you won")

        return;
    } 
    if (computerScore === 5) {

        console.log("Game over you lost")

        return;
    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;

        return "Your score :" + humanScore + "\n" + "Computer score : " + computerScore;

        
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;

        return "Your score :" + humanScore + "\n" + "Computer score : " + computerScore;

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;

        return "Your score :" + humanScore + "\n" + "Computer score : " + computerScore;

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;

        return "Your score :" + humanScore + "\n" + "Computer score : " + computerScore;

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;

        return "Your score :" + humanScore + "\n" + "Computer score : " + computerScore;

    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;

        return "Your score :" + humanScore + "\n" + "Computer score : " + computerScore;

    } else if (humanChoice === computerChoice) {

        return "It's a tie.";
    }


}
