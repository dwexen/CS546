const eduRoutes = require("./education");
const hobRoutes = require("./hobbies");
const classRoutes = require("./myClasses");
let constructorMethod = (app) => {
    app.use("/education", eduRoutes);
    app.use("/hobbies", hobRoutes);
    app.use("/classes", classRoutes);
};

module.exports = {
    education: require("./education"),
    hobbies: require("./hobbies"),
    myClasses: require("./myClasses")
};