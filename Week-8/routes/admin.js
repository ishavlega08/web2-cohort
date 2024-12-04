const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { adminModel, courseModel } = require("../db");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");

const adminRouter = express.Router();

adminRouter.post("/signup", async function(req, res) {
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

        await adminModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });

        res.json({
            message: "Admin signed up successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while signing up the admin"
        })
    }
});

adminRouter.post("/signin", async function(req, res) {
    try {
        const { email, password } = req.body;

        const admin = await adminModel.findOne({
            email: email
        });

        const passwordMatch = await bcrypt.compare(password, admin.password);

        if(passwordMatch) {
            const token = jwt.sign({
                id: admin._id
            }, JWT_ADMIN_PASSWORD);
            
            res.json({
                message: "Signed in successfully", 
                token: token
            })
        }

        res.status(404).json({
            message: "Incorrect credentials"
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while signing in the admin"
        })
    }
});

adminRouter.post("/course", adminMiddleware, async function(req, res) {
    try {
        const adminId = req.userId;

        const { title, description, price, imageUrl } = req.body;

        const course = await courseModel.create({
            title: title,
            description: description,
            price: price,
            imageUrl: imageUrl,
            creatorId: adminId
        })

        res.json({
            message: "Course created successfully",
            courseId: course._id
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while creating the course"
        })
    }
});

adminRouter.put("/course", adminMiddleware, async function(req, res) {
    try {
        const adminId = req.userId;

        const { courseId , title, description, price, imageUrl } = req.body;

        const updatedCourse =  await courseModel.updateOne({
            _id: courseId,
            creatorId: adminId
        }, {
            title: title,
            description: description,
            price: price,
            imageUrl: imageUrl
        })   
        
        res.json({
            message: "Course updated successfully",
            courseId: updatedCourse._id
        })

    } catch (error) {
        res.status(500).json({
            message: "Error while updating the course"
        })
    }
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
    adminRouter: adminRouter,
    JWT_ADMIN_PASSWORD: JWT_ADMIN_PASSWORD
}