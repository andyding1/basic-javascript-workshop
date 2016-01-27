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

//Write a function that takes a string and number, and returns the string repeated that many number of times.
var repeatString = function(someString,numRepeat){
    var aString = "";
    for(var i=0;i<numRepeat;i++){
        aString = aString + someString + " ";
    }
    return aString;
};
console.log(repeatString('hi',5));

//Write a function that takes a string, and returns the reverse of that string.
var reverseString = function(someString){
    var aString = "";
    for(var i=someString.length-1;i>=0;i--){
        aString += someString[i];
    }
    return aString;
};
console.log(reverseString('supercalifragilisticexpialidocious'));

//Write a function that takes a number and returns the factorial of a number
var factorialNum = function(someNumber){
    var aNumber = 1;
    if(someNumber === 0){
            return 1;
    }
    else if(someNumber > 0){
        for(var i=someNumber;i>0;i--){
            aNumber = aNumber * i;
        }
        return aNumber;
    }
    else{
        for(var i=someNumber;i<0;i++){
            aNumber = aNumber * i;
        }
        return aNumber;
    }
};
console.log(factorialNum(-5));