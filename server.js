const express = require('express');
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
//const userdata = require("./utility/product.json")
const PORT = 5000;
const fileURLtoPatrh = require("url");
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")))

app.get("/calculator", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public", "calculator.html"))
})


app.listen(PORT, () => {
    console.log(`server running on port ${ PORT }`.yellow.bold)
})