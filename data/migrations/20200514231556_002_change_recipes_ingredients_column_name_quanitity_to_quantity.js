
exports.up = function(knex) {
  return knex.schema.table("recipes_ingredients",table=>{
    table.renameColumn("quanitity","quantity")
  })
};

exports.down = function(knex) {
  
};
