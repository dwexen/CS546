const eduRoutes = require("./education");
const hobRoutes = require("./hobbies");
const classRoutes = require("./myClasses")
const constructorMethod = (app) => {
    app.use("/education", eduRoutes);
    app.use("/hobbies", hobRoutes);
    app.use("/classes", classRoutes);
    
    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;