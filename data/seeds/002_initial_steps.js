
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe: 1, number: 1, description: "Place frying pan over heat source" },
        {id: 2, recipe: 1, number: 2, description: "Crack 2 eggs into frying pan, making sure to exclude shells" },
        {id: 3, recipe: 1, number: 3, description: "Monitor carefully to make sure heat is not too high, eggs will bubble if too hot" },
        {id: 4, recipe: 1, number: 4, description: "Remove eggs when cooked to preference, salt and pepper lightly" },
        {id: 5, recipe: 2, number: 1, description: "Butter both sides of two pieces of bread" },
        {id: 6, recipe: 2, number: 2, description: "Place shredded cheese inbetween the slices of bread" },
        {id: 7, recipe: 2, number: 3, description: "Place sandwich into George Foreman, set to grilled cheese. Remove when completed." },
      ]);
    });
};
