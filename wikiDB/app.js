const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const { MONGODB_URI } = require("./config");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static("public"));

mongoose.set('strictQuery', false);
const articlesSchema = new Schema({ title: String, content: String });
const Article = mongoose.model("Article", articlesSchema);

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connection to MongoDB:', error.message)
    })


app.get("/", (req, res) => {
    Article.find({}, (err, result) => console.log(result))
})

app.post("/", (req, res) => {
})

app.post("/delete", (req, res) => {
})

app.listen(3000, () => {
    console.log("Server running at port 3000")
});