const express = require("express");
const { userModel } = require("../db");

const userRouter = express.Router();

userRouter.post("/signup", function(req, res) {
    res.json({
        message: "User signup endpoint"
    })
});

userRouter.post("/signin", function(req, res) {
    res.json({
        message: "User signin endpoint"
    })
});

userRouter.get("/purchases", function(req, res) {
    res.json({
        message: "Purchased courses endpoint"
    })
});

module.exports = {
    userRouter: userRouter
}