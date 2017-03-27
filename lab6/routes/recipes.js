const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/:id", (req, res) => {
    recipeData.getRecipeById(req.params.id).then((recipe) => {
        res.json(recipe);
    }).catch(() => {
        res.status(404).json({ error: "Recipe not found" });
    });
});

router.get("/", (req, res) => {
    recipeData.getAllRecipes().then((recipeList) => {
        res.json(recipeList);
    }).catch((e) => {
        res.status(500).json({ error: e });
    });
});

router.post("/", (req, res) => {
    let nRecipeData = req.body;
    if(!nRecipeData.title)
    {
        res.status(400).json({error: "you must provide a title"});
        return;
    }
    if(!nRecipeData.ingredients)
    {
        res.status(400).json({error: "you must provide ingredients"});
        return;
    }
    if(!nRecipeData.steps)
    {
        res.status(400).json({error: "you must provide steps"});
        return;
    }
    if(!nRecipeData.title)
    {
        res.status(400).json({error: "you must provide a comments field"});
        return;
    }
    recipeData.addRecipe(nRecipeData.title, nRecipeData.ingredients, nRecipeData.steps, nRecipeData.comments)
        .then((newRecipe) => {
            res.json(newRecipe);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
});



router.put("/:id", (req, res) => {
    let updatedData = req.body;

    let getRecipe = recipeData.getRecipeById(req.params.id);

    getRecipe.then(() => {
        return recipeData.updateRecipe(req.params.id, updatedData)
            .then((updatedRecipe) => {
                res.json(updatedRecipe);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Recipe not found" });
    });

});



router.delete("/:id", (req, res) => {
    let getRecipe = recipeData.getRecipeById(req.params.id);

    getRecipe.then(() => {
        return recipeData.removeRecipe(req.params.id)
            .then(() => {
                res.sendStatus(200);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Recipe not found" });
    });
});


module.exports = router;
