import express from "express";

const app = express();

app.post("/signup", (req, res) => {
    res.send("hello world!");
})

app.post("/signin", (req, res) => {
    res.send("hello world!");
})

app.get("/chat", (req, res) => {
    res.send("hello world!");
})

app.listen(3001);