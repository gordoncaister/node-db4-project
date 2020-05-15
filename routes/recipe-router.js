const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {

    console.log("recipe")
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
  });

  router.get('/:id/list', (req, res) => {

    console.log("list")
    Recipes.getShoppingList(req.params.id)
        .then(list => {
            console.log("made it here")
            res.json(list);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get shopping list' });
        });
  });

  router.get('/:id/steps', (req, res) => {

    console.log("steps")
    Recipes.getInstructions(req.params.id)
        .then(instructions => {
            res.json(instructions);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get instructions' });
        });
  });


module.exports = router;