const express = require("express");
const cors = require("cors");

const app = express();

let requestCount = 0;

// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
function loggerMiddleware(req, res, next) {
    requestCount += 1;
    console.log(`Method is: ${req.method}`);
    console.log(`Url is: ${req.hostname}`);
    console.log(`Timestamp: ${new Date()}`);
    next();
}

// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

app.get("/requestLogger", function(req, res) {
    res.json({
        message: `Total number of request: ${requestCount}`
    });
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/frontend/index.html");
}); 

app.use(loggerMiddleware, express.json());
app.use(cors());

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    });
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    });
});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a - b
    });
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a / b
    });
});

app.listen(3000);