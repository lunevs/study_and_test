const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var items = [];

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

app.post("/", (req, res) => {
    let item = req.body.inputValue;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, () => {
   console.log("Server running at port 3000")
});