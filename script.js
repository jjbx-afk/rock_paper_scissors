// random computer choice
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

    console.log("Computer's choice:", choice);

    return choice;

} 


function getHumanChoice() {  

    let choice = prompt("rock, paper or scissors? :").toLowerCase();

    console.log(choice);

    if (["rock", "scissors", "paper"].includes(choice)) {
        console.log("your choice: ", choice);
        return choice;
        
    } else { 
        console.error("Choix invalide, les choix possibles sont: paper, scissors, rock");
    }
}

let humanScore = 0; 
let computerScore = 0;


// playGame() //relancer une nouvelle game 

// // playGame()

// restartingChoice = prompt("do you want to restart ? (yes/no)").toLowerCase();

// if (restartingChoice === "yes"){
//      playGame()
// }
// else if (restatignChoice === "no") {

//   return("Thanks for playing! see ya!");

// }

// creating 3 button 'Rock', 'Paper', 'scissors'




function playRound(humanChoice, computerChoice) {

    console.log(humanChoice);

    if (humanChoice == "Rock" && computerChoice == "Scissors"){
        humanScore++;
        return "You Win! Rock beats scissors";

    } else if (humanChoice == "Rock" && computerChoice == "Paper"){
        computerScore++;

        return "You lose.. Paper beats rock"; 

    } else if (humanChoice == "Paper" && computerChoice == "Rock"){
        humanScore++;

        return "You Win! Paper beats rock ";

    } else if (humanChoice == "Paper" && computerChoice == "Scissors"){
        computerScore++;

        return "You lose.. Scissors beats paper"; 

    } else if (humanChoice == "Scissors" && computerChoice == "Paper"){
        humanScore++;

        return "You Win! Scissiors beats paper"; 

    } else if (humanChoice == "Scissors" && computerChoice == "Rock"){
        computerScore++;

        return "You lose.. Rock beats scissors";

    } else if (humanChoice == computerChoice) {
        return "It's a tie. you picked the same choice.";

    } else {
        return "Errorrr";
    }                                                          
    }  

// var btn = document.getElementsByClassName("button");

// var btnFunction = function(){

//     }

// addEventListener("click", playRound);

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


console.log(playRound(humanChoice, computerChoice));

console.log(playRound(humanSelection, computerSelection))
console.log(playGame);




// var div = document.createElement("Rock");
// div.textContent = "Rock!";
// div.classList.add("button");
// document.body.appendChild(div); 

// var div = document.createElement("Paper");
// div.textContent = "Paper!";
// div.classList.add("button");
// document.body.appendChild(div); 

// var div = document.createElement("Scissors");
// div.textContent = "Scissors!";
// div.classList.add("button");
// document.body.appendChild(div); 