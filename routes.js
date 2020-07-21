const express = require('express');
const routes = express.Router();
const website = require('./controllers/website')

routes.get('/', (req, res) => res.redirect('/website'));
routes.get('/website', website.home);
routes.get('/about', website.about);
routes.get('/recipes', website.recipes);
routes.get('/recipes/:index', website.show);


routes.use((req, res) => res.status(404).render('not-found'));

module.exports = routes;
