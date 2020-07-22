const data = require('../data.json');
const recipes = data.recipes;

exports.index = (req, res) => {
  return res.render('admin/index', {recipes});
};
