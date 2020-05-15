exports.up = function(knex) {
    return knex.schema.table("recipes_ingredients",table=>{
      table.renameColumn("ingredients","ingredient")
    })
  };
  
  exports.down = function(knex) {
    
  };