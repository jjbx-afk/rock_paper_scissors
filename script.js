
//variables du score réutiliser dans les fonctions 
let humanScore; 
let computerScore;


// random computer choice
function getComputerChoice() {  

    let random = Math.floor(Math.random() * 3);
    let choice;

    if (random === 0) {
        choice = "rock";
    }

    else if (random === 1) {
        choice = "paper";
    }

    else if (random === 2) {
        choice = "scissors";
    }

    console.log("Computer's choice", choice);
    return choice;

} 

// game du jeu 
function playGame() {
    humanScore = 0;
    computerScore = 0;
    //boucle pour répeter la procédur pour chaque round
    for (let i = 0; i <= 4; i++) { 
        // console.log("%cRound " + Number(i+1), "font-weight:bold")
        playRound();
        console.log("Human score: ", humanScore);
        console.log("Computer score: ", computerScore);
    }
    //affichage du score finale 
    console.log("Final scores => Human: " + humanScore + ", Computer: " + computerScore + "."); 
    //affichage de message de victoire/échec a l'aide d'une condition  
    console.log(humanScore > computerScore ? "You win" : (humanScore < computerScore ? "you loose" : "tie")); 
    
    // façon + verbale pour reproduire la condition d'en haut : 

    // if (humanScore > computerScore) {
    //     console.log("You win");
    // } else {
    //     if (humanScore < computerScore) {
    //         console.log("you loose");
    //     } else {
    //         console.log("tie")
    //     }
    // }
}
// input for human choice
function getHumanChoice() {  

     let choice = prompt("rock, paper or scissors? :").toLowerCase()
 
    if (["rock", "scissors", "paper"].includes(choice)) {
        console.log("your choice: ", choice);
        return choice;
    } else { 
        console.error("Choix invalide, les choix possibles sont: paper, scissors, rock")
    }


    // Si "choice" n'est pas une des trois valeurs possibles
    // Alors faire
    // return choice;
}

//fonction permettant de jouer un round et repris dand la boucle for dans la fonction de la game
function playRound() {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        return "You Win! Rock beats scissors";
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        return "You lose.. Paper beats rock"; 
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        // humanScore = humanScore + 1;
        // humanScore += 1;
        humanScore++;
        return "You Win! Paper beats rock ";
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        return "You lose.. Scissors beats paper"; 
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        return "You Win! Scissiors beats paper"; 
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        return "You lose.. Rock beats scissors";
    } else if (humanChoice == computerChoice) {
        return "It's a tie. you picked the same choice.";
    } else {
        return "Error"
    }                                                          
} 

// console.log(playRound(humanSelection, computerSelection))



// console.log(playGame);


playGame() //relancer une nouvelle game 

// playGame()

restartingChoice = prompt("do you want to restart ? (yes/no)").toLowerCase();

if (restartingChoice === "yes"){
     playGame()
}
else if (restatignChoice === "no") {

  die("Thanks for playing! see ya!");

}