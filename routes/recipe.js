const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Recipe = require("../models/Recipe")

const recipeJSON = {
    "name": "name",
    "instructions": [
        "instruction1",
        "isntruction2",
        "instruction3"

    ],
    "ingredients": [
        "ingredient1",
        "ingredient2",
        "ingredient3"
    ]

}

router.post('/',async (req,res) => {
    try {
        console.log("Got into post");
        console.log(req.body)

        const existingRecipe = await Recipe.findOne({ recipe: req.body });

        console.log(existingRecipe)

        if (!existingRecipe) {
            const newRecipe = new Recipe({
                name: req.body.name,
                instructions: req.body.instructions,
                ingredients: req.body.ingredients
            });

            await newRecipe.save();
            return res.send(req.body);

        } else {
            return res.status(403).send("Already has that recipe!");
        }

    } catch (err) {
        console.error(err);
        return next(err);
    }

})

router.get("/:food",(req, res) => {
    recipeJSON.name = req.params.food

    res.json(recipeJSON)
})
module.exports = router;
