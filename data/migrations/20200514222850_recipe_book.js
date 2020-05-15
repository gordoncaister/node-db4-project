
exports.up = function(knex) {
    return knex.schema
    .createTable("recipes",recipes=>{
        recipes.increments();
        recipes.string("name", 255).notNullable();
    })
    .createTable("steps",steps=>{
        steps.increments();
        steps.integer("number").notNullable();
        steps.text("description").notNullable();
    })
    .createTable("ingredients",ingredients=>{
        ingredients.increments();
        ingredients.string("name", 255).notNullable();
        
    })
    .createTable("recipes",recipes=>{
        recipes.increments();
        recipes.string("unit_of_measurement", 100).notNullable();
        ingredients.float("quanitity").notNullable();
    })
  
};

exports.down = function(knex) {
  
};
