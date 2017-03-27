const clientForm = require("./clientForm");
const serverForm = require("./serverForm");

const constructorMethod = (app) => {
    app.use("/clientForm", clientForm);
    app.use("/serverForm", serverForm);
    app.use("*", (req, res) => {
        res.redirect("/clientform");
    })
};

module.exports = constructorMethod;
