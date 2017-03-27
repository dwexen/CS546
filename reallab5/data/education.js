const mongoCollections = require("../config/mongoCollections");
const edu = mongoCollections.education;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllSchools() {
        return edu().then((eduCollection) => {
            return eduCollection.find({}).toArray();
        })
    },
    getSchoolById(id) {
        return edu().then((eduCollection) => {
            return eduCollection.findOne({ _id: id }).then((edu) => {
                if (!edu) throw "School not found";
                return edu;
            });
        });
    },
    addSchool(sName, degree, type) {
        return edu().then((eduCollection) => {
            let newSchool = {
                sName: sName,
                degree: degree,
                type: type,
                _id: uuid.v4()
            };

            return eduCollection.insertOne(newSchool).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getSchoolById(newId);
            });
        });
    },
    getHighSchool() {
        return edu().then((eduCollection) => {
            return eduCollection.findOne({ type: "highschool"}).then((edu) => {
                if (!edu) throw "School not found";
                return edu.sName;
            });
        });
    },
    getUndergrad() {
        return edu().then((eduCollection) => {
            return eduCollection.findOne({ type: "undergrad"}).then((edu) => {
                if (!edu) throw "School not found";
                return [edu.sName, edu.degree];
            });
        });
    }
}

module.exports = exportedMethods;
