const fs = require("fs");

// Synchronous function
// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);

// Asynchronous function
fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
});

fs.readFile("b.txt", "utf-8", function (err, data) {
    console.log(data);
});

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
});

console.log("Done");