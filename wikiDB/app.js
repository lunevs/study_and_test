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

mongoose.connect(MONGODB_URI)
    .then(() => console.log('connected to MongoDB'))
    .catch((error) => console.log('error connection to MongoDB:', error.message))

app.route("/articles")
    .get((req, res) => {
        Article.find({}, (err, foundArticles) => {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        })
    })
    .post((req, res) => {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        })
        newArticle.save((error) => {
            if (!error) {
                res.send("Successfully added new article");
            } else {
                res.send(error);
            }
        });
    })
    .delete((req, res) => {
        Article.deleteMany({}, (error) => {
            if (!error) {
                res.send("Successfully deleted all articles");
            } else {
                res.send(error);
            }
        })
    })


app.route("/articles/:articleTitle")
    .get((req, res) => {
        const articleTitle = req.params.articleTitle;
        Article.findOne({title: articleTitle}, (err, foundArticle) => {
            if (!err) {
                res.send(foundArticle);
            } else {
                res.send(err);
            }
        })
    })
    .put((req, res) => {
        Article.replaceOne(
            {title: req.params.articleTitle},
            {title: req.body.title, content: req.body.content},
            (err) => {
                if (!err) {
                    res.send("The article is successfully updated")
                }
            });
    })
    .patch((req, res) => {
        Article.updateOne(
            {title: req.params.articleTitle},
            {$set: req.body},
            (err) => {
                if (!err) {
                    res.send("The article is successfully patched")
                }
            });
    })
    .delete((req, res) => {
        const articleTitle = req.params.articleTitle;
        Article.deleteOne({title: articleTitle}, (error) => {
            if (!error) {
                res.send("Successfully deleted the article");
            } else {
                res.send(error);
            }
        })
    })



app.listen(3000, () => {
    console.log("Server running at port 3000")
});