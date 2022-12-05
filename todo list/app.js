const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    let testVar = "cool";
    res.render("list", {inFileApp: testVar});
})


app.listen(3000, () => {
   console.log("Server running at port 3000")
});