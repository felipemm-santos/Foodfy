const data = require('../data.json');
const recipes = data.recipes;

exports.index = (req, res) => {
  return res.render('admin/index', { recipes });
};

exports.create = (req, res) => {

  return res.render('admin/create');
};

exports.show = (req, res) => {
  const recipeIndex  = req.params.index;

  const recipe = recipes[recipeIndex];
  if (!recipe) {
    return res.status(404).render('website/not-found');
  }

  return res.render(`admin/recipe`, {recipe});
};
