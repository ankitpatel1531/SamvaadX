const mongoose = require("mongoose");

const dbConnect = () => {

    console.log("DATABASE_URI =", process.env.DATABASE_URI);

    mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((error) => {
        console.log("DB connection failed");
        console.log(error);
    });
}

module.exports = dbConnect;