function randomNumber() {
    var number = Math.floor(Math.random()*100);
    return number;
}
var number = randomNumber();
var numberGame = function(){
    var win = false;
    var userInput = parseInt(prompt("Guess a number"));
    for(var i=0;i<3;i++){
        if (userInput===number){
            win = true;
            return win;
        }
        else if(userInput<number){
            alert("Number is higher");
            userInput = parseInt(prompt("Guess another number"));
        }
        else if(userInput>number){
            alert("Number is lower");
            userInput = parseInt(prompt("Guess another number"));
        }
    }
    return win;
};

if (numberGame()){
    alert("You have won!");
}
else{
    alert("Please try playing again, the number was: " + number);
}