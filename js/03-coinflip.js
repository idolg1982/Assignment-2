let randomNum = Math.round(Math.random());
let coinFlip;
if(randomNum === 0){
    coinFlip = "tails";
}
else{
    coinFlip = "heads"
}
alert(randomNum);

var userChoice = prompt("Heads or Tails").toLowerCase();

if(coinFlip === "tails"){
    if(userChoice === "tails"){
        alert(`The flip was ${coinFlip} and you chose ${userChoice}...you win!`);
    }
    else{
        alert(`The flip was ${coinFlip} and you chose ${userChoice}...you loose!`);
        
    }
}
else{
    if(userChoice === "heads"){
        alert(`The flip was ${coinFlip} and you chose ${userChoice}...you win!`);
    }
    else{
        alert(`The flip was ${coinFlip} and you chose ${userChoice}...you loose!`);
        
    }

}

