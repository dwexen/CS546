const express = require('express');
const router = express.Router();
const data = require("../data");
const calculator = data.calculator;
const textForm = data.textForm;



router.get("/", (req, res) => {
    res.render("textForm/clientform", {});
});


module.exports = router;