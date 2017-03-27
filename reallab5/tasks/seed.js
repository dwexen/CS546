const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const edu = data.education;
const hobbies = data.hobbies;
const classes = data.myClasses;

dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    }).then((db) => {
        return edu.addSchool("Mhigh", "advanced regents", "highschool");
    }).then((db) => {
        return edu.addSchool("Blane", "none", "elementary");
    }).then((db) => {
        return edu.addSchool("Stevens", "CS", "undergrad");
    }).then((db) => {
        return hobbies.addHobby("Eating", "Nomnom");
    }).then((db) => {
        return hobbies.addHobby("sleeping", "zzzzzz");
    }).then((db) => {
        return classes.addClass("Gym", "420", "Mr. Crocker", "A fun class");
    }).then((db) => {
        return classes.addClass("Dude", "99", "Mr. Crocker", "A fun class");
    }).then((db) => {
        return classes.addClass("Beans", "410", "Mr. Crocker", "A fun class");
    }).then((db) => {
        return classes.addClass("Wizardry", "450", "Mr. Crocker", "A fun class");
    }).then((db) => {
        return classes.addClass("test", "320", "Mr. Crocker", "A fun class");
    }).then((db) => {
        return classes.addClass("Gum", "220", "Mr. Crocker", "A fun class");
    }).then((db) => {
        return classes.addClass("Bif", "460", "Mr. Crocker", "A fun class");
    }).then(() => {
        console.log("Done seeding database");
        db.close();
    });
}, (error) => {
    console.error(error);
});
