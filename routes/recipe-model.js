const db = require("../data/dbConfig")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db("recipes")
}
//should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {

    
    return db.select("unit_of_measurement", "quantity","ingredients.id")
        .from("recipes_ingredients")
        .where({recipe: recipe_id})
        .join("ingredients","ingredients.id","=","recipes_ingredients.ingredient")
}

//should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
    return db.select("steps.number","steps.description")
        .from("steps")
        .where({recipe: recipe_id})
        .orderBy("steps.number","asc")
}