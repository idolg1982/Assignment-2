var num1 = prompt("Please enter the first number>");
var num2 = prompt("Please enter the second number>");

if(num1 > num2){
    alert(`The first number you entered ${num1} is the larger number`);
}

else if(num2 > num1){
    alert(`The second number you entered ${num2} is the larger number`);
}

else {
    alert(`Both numbers are the same, you entered ${num1}`);
}