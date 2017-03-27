const express = require('express');
const router = express.Router();
const data = require("../data");
const eventData = data.events;
const peopleData = data.people;
const locData = data.locations;
// Single Event Page
router.get("/:id", (req, res) => {

    eventData.getEvent(req.params.id).then((events) => {
        return peopleData.getAllPeople().then((peopleList) => {
            return locData.getLocation(events.location).then((loc) => {
                let realList = [];
                for(let i = 0; i <= events.attendees.length; i++)
                {
                    for(let j = 0; j < peopleList.length; j++)
                    {
                        if(events.attendees[i] == peopleList[j].id)
                        {
                            realList.push(peopleList[j]);
                        }
                    }
                
                }
                return res.render('events/single', {events: events, people: realList, locations: loc});
                }).catch((e) => {
                    res.status(404).render('notfound', {error: e});
            });
        });
    });

    // Find a event by the provided id, 
    // then display its information
    // As well as listing the names of all the attendees that will be at this event 
    // Each of these attendee names will need to link to their person page
    // You will also list the location of the event, said location's name, and a link to the location page

    // If a event is not found, display the 404 error page
});

// Event Index Page
router.get("/", (req, res) => {
    // Display a list of all events; it can be in an unordered list, or a table
    // Each of these events need to link to the single event page
    eventData.getAllEvents().then((eventsList) => {
        res.render('events/index', {events: eventsList});
    }).catch(() => {
        res.status(500).json({error: "People couldn't be found"});
    });
});

module.exports = router;