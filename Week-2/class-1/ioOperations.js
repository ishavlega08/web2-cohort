const fs = require("fs");

// Synchronous function
const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);

// Asynchronous function
function print(err, data) {
    if (err) {
        console.log("File not found");
    } else {
        console.log(data);
    }
}

fs.readFile("a.txt", "utf-8", print);
fs. readFile("b.txt", "utf-8", print);

console.log("Done!");

// function readFile(filePath, encoding, callback) {
//     // read file
//     callback("Error!!", "Hi there")
//     // encode and return 
// }

function run() {
    console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");