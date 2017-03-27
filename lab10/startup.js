var MongoClient = require('mongodb').MongoClient,
    settings = require('./config.js');
    //Guid = require('Guid');

    const uuid = require('node-uuid');

var fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;

function runSetup() {
    return MongoClient.connect(fullMongoUrl)
        .then(function(db) {
            return db.createCollection("lab10");
        }).then(function(logCollection) {
            
        });
}

// By exporting a function, we can run 
var exports = module.exports = runSetup;