const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var items = [];
var workItems = [];

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