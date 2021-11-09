const Student = require("../models/student.model");

module.exports = {
    showCreateForm: async (req, res, next) => {
        res.render("students/create")
    },
    createStudent: async (req, res) => {
        const { firstName, lastName, email } = req.body;
        const studentExists = await Student.findOne({ email });
        if (studentExists) {
            return res.status(403).json({ exists: true });
        }
        const student = new Student({ firstName, lastName, email });
        if (req.file) {
            student.image = `/images/${req.file.filename}`;
        }

        await student.save();
        res.redirect("/students")
    },
    getStudentById: async (req, res) => {
        const { _id } = req.params;
        const student = await Student.findById(_id);
        res.render("students/details", { student });
    },
    getListStudents: async (req, res) => {
        const students = await Student.find();
        res.render("students/list", { students });
    },
    deleteStudent: async (req, res) => {
        const { id } = req.params;

        await Student.findByIdAndDelete(id);
        console.log({ id });
        res.redirect("/students")
    },
}