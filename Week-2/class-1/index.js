// Find sum of 2 numbers
// function sum(a, b) {
//     return parseInt(a) + parseInt(b);
// }

// let ans = sum("20", 30);
// console.log(ans);

// Find sum from 1 to a number
function sum(n) {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += i;
    }

    return sum;
    // return n * (n-1);
}

const ans = sum(10);
// console.log(ans);

// Functional Arguments
// calculator
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// console.log(subtract(1, 2));

function doOperation(a, b, op) {
    return op(a, b);
}

console.log(doOperation(1, 2, sum));