const mongoCollections = require("../config/mongoCollections");
const classes = mongoCollections.myClasses;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllClasses() {
        return classes().then((cCollection) => {
            return cCollection.find({}).toArray();
        })
    },
    getClassById(id) {
        return classes().then((cCollection) => {
            return cCollection.findOne({ _id: id }).then((clas) => {
                if (!clas) throw "School not found";
                return clas;
            });
        });
    },
    addClass(cName, courseNum, professor, desc) {
        return classes().then((cCollection) => {
            let newClass = {
                cName: cName,
                courseNum: courseNum,
                professor: professor,
                desc: desc,
                _id: uuid.v4()
            };

            return cCollection.insertOne(newClass).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getClassById(newId);
            });
        });
    },
    getDetails(cNum) {
        return classes().then((cCollection) => {
            return cCollection.findOne({courseNum: cNum}).then((course) => {
                if (!course) throw "Course not found";
                return course;
            });
        });
    }
}

module.exports = exportedMethods;