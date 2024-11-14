const jwt = require("jsonwebtoken");

// decode, generate, verify
const value = {
    name: "Ishav",
    accountNumber: 123123123
}

// generate jwt
// const token = jwt.sign(value, "secret");
// console.log(token);

const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSXNoYXYiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTczMTU3MTc2NH0.Qm6hQwfGp4a0_cJKs0vHFhclySKEZmHK-y6zoz3_PvI", "secret");
// console.log(verifiedValue);

// Try Catch
function getLength(name) {
    try {
        return name.length;
        console.log("inside try statement");
    } catch(e) {
        console.error("inside catch statement");
    }
}

const ans = getLength();
console.log(ans);

console.log("hi there");