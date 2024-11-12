const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "ishavsecr3t";

const app = express();
app.use(express.json());

const users = [];

// localhost:3000
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username);
    if(user) {
        res.json({
            message: "User already signed up"
        })
        return;
    }
 
    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You have signed up"
    })
});

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);
    if(user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        
        res.header("token", token)
        
        res.json({
            token: token
        })

        console.log(users);
    } else {
        res.status(401).json({
            message: "Invalid username or password"
        })
    }
});

function auth(req, res, next) {
    const token = req.headers.token;
    
    if(token) {
        jwt.verify(token, JWT_SECRET, function (err, decoded) {
            if(err) {
                res.status(401).json({
                    message: "Unauthorized"
                })
            } else {
                req.user = decoded;
                next();
            }
        })
    } else {
        res.status(401).json({
            message: "Unauthorized"
        })
    }
}

app.get("/me", auth, function(req, res) {
    const user = req.user;
    const username = user.username;

    const userDetails = users.find(u => u.username === username);
    if(userDetails) {
        res.json({
            username: userDetails.username,
            password: userDetails.password
        })
    } else {
        res.status(401).json({
            message: "Invalid token"
        })
    }
});

app.listen(3000);