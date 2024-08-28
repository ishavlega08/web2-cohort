// Variables 
let firstName = "Ishav";
const age = 21;
var isStudent = true;

// console.log(`Name: ${firstName}, Age: ${age}, IsStudent: ${isStudent}`);

// Assignment
const favColor = "Black";
var height = 169;
let likePizza = true;

// Data types
let number = 42;                // Number
let string = "Hello world!";    // String
let isActive = true;            // Boolean
let numbers = [1, 2, 3];        // Array

// Operators
let add = 1 + 2;                // Arithmetic operator
let isEqual = (10 === 10)       // Comparison operator
let isTrue = (true && false);   // Logical operator

// Functions
// function declaration
function greet(name) {
    return "Hello, " + name;
}

// function call
let message = greet("Ishav");
// console.log(message);

// Assignment #1
function sum(a, b) {
    return a + b;
}

let addition = sum(1, 2);
// console.log(ans);

// Assignment #2
function canVote(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

let ans = canVote(19);
// console.log(ans);

// If/Else
if (age >= 18 ) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// Assignment
function isEven(num) {
    if( num%2 == 0 ) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}

// console.log(isEven(6));

// Loop Assignment
function sumTillNumber(num) {
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum += i;
    }

    return sum;
}

console.log(sumTillNumber(10));