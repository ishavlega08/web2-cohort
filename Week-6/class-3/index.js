const axios = require("axios");

// GET
function main() {
    fetch("https://sum-server.100xdevs.com/todos")
        .then(async (response) => {
            const json = await response.json();
            // console.log(json);
            console.log(json.todos.length);
        })
}

// GET
async function main2() {
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await response.json();
    console.log(json.todos.length);
}

// GET
async function main3() {
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(response.data.todos.length);
}

// POST
async function main4() {
    const response = await fetch("https://www.postb.in/1731315118123-7439474170096", {
        method: "POST",
        body: {
            username: "ishav",
            password: "123123",
        },
        headers: {
            Authorization: "Bearer 123"
        }
    });
    const textualData = await response.text();
    console.log(textualData);
}

// POST
async function main5() {
    const response = await axios.get("https://httpdump.app/dumps/0fd35f24-e3b2-4828-bc9f-82362c6468d5", {
            username: "ishav",
            password: "123123",
        },
        {
            headers: {
                Authorization: "Bearer 123"
            },
        },
    );
    console.log(response.data);
}

async function main6() {
    const response = await axios(
        {
            url: "https://httpdump.app/dumps/0fd35f24-e3b2-4828-bc9f-82362c6468d5?a=6",
            method: "PUT",
            headers: {
                Authorization: "Bearer 123",
            },
            data: {
                username: "ishav"
            }
        }
    )
}

main6();