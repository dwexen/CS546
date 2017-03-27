const express = require('express');
const router = express.Router();
const data = require("../data");
const locData = data.locations;
const eventData = data.events;
// Single Location Page
router.get("/:id", (req, res) => {
    // Find a location by the provided id, 
    // then display its information
    // As well as listing all events that will be at this location
    // Each of these events need to link to the event page and show the event name
    // If a location is not found, display the 404 error page
    locData.getLocation(req.params.id).then((loc) => {
    	return eventData.getAllEvents().then((events) => {
    		let realList = []
    		for(let i = 0; i < events.length; i++)
    		{
    			if(events[i].location == loc.id)
    			{
    				realList.push(events[i]);
    			}
    		}
    		return res.render('locations/single', {locations: loc, events: realList});
    	}).catch((e) => {
            res.status(404).render('notfound', {error: e});
    	});
    });
});

// Location Index Page
router.get("/", (req, res) => {
    // Display a list of all locations; it can be in an unordered list, or a table
    // Each of these locations need to link to the single location page
     locData.getAllLocations().then((locList) => {
        res.render('locations/index', {locations: locList});
    }).catch(() => {
        res.status(500).json({error: "People couldn't be found"});
    });
});

module.exports = router;