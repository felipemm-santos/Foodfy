const fs = require('fs');
const data = require('../data.json');

exports.index = (req, res) => {
  return res.render('admin/index', { recipes: data.recipes });
};

exports.create = (req, res) => {
  return res.render('admin/create');
};

exports.show = (req, res) => {
  const recipes = data.recipes;
  const recipeIndex = req.params.index;

  const recipe = recipes[recipeIndex];
  if (!recipe) {
    return res.status(404).render('website/not-found');
  }

  return res.render('admin/recipe', { recipe });
};

exports.post = (req, res) => {
  const Keys = Object.keys(req.body);

  for (const key of Keys) {
    // req.body.key == ''
    if (req.body[key] == '') {
      return res.send('Por favor , preencha todos os campos');
    }
  }

  lastRecipe = data.recipes[data.recipes.length - 1];

  if (lastRecipe) {
    req.body.id = lastRecipe.id + 1;
  } else {
    req.body.id = 1;
  }

  data.recipes.push(req.body);

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Write file error!');

    return res.redirect('/admin/recipes');
  });
};
