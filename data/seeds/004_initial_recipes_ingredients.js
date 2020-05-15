
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {id: 1, ingredient: 1, recipe: 1, quantity: 2, unit_of_measurement: 'large'},
        {id: 2, ingredient: 2, recipe: 2, quantity: 2, unit_of_measurement: 'slices'},
        {id: 3, ingredient: 3, recipe: 2, quantity: 1, unit_of_measurement: 'cup'},
        
      ]);
    });
};
