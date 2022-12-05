const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const appKey = import("env");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {

    const city = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appKey + "&units=metric";

    https.get(url, (response) => {

        console.log(response.statusCode);

        response.on("data", (data) => {
            let q = JSON.parse(data);
            let icon = q.weather[0].icon;
            let icon_url = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            let temp = q.main.temp;
            let descr = q.weather[0].description;

            res.write("<p>The weather in " + city + " is " + descr + "</p>");
            res.write("<h1>The tempreature is " + temp + "</h1>");
            res.write("<img src='" + icon_url + "' />");
            res.send();

        });
    })
})



app.listen(3000, () => {
    console.log("server is running at 3000");
})
