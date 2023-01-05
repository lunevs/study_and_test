const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const { Schema } = mongoose;

const { MONGODB_URI } = require("./config");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.set('strictQuery', false);
const itemsSchema = new Schema({ name: String });
const Item = mongoose.model("Item", itemsSchema);
const do1 = new Item({name: "wash my car"});
const do2 = new Item({name: "buy tickets to the moon"});

const List = mongoose.model("List", new Schema({name: String, listItems: [itemsSchema]}) );


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

app.get("/:paramName", (req, res) => {

    const customListName = _.capitalize(req.params.paramName);
    List.findOne({name: customListName}, (err, result) => {
        if (result) {
            console.log("just show list " + customListName);
            res.render("list", {inFileApp: result.name, todoList: result.listItems});
        } else {
            console.log("create new " + customListName);
            const listEl = new List({name: customListName, listItems: [do1, do2]});
            listEl.save().then(
                () => res.redirect("/"+customListName)
            );
        }
    })
})

app.post("/", (req, res) => {

    const item = new Item({name: req.body.inputValue});
    const list = req.body.list;
    if (list === "Today") {
        item.save();
        res.redirect("/");
    } else {
        List.findOne({name: list}, (err, result) => {
            result.listItems.push(item);
            result.save();
            res.redirect("/" + list);
        })
    }
})

app.post("/delete", (req, res) => {
    const itemId = req.body.checkbox;
    const list = req.body.listName;

    if (list === "Today") {
        Item.deleteOne({_id: itemId}, err => {
            if (err) {
                console.log(err)
            } else {
                console.log("successfully removed")
            }
        })
        res.redirect("/");
    } else {
        List.findOneAndUpdate({name: list}, {$pull: {listItems: {_id: itemId}}}, (err, result) => {
            if (!err) {
                res.redirect("/" + list);
            }
        })
    }
})

app.listen(3000, () => {
   console.log("Server running at port 3000")
});