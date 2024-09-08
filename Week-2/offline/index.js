const fs = require("fs");

function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

function callback() {
  console.log("3 seconds have passed");
}

// setTimeoutPromisified(3000).then(callback);

/* setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified(3000);
}).then(function () {
  console.log("hello");
  return setTimeoutPromisified(5000);
}).then(function () {
  console.log("hello there");
}); */

async function solve() {
  await setTimeoutPromisified(1000);
  console.log("hi");
  await setTimeoutPromisified(3000);
  console.log("hello");
  await setTimeoutPromisified(5000);
  console.log("hello there");
}

// solve();

function readFilePromisified() {
  return new Promise(function (resolve, reject) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      if (err) {
        reject("File not found");
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromisified().then(function (x) {
  console.log("File has been read");
  console.log(`Data: ${x}`);
}).catch(function (e) {
  console.log(e);
});
