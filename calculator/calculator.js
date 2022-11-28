const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", (req, res) => {
    let h = parseFloat(req.body.height);
    let w = parseFloat(req.body.weight);
    let result = w / (h * h);

    res.send("Your BMI is " + result);
});

app.listen(3000, () => {
    console.log("Server listening at port 3000")
});