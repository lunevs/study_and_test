const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const { MONGODB_URI } = require("./config");

const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.set('strictQuery', false);
mongoose.connect(MONGODB_URI);
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});
const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
   res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {

    User.findOne({email: req.body.username}, (error, foundUser) => {
        if (error) {
            console.log(error)
        } else {
            if (foundUser) {
                if (foundUser.password && foundUser.password === req.body.password) {
                    res.render("secrets")
                } else {
                    res.send("Incorrect user password");
                }
            } else {
                res.send("No such user");
            }
        }
    });

})

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {

    const currentUser = new User({
        email: req.body.username,
        password: req.body.password
    });
    console.log(currentUser);
    currentUser.save((error) => {
        if (error) {
            console.log(error)
        } else {
            res.render("secrets");
        }
    });
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})
