const express = require('express');
const router = express.Router();
const data = require("../data");
const eduData = data.education;

router.get("/highschool", (req, res) => {
    eduData.getHighSchool().then((high) => {
        res.json({information: high});
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});

router.get("/undergrad", (req, res) => {
    eduData.getUndergrad().then((ug) => {
        res.json({information: ug});
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});

router.get("/", (req, res) => {
    eduData.getAllSchools().then((schoolList) => {
        res.json({information: schoolList});
    }, () => {
        // Something went wrong with the server!
        res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
    // Not implemented
    res.sendStatus(501);
});

module.exports = router;