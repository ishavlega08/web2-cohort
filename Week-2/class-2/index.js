function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
  console.log("3 seconds have passed");
}

// setTimeoutPromisified(3000).then(callback);
function random(resolve) {
  setTimeout(resolve, 3000);
}

let p = new Promise(random);
// console.log(p);

function callback() {
  console.log("promise succeded");
}

p.then(callback);
