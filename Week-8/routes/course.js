const express = require("express");

const courseRouter = express.Router();

courseRouter.post("/purchase", function(req, res) {
    res.json({
        message: "Purchase courses endpoint"
    })
});

courseRouter.get("/preview", function(req, res) {
    res.json({
        message: "Course preview endpoint"
    })
});

module.exports = {
    courseRouter: courseRouter
}