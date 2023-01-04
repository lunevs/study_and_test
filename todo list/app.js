const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const { MONGODB_URI } = require("./config");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.set('strictQuery', false);
const Item = mongoose.model("Item", new Schema({ name: String }));
const do1 = new Item({name: "wash my car"});
const do2 = new Item({name: "buy tickets to the moon"});

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connection to MongoDB:', error.message)
    })


app.get("/", (req, res) => {

    Item.find({}, (err, result) => {
        if (result.length === 0) {
            Item.insertMany([do1, do2], err => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("yes!")
                }
            })
            res.redirect("/");
        } else {
            res.render("list", {inFileApp: "Today", todoList: result});
        }
    })
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/work", (req, res) => {
    res.render("list", {inFileApp: "work todo list", todoList: workItems});
})

app.post("/", (req, res) => {

    const item = new Item({name: req.body.inputValue});
    item.save();

    res.redirect("/");
})


app.listen(3000, () => {
   console.log("Server running at port 3000")
});