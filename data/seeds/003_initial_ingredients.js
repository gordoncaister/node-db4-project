
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'eggs'},
        {id: 2, name: 'bread'},
        {id: 3, name: 'shredded cheese'},
        {id: 4, name: 'butter'}
      ]);
    });
};
