require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@127.0.0.1/${process.env.MONGODB_DBNAME}`);

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});
userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ['password']});
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
