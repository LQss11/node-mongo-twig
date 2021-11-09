const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        username: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            unique: true
        },
        password: String,
        image: String
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("user", userSchema);

module.exports = User;