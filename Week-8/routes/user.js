const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { userModel, courseModel, purchaseModel } = require("../db");
const { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");

const userRouter = express.Router();

userRouter.post("/signup", async function(req, res) {
    try {
        const requiredBody = z.object({
            email: z.string().email(),
            password: z.string().min(3).max(20),
            firstName: z.string().min(3).max(10),
            lastName: z.string().min(3).max(10)
        });

        const parsedData = requiredBody.safeParse(req.body);

        if(!parsedData.success) {
            res.status(403).json({
                message: "Invalid format",
                error: parsedData.error
            })
            return
        }

        const { email, password, firstName, lastName } = req.body;

        const hashedPassword = await bcrypt.hash(password, 5);

        await userModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });

        res.json({
            message: "User signed up successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while signing up the user"
        })
    }
});

userRouter.post("/signin", async function(req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({
            email: email
        });

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(passwordMatch) {
            const token = jwt.sign({
                id: user._id
            }, JWT_USER_PASSWORD)
            
            res.json({
                message: "User signed in successfully",
                token: token
            })
        } else {
            res.status(404).json({
                message: "Incorrect credentials"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error while signing in the user"
        })
    }
});

userRouter.get("/purchases", userMiddleware, async function(req, res) {
    try {
        const userId = req.userId;

        const purchases = await purchaseModel.find({
            userId,
        })

        if(purchases) {
            const courseData = await courseModel.find({
                _id: { $in: purchases.map(x => x.courseId) }
            })

            res.json({
                message: "Your purchased courses fetched successfully",
                purchases,
                courseData
            })
        } else {
            res.status(404).json({
                message: "You have not purchased any courses"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error while fetching the courses"
        })
    }
});

module.exports = {
    userRouter: userRouter,
    JWT_USER_PASSWORD: JWT_USER_PASSWORD
}