//This is my answers.js file

//Function that takes a string and returns the first character of the string.
var firstChar = function(someString){
    return someString[0];
};
//console.log(firstChar("Andy"));

//Function that takes a string and returns the last character of a string. 
var lastChar = function(someString){
    return someString[someString.length-1];  
};
//console.log(lastChar("Andy"));

//Write a function that takes a string and a number, and returns the character at the position represented by the number
var inputChar = function(someString,someNumber){
    if(someString.length<=someNumber){
        return "The length of the string is less than the number input.";
    }
    else{
        return someString[someNumber]; 
    }
};
//console.log(inputChar("Andy",2));

//Write a function that takes two numbers and adds them together.
var addNumbers = function(num1,num2){
    return num1+num2;
};
//console.log(addNumbers(25,26));

//Write a function that takes two numbers and multiplies them together
var multiplyNumbers = function(num1,num2){
    return num1*num2;
};
//console.log(multiplyNumbers(4,3));

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
//console.log(operationNumbers('div',49,7));

//Write a function that takes a string and number, and returns the string repeated that many number of times.
var repeatString = function(someString,numRepeat){
    var aString = "";
    for(var i=0;i<numRepeat;i++){
        aString = aString + someString + " ";
    }
    return aString;
};
//console.log(repeatString('hi',5));

//Write a function that takes a string, and returns the reverse of that string.
var reverseString = function(someString){
    var aString = "";
    for(var i=someString.length-1;i>=0;i--){
        aString += someString[i];
    }
    return aString;
};
//console.log(reverseString('supercalifragilisticexpialidocious'));

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
//console.log(factorialNum(-5));

//Write a function that takes a phrase as a string, and returns the longest word in that phrase.
var longestWord = function(phrase){
    var phraseArray = phrase.split(" ");
    var longWord = "";
    for(var i=0;i<phraseArray.length;i++){
        if(phraseArray[i].length>longWord.length){
            longWord=phraseArray[i];
        }
    }
    return longWord;
};
//console.log(longestWord('This is a random sentence with wordssss'));

//Write a function that takes a phrase, and returns the same phrase with every word capitalized
var capitalFirst = function(phrase){
    var phraseArray = phrase.toLowerCase().split(" ");
    var reconstruct = "";
    var capitalizeWord = function(word){
        return word[0].toUpperCase()+word.slice(1);
    };
    for(var i=0;i<phraseArray.length;i++){
        reconstruct = reconstruct + capitalizeWord(phraseArray[i]) + " ";
    }
    return reconstruct;
};
//console.log(capitalFirst("hI thIs is aNDY"));

//Write a function that takes an array and returns the largest number of the array
var largestNumber = function(array){
    var bigNumber = array[0];
    for(var i=1;i<array.length;i++){
        if(array[i]>bigNumber){
            bigNumber=array[i];
        }
    }
    return bigNumber;
};
//console.log(largestNumber([100,20000,3,4,9000,900]));

//Write a function that takes an array, and returns a filtered array. The filtered array should contain only the truthy values from the initial array.
var truthyFilter = function(array){
    var newArray=array.filter(filterByTruthyness);
    return newArray;
};
function filterByTruthyness(value) {
    if (value) {
        return true;
    } else {
        return false;
    }
}
//console.log(truthyFilter([4,0,true,false,"","hello"]));

//Write a function that takes an array of numbers, and returns the sum of all the numbers in the array.
var sumArray = function(array){
    var sum = 0;
    for(var i=0;i<array.length;i++){
        sum += array[i];
    }
    return sum;
};
//console.log(sumArray([50,1,2,3,4]));

//Write a function that takes two arrays, and returns an array of all elements that are only in one array.
var uniqueArray = function(array1,array2){
    var finalArray = [];
    for(var i=0;i<array1.length;i++){
        if(array2.indexOf(array1[i])<0){
            finalArray.push(array1[i]);
        }
    }
        
    for(var m=0;m<array2.length;m++){
        if(array1.indexOf(array2[m])<0){
            finalArray.push(array2[m]);
        }
    }
    return finalArray;
};
//console.log(uniqueArray([1,2,3,60,4,5],[3,4,5,6]));

//Mini Challenge: write a function that takes an array and a function as arguments.
var mapArray = function(array,aFunction){
    var newArray = [];
    for(var i=0;i<array.length;i++){
        newArray.push(aFunction(array[i]));
    }
    return newArray;
};
var addOne = function(num){
    return num+1;
};
//console.log(mapArray([1,5,10],addOne));