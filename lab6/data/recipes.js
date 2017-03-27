const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllRecipes() {
        return recipes().then((rCollection) => {
            return rCollection.find({}).toArray();
        });
    },
    getRecipeById(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({ _id: id }).then((recipe) => {
                if (!recipe) throw "Post not found";
                return recipe;
            });
        });
    },
    getRecipeComments(id) {
        return recipes().then((rCollection) => {
            return rCollection.findOne({ _id: id }).then((recipe) => {
                if(!recipe) throw "recipe not found";
                return recipe.comments;
            });
        });
    },
    getCommentById(id) {
        return recipes().then((rCollection) => {
            return rCollection.findOne({ comments: {$elemMatch: {_id: id}}}).then((comment) => {
                if(!comment) throw "comment not found";
                return comment;
            });
        });
    },
     addRecipe(title, ingredients, steps, comments) {
        return recipes().then((rCollection) => {
            let newRecipe = {
                _id: uuid.v4(),
                title: title,
                ingredients: ingredients,
                steps: steps,
                comments: comments
            };

            return rCollection.insertOne(newRecipe).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getRecipeById(newId);
            });
        });
    },
    addComment(id, poster,comment) {
        return recipes().then((rCollection) => {
            let newComment = {
                _id: uuid.v4(),
                poster: poster,
                comment: comment
            };

            return rCollection.update({ "_id": id}, {$addToSet: {"comments": newComment}}).then((result) => {
                return this.getRecipeById(rId);
            });
        });
    },
    removeRecipe(id) {
        return recipes().then((rCollection) => {
            return rCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete recipe with id of ${id}`)
                } else { }
            });
        });
    },
    removeComment(id) {
        return recipes().then((rCollection) => {
            return rCollection.update({}, { $pull: { comments: {_id: id}}}).then((result) => {
                return this.CommentById(id)
            });
        });
    },
    updateRecipe(id, updatedRecipe) {
        return recipes().then((recipeCollection) => {
            let updatedRecipeData = {};

            if (updatedRecipe.title) {
                updatedRecipeData.title = updatedRecipe.title;
            }

            if (updatedRecipe.ingredients) {
                updatedRecipeData.ingredients = updatedRecipe.ingredients;
            }

            if (updatedRecipe.steps) {
                updatedRecipeData.steps = updatedRecipe.steps;
            }
            if (updatedRecipe.comments) {
                updatedRecipeData.comments = updatedRecipe.comments;
            }

            let updateCommand = {
                $set: updatedRecipeData
            };

            return recipeCollection.updateOne({ _id: id }, updateCommand).then((result) => {
                return this.getRecipeById(id);
            });
        });
    },
    updateComment(rId, Cid, updatedComment) {
        return recipes().then((recipeCollection) => {
            let updatedCommentData = {};
            let updateCommand;
            //updatedCommentData._id = Cid;
                updateCommand = {$set: {
                "comments.$.poster": updatedComment.poster,
                "comments.$.comment": updatedComment.comment
                }};

            return recipeCollection.update({_id: rId, comments: {$elemMatch: {_id: Cid}}}, updateCommand).then((result) => {
                return this.getRecipeById(rId);
            });
        });
    }
}

module.exports = exportedMethods;
