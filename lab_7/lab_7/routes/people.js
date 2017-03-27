const express = require('express');
const router = express.Router();
const data = require("../data");
const peopleData = data.people;
const eventData = data.events;

// Single Person Page
router.get("/:id", (req, res) => {
	peopleData.getPerson(req.params.id).then((people) => {
		eventData.getEventsForAttendee(people.id).then((events) => {
			res.render('people/single', {people: people, events:events});
		}).catch((e) => {
            res.status(404).render('notfound', {error: e});
		});
	});
    // Find a person by the provided id, 
    // then display their information
    // As well as listing all events that they will be attending
    // Each of these events need to link to the event page, and show the event name
    // If a person is not found, display the 404 error page
});

// People Index Page
router.get("/", (req, res) => {
	peopleData.getAllPeople().then((peopleList) => {
		res.render('people/index', {people: peopleList});
	}).catch(() => {
		res.status(500).json({error: "People couldn't be found"});
	});
    // Display a list of all people; it can be in an unordered list, or a table
    // Each of these people need to link to the single person page
});

module.exports = router;