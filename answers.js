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

//Write a function that takes two numbers and a string. 
//If the string is 'add', then return the sum of the numbers
//If the string is 'subtract', return the difference
//If the string is 'mult', return the product
//If the string is 'div', return the ratio
//Otherwise, return 0
var operationNumbers = function(operation,num1,num2){
    if(operation === 'add'){
            return num1+num2;
    }   else if(operation === 'subtract'){
            return num1-num2;
    }   else if(operation === 'mult'){
            return num1*num2;
    }   else if(operation === 'div'){
            return num1/num2;
    }
    else {
            return 0;
    }
};
console.log(operationNumbers('div',49,7));