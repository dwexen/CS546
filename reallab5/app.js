const express = require("express");
let app = express();
let configRoutes = require("./routes");
const bodyParser = require('body-parser');

configRoutes(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});