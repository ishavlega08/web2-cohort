const express = require("express");

const adminRouter = express.Router();

adminRouter.post("/signup", function(req, res) {
    res.json({
        message: "Admin signup endpoint"
    })
});

adminRouter.post("/signin", function(req, res) {
    res.json({
        message: "Admin signin endpoint"
    })
});

adminRouter.post("/course", function(req, res) {
    res.json({
        message: "Create course endpoint"
    })
});

adminRouter.put("/course", function(req, res) {
    res.json({
        message: "Add course content endpoint"
    })
});

adminRouter.delete("/course", function(req, res) {
    res.json({
        message: "Delete course endpoint"
    })
});

adminRouter.get("/course/bulk", function(req, res) {
    res.json({
        message: "Get all courses endpoint"
    })
});

module.exports = {
    adminRouter: adminRouter
}