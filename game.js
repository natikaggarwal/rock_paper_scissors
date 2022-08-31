function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    const random = Math.floor((Math.random()*choices.length));
    return choices[random];
}

function playRound(playerChoice, computerChoice){    
    if(playerChoice == computerChoice){
        return "Same thing drawn";
    }
    if(playerChoice == "rock" && computerChoice == "paper"){
        return ("You Lose! " + computerChoice +" beats "+playerChoice);
    }
    if(playerChoice == "rock" && computerChoice == "scissors"){
        return ("You Win! " + playerChoice +" beats "+computerChoice);
    }
    if(playerChoice == "paper" && computerChoice == "scissors"){
        return ("You Lose! " + computerChoice +" beats "+playerChoice);
    }
    if(playerChoice == "paper" && computerChoice == "rock"){
        return ("You Win! " + playerChoice +" beats "+computerChoice);
    }
    if(playerChoice == "scissors" && computerChoice == "rock"){
        return ("You Lose! " + computerChoice +" beats "+playerChoice);
    }
    if(playerChoice == "scissors" && computerChoice == "paper"){
        return ("You Win! " + playerChoice +" beats "+computerChoice);
    }

}


for(let i = 0; i < 5; i++){
        var playerChoice = window.prompt("Make your choice: Rock, Paper, or Scissors?");
        var computerChoice = getComputerChoice();
        playerChoice = playerChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        console.log(playRound(playerChoice,computerChoice));
}