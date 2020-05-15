
exports.up = function(knex) {
    return knex.schema
    .createTable("recipes",recipes=>{
        recipes.increments();
        recipes.string("name", 255).notNullable();
    })
    .createTable("steps",steps=>{
        steps.increments();
        steps.integer("number").unsigned().notNullable();
        steps.text("description").notNullable();
        steps.integer("recipe").unsigned().notNullable()
            .references("recipes.id")
            .onUpdate("CASCADE")
            .onDelete("DO NOTHING");
    })
    .createTable("ingredients",ingredients=>{
        ingredients.increments();
        ingredients.string("name", 255).notNullable();
        
    })
    .createTable("recipes_ingredients",recipesIngredients=>{
        recipesIngredients.increments();
        recipesIngredients.string("unit_of_measurement", 100).notNullable();
        recipesIngredients.float("quanitity").notNullable();
        recipesIngredients.integer("recipe").unsigned().notNullable()
            .references("recipes.id")
            .onUpdate("CASCADE")
            .onDelete("DO NOTHING");
        recipesIngredients.integer("ingredients").unsigned().notNullable()
            .references("ingredients.id")
            .onUpdate("CASCADE")
            .onDelete("DO NOTHING");
    })
  
};

exports.down = function(knex) {
  
};
