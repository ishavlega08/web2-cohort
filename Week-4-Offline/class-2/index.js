const express = require("express");

const app = express();

// function that returns a boolean if the age of the person is more than 14
function isOldEnough(age) {
    if(age >= 14) {
        return true;
    } else {
        return false;
    }
}

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if(age >= 14) {
        next();
    } else {
        res.json({
            message: "You are not of age yet",
        });
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1",function(req, res) {
    res.json({
        message: "You have successfully riden the ride 1",
    });
});

app.get("/ride2",function(req, res) {
    res.json({
        message: "You have successfully riden the ride 2",
    });
});

app.listen(3000);