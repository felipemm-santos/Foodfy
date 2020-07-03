const express = require('express');

const nunjucks = require('nunjucks');

const server = express();
const recipes = require('./data');

server.set('view engine', 'njk');

server.use(express.static('public'));

nunjucks.configure('views', {
  express: server,

  // Permite html dentro de variáveis
  autoescape: false,
  noCache: true,
});

server.get('/', (req, res) => {
  return res.render('home'});
});

server.get('/recipes', (req, res) => {
  return res.render('recipes');
});

// server.get('/recipes/:index', (req, res) => {
//     const id = req.params.id;

//   const recipe = recipe.find((recipe) => recipe.id == id);

//   if (!recipe) {
//     return res.status(404).render('not-found');
//   }
//     return res.render('recipes' , { ecipe });
//   });
