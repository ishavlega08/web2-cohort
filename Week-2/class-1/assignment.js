// Promisified version

// setTimeout
function promisifiedTimeout(sec) {
    const timeout = new Promise((resolve) => {
        setTimeout(resolve, sec);
    });

    return timeout;
}

promisifiedTimeout(1000)
    .then(() => {
        console.log("Execution done after 1 sec")
    });

// fs.readfile
const fs = require("fs").promises;

fs.readFile("a.txt", "utf-8")
    .then((data) => {
        console.log(data);
    });

// fetch
function promisifiedFetch(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => resolve(data));
    })
}

promisifiedFetch("https://sum-server.100xdevs.com/todos")
    .then(data => console.log(data));