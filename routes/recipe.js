const express = require('express');
const router = express.Router();

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

router.post('/',(req,res) => {
    console.log("got int post")

    res.send(req.body)
})

router.get("/:food",(req, res) => {
    recipeJSON.name = req.params.food
    
    res.json(recipeJSON)
})
module.exports = router;
