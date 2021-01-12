const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Get");

});

app.listen(4200, () => {
    console.log('Running on port 4200');
})