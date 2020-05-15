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
    console.log("here")
    console.log(recipe_id)
    console.log(db.select("recipes_ingredients.unit_of_measurement", "recipes_ingredients.quantity","ingredients.name")
    .from("recipes_ingredients")
    .where({recipe: recipe_id})
    .join("ingredients","recipes_ingredients.ingredients","=","ingredients.id"))
    return db.select("unit_of_measurement", "quantity","ingredients.name")
        .from("recipes_ingredients")
        .where({recipe: recipe_id})
        .join("ingredients","ingredients.id","=","recipes_ingredients.ingredients")
}

//should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {

}