require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

//const encrypt = require("mongoose-encryption");
//const md5 = require("md5");
//const bcrypt = require("bcrypt");
//const saltRounds = 10;

const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@127.0.0.1/${process.env.MONGODB_DBNAME}`);

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});
userSchema.plugin(passportLocalMongoose);
//userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ['password']});

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", (req, res) => {
   res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err)
        }
    });
    res.redirect("/");
});

app.post("/login", (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, (err) => {
        if (err) {
            console.log(err);
            res.redirect("/login");
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/secrets");
            })
        }
    });

    // User.findOne({email: req.body.username}, (error, foundUser) => {
    //     if (error) {
    //         console.log(error)
    //     } else {
    //         if (foundUser) {
    //             bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
    //                 if (result === true) {
    //                     res.render("secrets")
    //                 } else {
    //                     res.send("Incorrect user password");
    //                 }
    //             })
    //         } else {
    //             res.send("No such user");
    //         }
    //     }
    // });

})

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/secrets", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("secrets")
    } else {
        res.render("login");
    }
});

app.post("/register", (req, res) => {

    User.register({username: req.body.username}, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/secrets");
            })
        }
    })


    // bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    //     const currentUser = new User({
    //         email: req.body.username,
    //         password: hash
    //     });
    //     currentUser.save((error) => {
    //         if (error) {
    //             console.log(error)
    //         } else {
    //             res.render("secrets");
    //         }
    //     });
    // })
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})
