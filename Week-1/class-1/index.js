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
    // console.log("You are an adult");
} else {
    // console.log("You are a minor");
}

// Assignment
function isEven(num) {
    if( num%2 == 0 ) {
        // console.log("The number is even");
    } else {
        // console.log("The number is odd");
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

// console.log(sumTillNumber(10));

// Objects
let user = {
    name: "Ishav",
    age: 21,
    gender: "Male"
}

// console.log(user1.name);
// console.log(user1["name"]);
// console.log(user1.age);

// Objects Assignment #1
function greetUser(user) {
    console.log(`Hi ${user.name}, your age is ${user.age}`);
}

// greetUser(user);

// Assignment #2 & #3
function greetUserWithGender(user) {
    if (user.gender === "Male") {
        if (user.age >= 18) {
            console.log(`Hi Mr ${user.name}, your age is ${user.age}. You are legal to vote`);
        } else {
            console.log(`Hi Mr ${user.name}, your age is ${user.age}. You are not legal to vote`);
        }
    } else if (user.gender === "Female") {
        if (user.age >= 18) {
            console.log(`Hi Mrs ${user.name}, your age is ${user.age}. You are legal to vote`);
        } else {
            console.log(`Hi Mrs ${user.name}, your age is ${user.age}. You are not legal to vote`);
        }
    } else {
        if (user.age >= 18) {
            console.log(`Hi Others ${user.name}, your age is ${user.age}. You are legal to vote`);
        } else {
            console.log(`Hi Others ${user.name}, your age is ${user.age}. You are not legal to vote`);
        }
    }
}

// greetUserWithGender(user);

// Arrya of Objects
const users = [{
    name: "ishav",
    age: 21,
    gender: "male"
}, {
    name: "priya",
    age: 20,
    gender: "female"
}, {
    name: "harkirat",
    age: 27,
    gender: "male"
}]

const user1 = users[0];
// console.log(user1);
const user1Age = users[0].age;
// console.log(user1Age);

// Assignment
// by using to the new array
function userAbove18(users) {
    let finalUsers = [];
    for(let i=0; i<users.length; i++) {
        if (users[i].age > 18 && users[i].gender === "male") {
            finalUsers.push(users[i]);
        }   
    }
    return finalUsers;
}

userAbove18(users);
// console.log(finalUsers);

// using filter
function filterUsers(users) {
    return users.filter(user => user.age > 18 && user.gender === "male");
}

const filteredUsers = filterUsers(users);
// console.log(filteredUsers);