//This is my answers.js file

//Function that takes a string and returns the first character of the string.
var firstChar = function(someString){
    return someString[0];
};
console.log(firstChar("Andy"));

//Function that takes a string and returns the last character of a string. 
var lastChar = function(someString){
    return someString[someString.length-1];  
};
console.log(lastChar("Andy"));

//Write a function that takes a string and a number, and returns the character at the position represented by the number
var inputChar = function(someString,someNumber){
    if(someString.length<=someNumber){
        return "The length of the string is less than the number input.";
    }
    else{
        return someString[someNumber]; 
    }
};
console.log(inputChar("Andy",2));

//Write a function that takes two numbers and adds them together.
var addNumbers = function(num1,num2){
    return num1+num2;
};
console.log(addNumbers(25,26));

//Write a function that takes two numbers and multiplies them together
var multiplyNumbers = function(num1,num2){
    return num1*num2;
};
console.log(multiplyNumbers(4,3));