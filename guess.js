function randomNumber() {
    var number = Math.floor(Math.random()*100);
    return number;
}
var number = randomNumber();
var answerArray =[];
var numberGame = function(){
    var win = false;
    var userInput = parseInt(prompt("Guess a number"));
    answerArray = [userInput];
    for(var i=0;i<3;i++){
        if (userInput===number){
            win = true;
            return win;
        }
        else if(userInput<number){
            alert("Number is higher");
            userInput = parseInt(prompt("Guess another number"));
            answerArray.push(userInput);
        }
        else if(userInput>number){
            alert("Number is lower");
            userInput = parseInt(prompt("Guess another number"));
            answerArray.push(userInput);
        }
    }
    return win;
};

if (numberGame()){
    alert("You have won!");
}
else{
    alert("Please try playing again, the number was: " + number +"\n" + "These were your guesses: " + answerArray);
}