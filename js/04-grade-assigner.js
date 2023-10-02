//Collect the a number between 1 and 100 from the user.
let inputNum = parseInt(prompt("Enter a number between 1-100"));
//Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
if((inputNum < 0) || (inputNum > 100)){
    alert("The entered number needs to be between 1-100");
    let inputNum = parseInt(prompt("Enter a number between 1-100"))
}
else{
    if((inputNum >= 90) && (inputNum <= 100)){
        console.log("You received an A");
    }
    else if((inputNum >= 80) && (inputNum <= 89)){
        console.log("You received an B");
    }
    else if((inputNum >= 70) && (inputNum <= 79)){
        console.log("You received an C");
    }
    else if((inputNum >= 60) && (inputNum <= 69)){
        console.log("You received an D");
    }
    else{
        console.log("You received an F");
    }
}
//If the score is between 60 and 69, write out “You received a D” into the console.
//If the score is between 70 and 79, write out “You received a C” into the console.
//If the score is between 80 and 89, write out “You received a B” into the console.
//If the score is between 90 and 100, write out “You received an A” into the console.
//If the score is less than 60, write out “You received an F” into the console.