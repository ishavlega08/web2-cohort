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

// p.then(callback);

/* setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("hello");

    setTimeout(function () {
      console.log("Hello there");
    }, 5000);
  }, 3000);
}, 1000); */

setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  })
