var MongoClient = require('mongodb').MongoClient,
    runStartup = require("./startup.js"),
    settings = require('./config.js');
    const guid = require('guid');
    const uuid = require('node-uuid');

var fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
var exports = module.exports = {};

runStartup().then(function() {
    console.log("DB is running");
});

MongoClient.connect(fullMongoUrl)
    .then(function(db) {
        var logs = db.collection("lab10");

        exports.getAllLogs = function() {
            return logs.find().toArray();
        };

        exports.addLog = function(rId, rPath, rMethod, cookies, timestamp) {
            let newLog = {
                _id: guid.create(),
                requestId: rId,
                requestPath: rPath,
                requestMethod: rMethod,
                cookies: cookies,
                timestamp: timestamp
            };
            return logs.insertOne(newLog).then((myLog) => {
                return myLog.insertedId;
            }).then((newId) => {
                return exports.getLog(newId);
            });
        };
        // Our easiest to follow function!
        
        exports.getLog = function(id) {
            if (!id) return Promise.reject("you must provide an ID");

            return logs.find({ _id: id}).limit(1).toArray().then(function(listOfLogs) {
                if(listOfLogs.length === 0) throw "Could not find log with id of " + id;

                return listOfLogs[0];
            });
        };
        
    });


