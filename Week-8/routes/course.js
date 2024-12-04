const express = require("express");
const { purchaseModel, courseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");

const courseRouter = express.Router();

courseRouter.post("/purchase", userMiddleware, async function(req, res) {
    try {
        const userId = req.userId;
        const courseId = req.body.courseId;

        const alreadyPurchased = await purchaseModel.findOne({
            userId,
            courseId
        })

        if(alreadyPurchased) {
            res.json({
                message: "You have already purchased this course"
            })
            return
        }

        await purchaseModel.create({
            userId,
            courseId
        })

        res.json({
            message: "Course puchased successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while purchasing the course"
        })
    }
});

courseRouter.get("/preview", async function(req, res) {
    try {
        const courses = await courseModel.find({});

        res.json({
            message: "Courses fetched successfully",
            courses: courses
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while fetching the courses"
        })
    }
});

module.exports = {
    courseRouter: courseRouter
}