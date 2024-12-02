require("dotenv").config();

const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const { auth, JWT_SECRET } = require("./auth");
const bcrypt = require("bcrypt");
const { z, string } = require("zod");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    try {
        const requiredBody = z.object({
            email: z.string().email(),
            password: z.string().min(3).max(20),
            name: z.string().min(3).max(20)
        });

        const parsedData = requiredBody.safeParse(req.body);

        if(!parsedData.success) {
            res.status(403).json({
                message: "Invalid format",
                error: parsedData.error
            })
            return
        }

        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.password;
    
        const hashedPassword = await bcrypt.hash(password, 5);
        // console.log(hashedPassword);
    
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });
    
        res.json({
            message: "You are signed up"
        })     
    } catch (error) {
        res.status(500).json({
            mesage: "Error while signing up"
        })
    }
});

app.post("/login", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user =  await UserModel.findOne({
        email: email
    });

    if(!user) {
        res.status(403).json({
            message: "User does not exist"
        });
        return
    }

    // console.log(user);
    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);

        res.json({
            token: token
        })
    } else {
        res.status(401).json({
            message: "Invalid credentials"
        })
    }
});

app.post("/todo", auth, async function(req, res) {
    try {
        const userId = req.userId;
        const title = req.body.title;
        const done = req.body.done;
    
        const todo = await TodoModel.create({
            title: title,
            done: done,
            userId: userId
        });
    
        res.json({
            message: "Todo added successfully",
            todo: todo
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while creating todo"
        })
    }
});

app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todo = await TodoModel.find({
        userId: userId
    });

    if(todo) {
        res.json({
            message: "Todo fetched successfully",
            todos: todo
        })
    } else {
        res.status(404).json({
            message: "No todos found"
        })
    }
});

app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
});