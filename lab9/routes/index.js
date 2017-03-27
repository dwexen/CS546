const exampleRoutes = require("./examples");

const constructorMethod = (app) => {
    app.use("/", exampleRoutes);

    app.use("*", (req, res) => {
        //res.sendStatus(404);
        res.redirect("/");
    })
};

module.exports = constructorMethod;