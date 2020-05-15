
exports.up = function(knex) {
    return knex.schema
    .createTable("recipes",recipes=>{
        recipes.increments("id");
        recipes.string("name", 255).notNullable();
    })
    .createTable("steps",steps=>{
        steps.increments("id");
        steps.integer("number").unsigned().notNullable();
        steps.text("description").notNullable();
        steps.integer("recipe").unsigned().notNullable()
            .references("recipes.id")
            .onUpdate("CASCADE")
            .onDelete("NO ACTION");
    })
    .createTable("ingredients",ingredients=>{
        ingredients.increments("id");
        ingredients.string("name", 255).notNullable();
        
    })
    .createTable("recipes_ingredients",recipesIngredients=>{
        recipesIngredients.increments("id");
        recipesIngredients.string("unit_of_measurement", 100).notNullable();
        recipesIngredients.float("quantity").notNullable();
        recipesIngredients.integer("recipe").unsigned().notNullable()
            .references("recipes.id")
            .onUpdate("CASCADE")
            .onDelete("NO ACTION");
        recipesIngredients.integer("ingredients").unsigned().notNullable()
            .references("ingredients.id")
            .onUpdate("CASCADE")
            .onDelete("NO ACTION");
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes")
};
