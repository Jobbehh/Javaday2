"use strict";

function subtractor(num1, num2){
    return num1-num2;
}
console.log(subtractor(10, 2))

// 
const welcome = function(name,age,gender){
    return console.log(`My name is ${name}, I am ${age} years old and of gender ${gender}`);
    }
   
    welcome("Slim Shady",99,"Male");





//
//ARROW FUNCTION SYNTAX // goodbye = (message) => console.log(message);

let powerUp = (n1, n2) => Math.pow(n1,n2);
console.log(powerUp(3,3));
