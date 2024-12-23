interface User {
    readonly id: string;
    name: string;
    age: number;
    readonly email: string;
    password: string;
};

// For a user update, only pick `name`, `age` and 'password'
type UpdatedProps = Pick<User, 'name' | 'age' | 'password'>

// Partial -> makes the fields optional
type UpdatedPropsOptional = Partial<UpdatedProps>


function updateUser(updatedProps: UpdatedPropsOptional) {
    // hit the database to update the user
}

updateUser({
    name: "ishav",
    age: 22
})

// Readonly
// making whole user readonly, cannot change any property of this user
const user: Readonly<User> = {
    id: "21341234",
    name: "ishav",
    age: 22,
    email: "ishav@gmail.com",
    password: "ishav22334"
}

// user.age = "sdfasdf"

interface Config {
    endpoint: string;
    apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

// Record and Map
// Record let’s you give a cleaner type to objects
// Record is a ts concept
type Employee = {
    id: string;
    username: string;
}

type Employees = Record<string, Employee> // Record<key, value>

const employees: Employees = {
    "ras@2ad": {
        id: "ras@2ad",
        username: "ishav"
    }, 
    "ras2jk#": {
        id: "ras2jk#",
        username: "kirat"
    }
}

// Map -> maps gives you an even fancier way to deal with objects. Very similar to Maps in C++
// Map is a js concept

// Initialize an empty Map
const managers = new Map<string, Employee>(); // new Map<key, value>()

// Add users to the map using .set
managers.set("abc123", { id: "abc123", username: "John" })
managers.set("xyz456", { id: "xyz456", username: "John" })

// Accessing a value using .get
const manager = managers.get("abc123");
console.log(manager);

// Exclude
// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK

// Type inference in zod
// When using zod, we’re done runtime validation. 
// For example, the following code makes sure that the user is sending the right inputs to update their profile information

import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

// Type inference
// You can extract the TypeScript type of any schema with z.infer<typeof mySchema>
type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);