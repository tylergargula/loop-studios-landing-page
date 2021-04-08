const express = require("express");
const bodyParser = require("body-parser");           //https get request

const app = express();     //initializes my express app



app.get("/", function (req,res) {
    res.sendFile(__dirname + "/index.html")
});


app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
