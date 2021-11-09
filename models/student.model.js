const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String,
            unique: true
        },
        image: String
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;