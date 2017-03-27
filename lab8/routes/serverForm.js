const express = require('express');
const router = express.Router();
const data = require("../data");
const calculator = data.calculator;
const textForm = data.textForm;


router.get("/", (req, res) => {
    res.render("textForm/serverform", {});
});

router.post("/", (req, res) => {
    let text = req.body.text;
    let inputString = req.body.inputString;
    let numTimes = parseInt(req.body.numTimes);
    let numSpaces = parseInt(req.body.numSpaces);
    let result;
    try {
        result = textForm.textEditor(text, inputString, numTimes, numSpaces);
    } catch (e) {
        res.render("textForm/serverform", {text: text, inputString: inputString, numTimes: numTimes, numSpaces: numSpaces, error: e});
        return;
    }
    
    res.render("textForm/serverform", {text: text, inputString: inputString, numTimes: numTimes, numSpaces: numSpaces, result: result});
});

module.exports = router;