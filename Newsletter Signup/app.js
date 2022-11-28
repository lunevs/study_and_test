const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    console.log(req.body.firstName);

    res.send("ok");
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
});