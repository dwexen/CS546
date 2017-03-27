const recipeRoutes = require("./recipes");

let constructorMethod = (app) => {
    app.use("/recipes", recipeRoutes);
};

module.exports = {
    recipes: require("./recipes")
};
