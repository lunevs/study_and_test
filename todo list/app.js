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

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('connected to MongoDB')

        const Item = mongoose.model("Item", new Schema({ name: String }));
        const do1 = new Item({name: "wash my car"});
        const do2 = new Item({name: "buy tickets to the moon"});
        Item.insertMany([do1, do2], err => {
            if (err) {
                console.log(err)
            } else {
                console.log("yes!")
            }
        })

    })
    .catch((error) => {
        console.log('error connection to MongoDB:', error.message)
    })


app.get("/", (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day = today.toLocaleDateString("ru-RU", options);
    res.render("list", {inFileApp: day, todoList: items});
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/work", (req, res) => {
    res.render("list", {inFileApp: "work todo list", todoList: workItems});
})

app.post("/", (req, res) => {
    let item = req.body.inputValue;

    console.log(req.body);

    if (req.body.list === "work todo list") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
})


app.listen(3000, () => {
   console.log("Server running at port 3000")
});