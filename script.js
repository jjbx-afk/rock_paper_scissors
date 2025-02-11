// // random computer choice
// function getComputerChoice() {  

//     let random = Math.floor(Math.random() * 3);

//     if (random === 0) {
//         choice = "rock";
//     }

//     else if (random === 1) {
//         choice = "paper";
//     }

//     else if (random === 2) {
//         choice = "scissors";
//     }

//     console.log("Computer's choice:", choice);

//     return choice;

// } 


// function getHumanChoice() {  

//     let choice = prompt("rock, paper or scissors? :").toLowerCase();

//     console.log(choice);

//     if (["rock", "scissors", "paper"].includes(choice)) {
//         console.log("your choice: ", choice);
//         return choice;
        
//     } else { 
//         console.error("Choix invalide, les choix possibles sont: paper, scissors, rock");
//     }
// }

// let humanScore = 0; 
// let computerScore = 0;


// function playRound(humanChoice, computerChoice) {

//     console.log(humanChoice);

//     if (humanChoice == "rock" && computerChoice == "scissors"){
//         humanScore++;
//         return "You Win! Rock beats scissors";

//     } else if (humanChoice == "rock" && computerChoice == "paper"){
//         computerScore++;

//         return "You lose.. Paper beats rock"; 

//     } else if (humanChoice == "paper" && computerChoice == "rock"){
//         humanScore++;

//         return "You Win! Paper beats rock ";

//     } else if (humanChoice == "paper" && computerChoice == "scissors"){
//         computerScore++;

//         return "You lose.. Scissors beats paper"; 

//     } else if (humanChoice == "scissors" && computerChoice == "paper"){
//         humanScore++;

//         return "You Win! Scissiors beats paper"; 

//     } else if (humanChoice == "scissors" && computerChoice == "rock"){
//         computerScore++;

//         return "You lose.. Rock beats scissors";

//     } else if (humanChoice == computerChoice) {
//         return "It's a tie. you picked the same choice.";

//     } else {
//         return "Errorrr";
//     }                                                          
// }  


// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();


// console.log(playRound(humanChoice, computerChoice));

// console.log(playRound(humanSelection, computerSelection))
// console.log(playGame);


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

var div = document.createElement("Rock");
div.textContent = "Rock!";
div.classList.add("button-rock");
document.body.appendChild(div); 

var div = document.createElement("Paper");
div.textContent = "Paper!";
div.classList.add("button-paper");
document.body.appendChild(div); 

var div = document.createElement("scissors");
div.textContent = "Scissors!";
div.classList.add("button-scissors");
document.body.appendChild(div); 