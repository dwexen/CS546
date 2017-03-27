const express = require('express');
const router = express.Router();
const data = require("../data");
const hobbyData = data.hobbies;

router.get("/:hobby", (req, res) => {
    hobbyData.getInfo(req.params.hobby).then((hob) => {
        res.json({information: hob});
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});

router.get("/", (req, res) => {
    hobbyData.getAllHobbies().then((hobList) => {
        res.json({information: [hobList[0].hName, hobList[1].hName]});
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