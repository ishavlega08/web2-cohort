const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");

const PORT = 3000

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
    await mongoose.connect("mongodb+srv://admin:Ishav%402002@cohort-2.sa2qatc.mongodb.net/course-selling-app");
    app.listen(PORT);
    console.log(`App is listening on port ${PORT}`);
}

main();