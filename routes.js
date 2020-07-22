const express = require('express');
const routes = express.Router();
const website = require('./controllers/website')
const admin  = require('./controllers/admin')

routes.get('/', (req, res) => res.redirect('/website'));
routes.get('/website', website.index);
routes.get('/about', website.about);
routes.get('/recipes', website.recipes);
routes.get('/recipes/:index', website.show);

// Admin

routes.get("/admin", (req, res) => res.redirect("/admin/recipes"));
routes.get("/admin/recipes", admin.index); // Mostrar a lista de receitas


routes.use((req, res) => res.status(404).render('website/not-found'));

module.exports = routes;
