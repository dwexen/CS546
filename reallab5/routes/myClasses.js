const express = require('express');
const router = express.Router();
const data = require("../data");
const classesData = data.myClasses;

router.get("/details?code=420", (req, res) => {
    classesData.getDetails(req.query.code).then((course) => {
        res.json({information: [course.cName, course.professor, course.desc]});
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});

router.get("/", (req, res) => {
    classesData.getAllClasses().then((classList) => {
        res.json({information: [classList[0].courseNum, classList[1].courseNum, classList[2].courseNum, classList[3].courseNum, classList[4].courseNum, classList[5].courseNum, classList[6].courseNum]});
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