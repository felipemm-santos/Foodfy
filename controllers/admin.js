const fs = require("fs");
const data = require("../data.json");

exports.index = (req, res) => {  
  return res.render("admin/index", { recipes: data.recipes });
};

exports.create = (req, res) => {
  return res.render("admin/create");
};

exports.post = (req, res) => {
  const Keys = Object.keys(req.body);

  for (const key of Keys) {
    // req.body.key == ''
    if (req.body[key] == "") {
      return res.send("Por favor , preencha todos os campos");
    }
  }  

  const index = data.recipes.length;
  req.body.index = index;

  data.recipes.push(req.body);

  fs.writeFile("./data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error!");

    return res.redirect("/admin/recipes");
  });
};

exports.show = (req, res) => {
  const recipes = data.recipes;
  const recipeIndex = req.params.index;

  const foundRecipe = recipes[recipeIndex];
  if (!foundRecipe) {
    return res.status(404).render("website/not-found");
  }

  const recipe = {
    ...foundRecipe,
    index: recipeIndex,
  };

  return res.render("admin/recipe", { recipe });
};

exports.edit = (req, res) => {
  const recipes = data.recipes;
  const recipeIndex = req.params.index;

  const recipe = recipes[recipeIndex];

  if (!recipe) {
    return res.status(404).render("website/not-found");
  }

  return res.render("admin/edit", { recipe });
};

exports.put = (req, res) => {
  const recipes = data.recipes;

  const { index } = req.body;
  const foundRecipe = recipes[index];

  if (!foundRecipe) {
    return res.send("Recipe not found!");
  }

  const recipe = {
    ...foundRecipe,
    ...req.body,
  };

  data.recipes[index] = recipe;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.sned("Write file error !");

    return res.redirect(`/admin/recipes/${index}`);
  });
};

exports.delete = (req, res) => {
  recipes = data.recipes;

  const { index } = req.body;

  const filteredRecipes = data.recipes.filter(
    (recipe) => recipe.index != index
  ); 

  data.recipes = filteredRecipes;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error!");

    return res.redirect("/admin/recipes");
  });
};
