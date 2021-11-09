const User = require("../models/user.model");

module.exports = {
    showCreateForm: async (req, res, next) => {
        res.render("users/create")
    },
    showSignInForm: async (req, res, next) => {
        res.render("users/signin")
    },
    createUser: async (req, res) => {
        const { firstName, lastName, email, username, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(403).json({ exists: true });
        }
        const user = new User({ firstName, lastName, email, username, password });
        if (req.file) {
            user.image = `/images/${req.file.filename}`;
        }

        await user.save();
        res.redirect("/users")
    },
    getUserById: async (req, res) => {
        const { _id } = req.params;
        const user = await User.findById(_id);

        res.render("users/details", { user });
    },

    userSignIn: async (req, res) => {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user.password === password) {
            //res.render("users/details", { user });
            res.redirect("/users/"+user.id)

        }
        else{
            res.render("users/create");
        }
    },

    getListUsers: async (req, res) => {
        const users = await User.find();
        res.render("users/list", { users });
    },
    deleteUser: async (req, res) => {
        const { id } = req.params;

        await User.findByIdAndDelete(id);
        console.log({ id });
        res.redirect("/users")
    },
}