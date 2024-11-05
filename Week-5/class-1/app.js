const express = require("express");

const app = express();

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    })
});

app.get("/add/:firstArg/:secondArg", function(req, res) {
    const a = parseInt(req.query.firstArg);
    const b = parseInt(req.query.secondArg);

    res.json({
        ans: a + b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a / b
    })
});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a - b
    })
});

app.listen(3000);