const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/recipe/:recipeId", (req, res) => {
    recipeData.getRecipeComments(req.params.recipeId).then((commentList) => {
        res.json(commentList);
    }).catch(() => {
        res.status(404).json({error: "Recipe not found"});
    });
});

router.get("/:commentId", (req, res) => {
    recipeData.getCommentById(req.params.commentId).then((comment) => {
        res.json(comment);
    }).catch(() => {
        res.status(404).json({error: "Comment not found"});
    });
});

router.post("/:recipeId", (req, res) => {
    let commentData = req.body;
    if(!commentData.poster)
    {
        rest.status(400).json({error: "you must provider a poster"});
    }
    if(!commentData.comment)
    {
        rest.status(400).json({error: "you must provide a comment"});
    }
    recipeData.addComment(req.params.recipeId, commentData.poster, commentData.comment)
        .then((newComment) => {
            res.json(newComment);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
});


router.put("/:recipeId/:commentId", (req, res) => {
    let updatedData = req.body;

    let getRecipe = recipeData.getRecipeById(req.params.recipeId);

    getRecipe.then(() => {
        return recipeData.updateComment(req.params.recipeId, req.params.commentId, updatedData)
            .then((updatedComment) => {
                res.json(updatedComment);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Comment not found" });
    });

});

router.delete("/comments/:id", (req, res) => {
    let getComment = recipeData.getCommentById(req.params.id);

    getComment.then(() => {
        return recipeData.removeComment(req.params.id)
            .then(() => {
                res.sendStatus(200);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Comment not found" });
    });
});

module.exports = router;