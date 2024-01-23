const choices = ["rock", "paper" ,"scissors"];
const playerDp = document.getElementById("playerDisplay");
const computerDp = document.getElementById("compDisplay");
const resultsD = document.getElementById("resultDisplay");
const playScoreD = document.getElementById("playScoreD");
const compScoreD = document.getElementById("compScoreD");
let playScore = 0;
let compScore = 0;

function playGame(playerChoice){
    const compChoice = choices[Math.floor(Math.random() * 3)]
    let result = "";

    if(playerChoice === compChoice){
        result = "ITS A TIE!";
    }
    else{
        switch (playerChoice) {
            case "rock":
                result = (compChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
                case "paper":
                    result = (compChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                    break;
                case "scissors":
                    result = (compChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                    break;
        }
    }

    playerDp.textContent = `PLAYER: ${playerChoice}`;
    computerDp.textContent = `COMP: ${compChoice}`;
    resultsD.textContent = result;

    resultsD.classList.remove("redText");
    resultsD.classList.remove("greenText");


    switch(result){
        case "YOU WIN":
            resultsD.classList.add("greenText");
            playScore++;
            playScoreD.textContent = playScore;
            break;
        case "YOU LOSE":
            resultsD.classList.add("redText");
            compScore++;
            compScoreD.textContent = compScore;
            break;
    }
        

}