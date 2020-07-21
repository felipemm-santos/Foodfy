const recipes = require('../data');

exports.home = (req, res) => {
  return res.render('website/home', {
    recipes: recipes.slice(0, 6),
  });
};

exports.about = (req, res) => {
  return res.render('website/about-page');
};

exports.recipes = (req, res) => {
  return res.render('website/recipes-page', { recipes });
};

exports.show = (req, res) => {
  const recipeIndex = req.params.index;

  const recipe = recipes[recipeIndex];

  if (!recipe) {
    return res.status(404).render('not-found');
  }
  return res.render('website/recipe', { recipe });
};
