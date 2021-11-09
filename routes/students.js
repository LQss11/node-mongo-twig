var express = require('express');
var router = express.Router();
const studentController = require("../controllers/student.controller")


const multer = require("multer");
const path = require("path");

const storageData = multer.diskStorage({
    destination: (req, file, clb) => {
        clb(null, './public/images/');
    },
    filename: (req, file, cb) => {
        const newFileName = new Date().getTime().toString() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const upload = multer({ storage : storageData })

/**
 * @Path /students
 **/
router.route("/create")
  .get(studentController.showCreateForm)
  .post(upload.single("avatar") ,studentController.createStudent)

router.get("/", studentController.getListStudents)
router.get("/:_id", studentController.getStudentById)
router.get("/delete/:id", studentController.deleteStudent)

module.exports = router;
