
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Fried Eggs'},
        {name: 'Grilled Cheese'},
        {name: 'Pasta Salad'}
      ]);
    });
};
