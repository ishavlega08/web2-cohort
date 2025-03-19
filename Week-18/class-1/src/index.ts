import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();

app.get("/users", async (req, res) => {
    const users = await client.user.findMany();

    res.json({
        users
    });
})

app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;

    const todos = await client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            username: true,
            todos: true
        }
    });

    res.json({
        todos
    })
})

app.listen(3000);

async function createUser() {
    await client.user.create({
        data: {
            username: "ishav@gmail.com",
            password: "123123",
            firstName: "ishav",
            lastName: "singh"
        }
    })
}

async function findUser() {
    const user = await client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    })

    console.log(user);
}

// createUser();
// findUser();