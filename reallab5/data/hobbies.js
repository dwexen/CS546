const mongoCollections = require("../config/mongoCollections");
const hob = mongoCollections.hobbies;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllHobbies() {
        return hob().then((hobCollection) => {
            return hobCollection.find({}).toArray();
        })
    },
    getHobbyById(id) {
        return hob().then((hobCollection) => {
            return hobCollection.findOne({ _id: id }).then((hob) => {
                if (!hob) throw "School not found";
                return hob;
            });
        });
    },
    addHobby(hName, hInfo) {
        return hob().then((hobCollection) => {
            let newHobby = {
                hName: hName,
                hInfo: hInfo,
                _id: uuid.v4()
            };

            return hobCollection.insertOne(newHobby).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getHobbyById(newId);
            });
        });
    },
    getInfo(hobby) {
        return hob().then((hobCollection) => {
            return hobCollection.findOne({ hName: hobby}).then((hob) => {
                if (!hob) throw "School not found";
                return hob.hInfo;
            });
        });
    }
}

module.exports = exportedMethods;